import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SchoolIcon from "@mui/icons-material/School";
import FolderSharpIcon from "@mui/icons-material/FolderSharp";
import CalendarTodaySharpIcon from "@mui/icons-material/CalendarTodaySharp";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import BookmarkAddSharpIcon from "@mui/icons-material/BookmarkAddSharp";
import AppSettingsAltSharpIcon from "@mui/icons-material/AppSettingsAltSharp";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import BoyIcon from "@mui/icons-material/Boy";
import PaidIcon from "@mui/icons-material/Paid";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">SMU Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/">
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlinedIcon className="icon" />
            <Link to="/Teachers">
              <span>Teachers</span>
            </Link>
          </li>
          <li>
            <SchoolIcon className="icon" />
            <Link to="/Classrooms">
              <span>Classrooms</span>
            </Link>
          </li>
          <li>
            <FolderSharpIcon className="icon" />
            <Link to="/Courses">
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <BoyIcon className="icon" />
            <Link to="/Cohorts">
              <span>Cohorts</span>
            </Link>
          </li>
          <li>
            <CheckBoxOutlineBlankSharpIcon className="icon" />
            <Link to="/Boxs">
              <span>Boxs</span>
            </Link>
          </li>
          <p className="title"> FEATURES</p>
          <li>
            <CalendarTodaySharpIcon className="icon" />
            <Link to="Scheduel">
              <span>Schueling</span>
            </Link>
          </li>
          <li>
            <BookmarkAddSharpIcon className="icon" />
            <Link to="Bookings">
              <span>Booking</span>
            </Link>
          </li>
          <li>
            <ChatBubbleSharpIcon className="icon" />
            <span>Chat</span>
          </li>
          <li>
            <PaidIcon className="icon" />
            <span>Payement</span>
          </li>
          <li>
            <AppSettingsAltSharpIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <LogoutSharpIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
