import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography, Hidden } from "@mui/material";
import "./Navbar.css";
import { PATHS, STORAGE_KEYS } from "../../commonService/enum";
import { clearLocalStorage } from "../../service/constants";
import { MouseContext } from "../../App";

const Navbar = () => {
  const completeLocation = window.location.href;
  const currentUserName = localStorage.getItem(STORAGE_KEYS.USERNAME);
  const [toggleUserOptions, setToggleUserOptions] = useState(true);
  const [doubleMouse, setDoubleMouse] = useContext(MouseContext);
  return (
    <Box>
      <AppBar sx={{ position: 'fixed', marginBottom: '10px' }}>   {/*check what should be the position */}
        <Toolbar className="navClass">
          <div className="nav-elements">
            <NavLink
              to={PATHS.ALL}
              className={({ isActive }) => { ; return isActive ? "activeNavElement" : "navElement" }
              }
            >
              <Typography>ALL</Typography>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavElement" : "navElement"
              }
              to={PATHS.CODECHEF}
            >
              <Typography>CODECHEF</Typography>
            </NavLink>

            <NavLink to={PATHS.CODEFORCES}

              className={({ isActive }) =>
                isActive ? "activeNavElement" : "navElement"
              }
            >
              <Typography>CODEFORCES</Typography>
            </NavLink>

            <NavLink to={PATHS.LEETCODE}
              className={({ isActive }) =>
                isActive ? "activeNavElement" : "navElement"
              }
            >
              <Typography>LEETCODE</Typography>
            </NavLink>

            <NavLink to={PATHS.CODECHEF_COMPARE}
              className={({ isActive }) =>
                isActive ? "activeNavElement" : "navElement"
              }
            >
              <Typography>COMPARE</Typography>
            </NavLink>
          </div>
          <div className="user-options">
            <div className="hello-container" onClick={() => setToggleUserOptions(!toggleUserOptions)}>Hello {currentUserName}</div>
            <div onClick={() => setToggleUserOptions(!toggleUserOptions)}>
              {/* UP ICON */}
              {toggleUserOptions ?
                <svg width='48px' height='48px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M7 10L12 15L17 10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
                : ''}

              {/* DOWN ICON */}
              {!toggleUserOptions ?
                <svg width='48px' height='48px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M7 10L12 15L17 10" stroke="#fffafa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
                : ''}
            </div>

            <div className="user-options-container" style={toggleUserOptions ? { height: '0px', overflow: 'hidden' } :
              {
                height: '100px',
                '-webkit-box-shadow': '3px 3px 33px 2px rgba(3, 3, 3, 0.75)',
                '-moz-box-shadow': '3px 3px 33px 2px rgba(3, 3, 3, 0.75)',
                'box-shadow': '3px 3px 33px 2px rgba(3, 3, 3, 0.75)',
              }}>
              <div onClick={() => setDoubleMouse(!doubleMouse)}>{!doubleMouse ? 'Enable' : 'Disable'} Double Mouses</div>
              <hr></hr>
              <div onClick={() => {
                clearLocalStorage();
                window.location.href =
                  completeLocation.slice(0, completeLocation.lastIndexOf("/")) + PATHS.LANDING_PAGE;
              }}>Logout</div>
            </div>

            {/* <NavLink className="navElement" 
            }}>
            </NavLink> */}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
