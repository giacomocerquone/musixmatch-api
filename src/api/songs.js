import api from "services/api";
import * as endpoints from "constants/endpoints";

export const fetchTopSongs = async (params) => {
  try {
    const res = await api.get(endpoints.topSongs, { params });
    return res;
  } catch (e) {
    throw e;
  }
};

export const fetchSongSnippet = async (params) => {
  try {
    const res = await api.get(endpoints.songSnippet, { params });
    return res;
  } catch (e) {
    throw e;
  }
};
