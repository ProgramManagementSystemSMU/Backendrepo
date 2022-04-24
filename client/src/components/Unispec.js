import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { DarkModeContext } from "./context/darkModeContext";
function Unispec() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <Stack direction="row" spacing={2}>
            <Link to="/msbstudent">
              <Button color="secondary">Msb</Button>
            </Link>
            <Link to="/medtechstudent">
              <Button variant="contained" color="success">
                Medtech
              </Button>
            </Link>
            <Link to="/lcistudent">
              <Button variant="outlined" color="error">
                LCI
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Unispec;
