import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Unispec() {
  return (
    <div>
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
  );
}

export default Unispec;
