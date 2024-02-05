import { Route, Routes } from "react-router-dom";
import { InfoPage } from "./Routes/InfoPage/InfoPage";

import Navbar from "./Components/Navbar/Navbar";
import CodechefCompare from "./Routes/CodechefCompare/CodechefCompare";
import Home from "./Routes/Home/Home";

function App() {
  const path = window.location.pathname;
  console.log("location", path);
  return (
    <>
      {/* lets try having a hacker theme */}
      {path == "/start" ? (
        <Routes>
          <Route path="/start" element={<Home />}></Route>
        </Routes>
      ) : (
        <>
          <Navbar style />
          <div style={{ marginTop: "100px" }}>
            <Routes>
              <Route path="/" element={<InfoPage />}></Route>
              <Route path="/codechef" element={<InfoPage />}></Route>
              <Route path="/hackerearth" element={<InfoPage />}></Route>
              <Route path="/codeforces" element={<InfoPage />}></Route>
              <Route path="/leetcode" element={<InfoPage />}></Route>
              <Route
                path="/codechef-compare"
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
