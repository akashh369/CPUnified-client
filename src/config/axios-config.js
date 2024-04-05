import axios from "axios";
import { PATHS, STORAGE_KEYS } from "../commonService/enum";

const instance = axios.create();
instance.interceptors.request.use((config) => {
  if (window.location.pathname == PATHS.LANDING_PAGE) return config;

  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  } else {
    // alert("session timeout please login again");
    window.location.pathname = PATHS.LANDING_PAGE
    //redirect to login page
    // window.location.href = window.location.href + "forceful-redirect";
  }
  return config;
});

instance.interceptors.response.use((config) => {
  if (config.data?.sessionExpired) {
    window.localStorage.removeItem(STORAGE_KEYS.TOKEN);
    
  }
  return config;
})

export default instance;
