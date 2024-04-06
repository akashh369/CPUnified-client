import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import "./Navbar.css";
import { PATHS, STORAGE_KEYS } from "../../commonService/enum";
import { clearLocalStorage } from "../../service/constants";

const Navbar = () => {
  const completeLocation = window.location.href;
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
          <div onClick={() => {
            clearLocalStorage();
            window.location.href =
              completeLocation.slice(0, completeLocation.lastIndexOf("/")) + PATHS.LANDING_PAGE;
          }}>
            <NavLink className="navElement">
              <Typography>LOGOUT</Typography>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
