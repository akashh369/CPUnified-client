import axios from "../config/axios-config";

const appUrl = "http://localhost:4999/";
const url = appUrl + "codechef";

export const getUserData = async (username = "akashh_bhandar") => {
  if (typeof username == "string") {
    try {
      const res = await axios.get(url + `/user/?username=${username}`);
      return res.data;
    } catch (err) {
      // alert(err);
    }
  }
};

export const refreshUserData = async (username = "akashh_bhandar") => {
  if (typeof username == "string") {
    try {
      const res = await axios.post(url + "/refresh-data", {
        username: username,
      });
      return res.data;
    } catch (err) {
      // alert(err);
    }
  }
};

export const getFacts = async () => {
  try {
    const res = await axios.get(appUrl + `/facts`);
    return res.data;
  } catch (err) {}
};

export const getCodechefUsers = async () => {
  try {
    const res = await axios.get(url + "/getUsers");
    return res.data;
  } catch (err) {}
};
