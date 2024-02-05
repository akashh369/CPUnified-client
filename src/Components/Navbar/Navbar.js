import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{position : 'fixed',marginBottom : '10px'}}>   {/*check what should be the position */}
        <Toolbar className="navClass">
          <NavLink
            to="/all"
            className={({ isActive }) =>
              {;return isActive ? "activeNavElement" : "navElement"}
            }
          >
            <Typography>ALL</Typography>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "activeNavElement" : "navElement"
            }
            to="/codechef"
          >
            <Typography>CODECHEF</Typography>
          </NavLink>

          <NavLink to="/codeforces"

            className={({ isActive }) =>
              isActive ? "activeNavElement" : "navElement"
            }
          >
            <Typography>CODEFORCES</Typography>
          </NavLink>

          <NavLink to="/hackerearth"
            className={({ isActive }) =>
              isActive ? "activeNavElement" : "navElement"
            }
          >
            <Typography>HACKEREARTH</Typography>
          </NavLink>
          <NavLink to="/leetcode"
            className={({ isActive }) =>
              isActive ? "activeNavElement" : "navElement"
            }
          >
            <Typography>LEETCODE</Typography>
          </NavLink>

          <NavLink to="/codechef-compare"
            className={({ isActive }) =>
              isActive ? "activeNavElement" : "navElement"
            }
          >
            <Typography>COMPARE</Typography>
          </NavLink>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
