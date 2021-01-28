import api from "services/api";
import * as endpoints from "constants/endpoints";

export const fetchTopArtists = async (params) => {
  try {
    const res = await api.get(endpoints.topArtists, { params });
    return res;
  } catch (e) {
    throw e;
  }
};
