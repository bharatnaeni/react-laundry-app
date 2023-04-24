import { Component } from "react";
import { AiOutlineDashboard, AiOutlineFolder } from "react-icons/ai";
import Header from "../Header";
import Status from "../Status";
import Request from "../Request";
import "./index.css";

class Dashboard extends Component {
  state = { isStatus: true };

  onClickRequestTab = () => {
    this.setState({ isStatus: false });
  };

  onClickStatusTab = () => {
    this.setState({ isStatus: true });
  };

  render() {
    const { isStatus } = this.state;
    return (
      <>
        <Header />
        <div className="dashboard-container">
          <div className="side-nav">
            <ul className="sidenav-list-container">
              <li className="sidenav-listitem">
                <AiOutlineDashboard />
                <h1 className="dashboard-sidenav">Dashboard</h1>
              </li>
              <li className="sidenav-listitem" onClick={this.onClickRequestTab}>
                <AiOutlineFolder />
                <h1 className="dashboard-sidenav">Laundry Request</h1>
              </li>
              <li className="sidenav-listitem" onClick={this.onClickStatusTab}>
                <AiOutlineFolder />
                <h1 className="dashboard-sidenav">Request Status</h1>
              </li>
            </ul>
          </div>
          <div className="actual-dashboard-container">
            <div className="Dashboard-overview-top">
              <h1 className="Dashboard-actual">
                Dashboard <span className="overview">/ Overview</span>
              </h1>
            </div>
            {isStatus ? <Status /> : <Request />}
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
