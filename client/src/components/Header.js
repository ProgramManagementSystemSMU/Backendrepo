import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    background: "none",
  },
  appbars: {
    background: "none",
  },
  appnarWrapper: {
    background: "none",
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  title: {
    color: "#fff",
    fontSize: "3rem",
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.appbars}>
        <div className="appbar">
          <AppBar className={classes.appbars} elevation={0}>
            <Toolbar className={classes.appnarWrapper}>
              <h1 className={classes.appbarTitle}>SMU WEBSITE</h1>
              <Typography variant="h4" className={classes.appbarTitle}>
                <Link to="/Bookings" className="linkss">
                  Box Booking
                </Link>
              </Typography>
              <Typography variant="h4" className={classes.appbarTitle}>
                <Link to="/ClassBookings" className="linkss">
                  Class Booking
                </Link>
              </Typography>
              <Typography variant="h4" className={classes.appbarTitle}>
                <Link to="/officehourbooking" className="linkss">
                  Office Hour Booking
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <h1 className={classes.title}>
            Welcome to the <br />
            SMU <span className={classes.colorText}>Website</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
