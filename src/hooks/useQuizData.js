import { fetchTopArtists } from "api/artists";
import { fetchTopSongs, fetchSongSnippet } from "api/songs";
import { useEffect, useState } from "react";
import { cardsPerQuiz } from "constants/params";
import pickRandomElements from "utils/pickRandomElements";
import shuffleArray from "utils/shuffleArray";
import { showMessage } from "react-native-flash-message";

export const fetchDataEffect = async (playing, setStatus, setData) => {
  const fetchData = async () => {
    setStatus("pending");
    try {
      const {
        data: {
          message: {
            body: { track_list: topSongs },
          },
        },
      } = await fetchTopSongs({
        chart_name: "top",
        page: 1,
        page_size: 30,
        country: "it",
        f_has_lyrics: 1,
      });
      const {
        data: {
          message: {
            body: { artist_list: topArtists },
          },
        },
      } = await fetchTopArtists({
        page: 1,
        page_size: 30,
        country: "it",
      });

      const songs = pickRandomElements(topSongs, cardsPerQuiz);
      const songsSnippets = await Promise.all(
        songs.map((s) =>
          fetchSongSnippet({
            track_id: s.track.track_id,
          })
        )
      );

      // extract "cardsPerQuiz" songs from the top
      // extract 2 * "cardsPerQuiz" artists from the top
      // (2 because one must be the correct answer and therefore we use the song's artist)

      const artists = pickRandomElements(topArtists, cardsPerQuiz * 2);

      const data = songsSnippets.reduce((acc, s, idx) => {
        const randomPickedArtists = artists.splice(0, cardsPerQuiz - 1);
        const artistsToChoose = [
          { name: songs[idx].track.artist_name, right: true },
          ...randomPickedArtists.map((a) => ({ name: a.artist.artist_name })),
        ];

        acc.push({
          snippet: s.data.message.body.snippet.snippet_body,
          artists: shuffleArray(artistsToChoose),
        });

        return acc;
      }, []);

      setData(data);
      setStatus("fulfilled");
    } catch (e) {
      showMessage({
        message: "Si è verificato un errore!",
        description:
          "Sembra ci sia qualche problema con i nostri server, riprova più tardi!",
        type: "danger",
      });
      setStatus("rejected");
    }
  };

  if (playing) {
    fetchData();
  }
};

const useQuizData = (playing) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataEffect(playing, setStatus, setData);
  }, [playing]);

  return [status, data];
};

export default useQuizData;
