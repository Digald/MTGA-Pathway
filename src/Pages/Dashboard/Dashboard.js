import React, { Component } from "react";
import "./Dashboard.css";
// Components
import CornerSpace from "../../Components/CornerSpace/CornerSpace";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from "../../Components/SideBar/SideBar";
import DashBoardView from '../../Components/DashboardView/DashboardView';

class Dashboard extends Component {
  state = {
    activePage: "dashboard"
  };

  render() {
    return (
      <div className="Dashboard main-grid">
        <CornerSpace />
        <TopBar activePage={this.state.activePage}/>
        <SideBar activePage={this.state.activePage}/>
        <DashBoardView/>
      </div>
    );
  }
}

export default Dashboard;
