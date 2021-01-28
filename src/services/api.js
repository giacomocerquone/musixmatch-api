import axios from "axios";
import * as endpoints from "constants/endpoints";
import { apiKey } from "constants/keys";
import qs from "query-string";
import { showMessage } from "react-native-flash-message";

const api = axios.create({
  baseURL: endpoints.apiOrigin,
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

const apiReqInterceptor = (config) => {
  console.log("Api request sent:", config.url, config.baseURL);

  config.params.apikey = apiKey;
  return config;
};

const errorReq = (error) => {
  console.log("Request error: ", error);
  Promise.reject(error);
};

const apiErrorRes = async (error) => {
  console.log("Response error: ", error);
  if (axios.isCancel(error)) {
    return;
  }

  const {
    response: { status },
  } = error;

  if (error?.message === "Network Error") {
    showMessage({
      message: "Non sei connesso!",
      description: "Non hai un connessione attiva funzionante.",
      type: "warning",
    });
  } else if (status >= 500) {
    showMessage({
      message: "Si è verificato un errore!",
      description:
        "Sembra ci sia qualche problema con i nostri server, riprova più tardi!",
      type: "danger",
    });
  }

  return Promise.reject(error);
};

api.interceptors.request.use(apiReqInterceptor, errorReq);
api.interceptors.response.use((config) => config, apiErrorRes);

export default api;
