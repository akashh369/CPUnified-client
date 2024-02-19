import { PATHS } from "../commonService/enum";
export const allDefinedPaths = {
  LOGINSIGNUP: "/",
  ALL: "/all",
  CODECHEF: "/codechef",
  HACKEREARTCH: "/hackerearth",
  CODEFORCES: "/codeforces",
  LEETCODE: "/leetcode",
};
export const redirectIfPathInvalid = () => {
  const location = window.location.pathname;
  const completeLocation = window.location.href;
  const pathTruthy = Object.values(allDefinedPaths).find(
    (path) => path == location
  );
  if (!pathTruthy) {
    window.location.href =
      completeLocation.slice(0, completeLocation.lastIndexOf("/")) + PATHS.CODECHEF_COMPARE;
  }
};
