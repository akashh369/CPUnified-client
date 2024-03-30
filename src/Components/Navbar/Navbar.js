import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import "./Navbar.css";
import { PATHS } from "../../commonService/enum";

const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{ position: 'fixed', marginBottom: '10px' }}>   {/*check what should be the position */}
        <Toolbar className="navClass">
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

          <NavLink to={PATHS.HACKEREARTH}
            className={({ isActive }) =>
              isActive ? "activeNavElement" : "navElement"
            }
          >
            <Typography>HACKEREARTH</Typography>
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

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
