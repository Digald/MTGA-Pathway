import React, { Component } from "react";
// Components
// import CornerSpace from "../../Components/CornerSpace/CornerSpace";
// import TopBar from "../../Components/TopBar/TopBar";
// import SideBar from "../../Components/SideBar/SideBar";
// import DashBoardView from "../../Components/DashboardView/DashboardView";
// import LoadingPage from "../../Components/LoadingPage/LoadingPage";

class Dashboard extends Component {
  render() {
    // const { isLoaded } = this.props;
    // if (!isLoaded) return <LoadingPage />;
    return (
      <div className="Dashboard main-grid">
      sup
        {/* <CornerSpace />
        <TopBar title="DASHBOARD" activePage="dashboard" />
        <SideBar activePage="dashboard" />
        <DashBoardView /> */}
        
        <style jsx>{`
          body {
            background-color: black;
          }
        `}</style>
      </div>
    );
  }
}

export default Dashboard;