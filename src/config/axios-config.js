import axios from "axios";

const instance = axios.create()
instance.interceptors.request.use((config) => {
  console.log("config");
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer" + token;
  }
  else
  {
    alert('session timeout please login again')
    window.location.href=window.location.href+'forceful-redirect'
  }
  return config;
});

export default instance