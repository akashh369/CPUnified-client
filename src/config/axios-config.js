import axios from "axios";

const instance = axios.create();
instance.interceptors.request.use((config) => {
  if (window.location.pathname == "/") return config;

  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  } else {
    alert("session timeout please login again");
    //redirect to login page
    // window.location.href = window.location.href + "forceful-redirect";
  }
  return config;
});

export default instance;
