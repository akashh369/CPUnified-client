import { PATHS } from "../commonService/enum";

export const redirectIfPathInvalid = () => {
  const location = window.location.pathname;
  const completeLocation = window.location.href;
  const pathTruthy = Object.values(PATHS).find(
    (path) => path == location
  );
  if (!pathTruthy) {
    window.location.href =
      completeLocation.slice(0, completeLocation.lastIndexOf("/")) + PATHS.CODECHEF_COMPARE;
  }
};

export const clearLocalStorage = () => {
  window.localStorage.clear();
}
