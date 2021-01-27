import axios from "axios";
import * as endpoints from "constants/endpoints";
// import { showMessage } from "react-native-flash-message";

const api = axios.create({
  baseURL: endpoints.apiOrigin,
});

const apiReqInterceptor = (config) => {
  console.log("Api request sent:", config.url, config.baseURL);

  // if (token) {
  //   const headers = {
  //     ...config.headers,
  //     Authorization: `Bearer ${token}`,
  //   };
  //   return {
  //     ...config,
  //     headers,
  //   };
  // }
  return config;
};

const errorReq = (error) => {
  console.log("Request error: ", error);
  // showMessage({
  //   message: "Si è verificato un errore!",
  //   description: "Sembra ci sia un problema con la connessione",
  //   type: "warning",
  // });

  Promise.reject(error);
};

const apiErrorRes = async (error) => {
  console.log("Response error: ", error);
  if (axios.isCancel(error)) {
    return;
  }

  const {
    config,
    response: { status, data },
  } = error;

  if (error?.message === "Network Error") {
    // showMessage({
    //   message: "Non sei connesso!",
    //   description:
    //     "Non hai un connessione attiva funzionante, nuovi dati saranno scaricati quando sarà tornata la linea.",
    //   type: "warning",
    // });
  } else if (status >= 500) {
    // showMessage({
    //   message: "Si è verificato un errore!",
    //   description:
    //     "Sembra ci sia qualche problema con i nostri server, riprova più tardi!",
    //   type: "danger",
    // });
  }

  return Promise.reject(error);
};

api.interceptors.request.use(apiReqInterceptor, errorReq);
api.interceptors.response.use((config) => config, apiErrorRes);

export default api;
