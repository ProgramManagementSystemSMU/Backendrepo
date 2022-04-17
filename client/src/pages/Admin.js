import React from "react";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Widget from "../components/Widget";
import "./admin.scss";

const Admin = () => {
  return (
    <div className="home">
      {/* <h1 className="title">Lama dev</h1> */}
      {/* <Sidebar /> */}
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Admin;
