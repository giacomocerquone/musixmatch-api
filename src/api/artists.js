import api from "services/api";
import * as endpoints from "constants/endpoints";
import queryString from "query-string";

export const fetchTopArtists = async (params) => {
  try {
    const body = queryString.stringify(params);
    const res = await api.get(endpoints.topArtists, body);
    return res;
  } catch (e) {
    throw e;
  }
};
