import axios from "axios";

const url = "http://localhost:4999/";

export const loginUser = async(username, password) => {
  await axios
    .post(`${url}/login`, { username, password })
    .then((res) => {
      if (res.status == 200) {
        // window.location.href = "";
        console.log('done',res)
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
