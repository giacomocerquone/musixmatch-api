import api from "services/api";
import * as endpoints from "constants/endpoints";
import queryString from "query-string";

export const fetchTopSongs = async (params) => {
  try {
    const body = queryString.stringify(params);
    const res = await api.get(endpoints.topSongs, body);
    return res;
  } catch (e) {
    throw e;
  }
};

export const fetchSongLyrics = async (params) => {
  try {
    const body = queryString.stringify(params);
    const res = await api.get(endpoints.songLyrics, body);
    return res;
  } catch (e) {
    throw e;
  }
};
