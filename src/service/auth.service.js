import axios from "../config/axios-config";

const url = "http://localhost:4999/";

export const loginUser = async (username, password) => {
  const completeLocation = window.location.href;
  await axios
    .post(`${url}/login`, { username, password })
    .then((res) => {
      //redirect if login successfull
      if (res.data.token) {
        window.localStorage.setItem("token", res.data.token);
        window.location.href =
          completeLocation.slice(0, completeLocation.lastIndexOf("/")) + "/all";
      }
      //alert if user not found
      else if (res.data?.userNotFound) {
        alert(res.data.message);
      }
      //alert if wrong password
      else if (res.data?.wrongPassword) {
        alert(res.data.message);
      }
    })
    .catch((err) => {
      alert(err);
    });
};

export const registerUser = (username, password, codechefUsername) => {
  axios
    .post(`${url}register`, {
      username,
      password,
      codechefUsername,
    })
    .then((res) => {
      if (res.status == 200) {
        window.location.href = "";
      }
    })
    .catch((err) => {
      alert(err);
    });
};
