import axios from "../config/axios-config";
import { API_URL } from "../commonService/enum";

const url = API_URL + "/codechef";

export const getUserData = async (username = "akashh_bhandar", ccUserRefNumber = "NA") => {
  if (typeof username == "string") {
    try {
      const res = await axios.get(url + `/user/?username=${username}&ccUserRefNumber=${ccUserRefNumber}`);
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
    const res = await axios.get(API_URL + `/facts`);
    return res.data;
  } catch (err) { }
};

export const getCodechefUsers = async () => {
  try {
    const res = await axios.get(url + "/getUsers");
    return res.data;
  } catch (err) { }
};

export const getCCContestData = async (ccUserRef1, ccUserRef2) => {
  try {
    const res = await axios.post(url + '/cc-contest-compare-data', { ccUserRef1, ccUserRef2 });
    return res.data;
  } catch (err) { }
}
