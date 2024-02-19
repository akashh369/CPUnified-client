import { Route, Routes } from "react-router-dom";
import { InfoPage } from "./Routes/InfoPage/InfoPage";

import Navbar from "./Components/Navbar/Navbar";
import CodechefCompare from "./Routes/CodechefCompare/CodechefCompare";
import Home from "./Routes/Home/Home";
import { useEffect } from "react";
import { redirectIfPathInvalid } from "./service/constants";
import { PATHS } from "./commonService/enum";

function App() {
  const path = window.location.pathname;

  useEffect(() => {
    redirectIfPathInvalid();
  });

  return (
    <>
      {/* lets try having a hacker theme */}
      {path == ` ${PATHS.LANDING_PAGE}` ? (
        <Routes>
          <Route path={PATHS.LANDING_PAGE} element={<Home />}></Route>
        </Routes>
      ) : (
        <>
          <Navbar style />
          <div style={{ marginTop: "100px" }}>
            <Routes>
              <Route path={PATHS.ALL} element={<InfoPage />}></Route>
              <Route path={PATHS.CODECHEF} element={<InfoPage />}></Route>
              <Route path={PATHS.HACKEREARTH} element={<InfoPage />}></Route>
              <Route path={PATHS.CODEFORCES} element={<InfoPage />}></Route>
              <Route path={PATHS.LEETCODE} element={<InfoPage />}></Route>
              <Route
                path={PATHS.CODECHEF_COMPARE}
                element={<CodechefCompare />}
              ></Route>
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
