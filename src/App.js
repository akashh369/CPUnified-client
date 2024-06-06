import { Route, Routes } from "react-router-dom";
import { InfoPage } from "./Routes/InfoPage/InfoPage";

import Navbar from "./Components/Navbar/Navbar";
import CodechefCompare from "./Routes/CodechefCompare/CodechefCompare";
import Home from "./Routes/Home/Home";
import { createContext, useEffect, useState } from "react";
import { redirectIfPathInvalid } from "./service/constants";
import { PATHS } from "./commonService/enum";

export const MouseContext = createContext();

function App() {
  const path = window.location.pathname;

  useEffect(() => {
    redirectIfPathInvalid();
    console.log("path", path);
  });

  const [doubleMouse, setDoubleMouse] = useState(true);

  return (
    <MouseContext.Provider value={[doubleMouse, setDoubleMouse]} >
      {/* lets try having a hacker theme */}
      {path == `${PATHS.LANDING_PAGE}` ? (
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
    </MouseContext.Provider>
  );
}

export default App;
