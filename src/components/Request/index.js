import { Component } from "react";
import "./index.css";

class Request extends Component {
  state = {
    date: "",
    topware: "",
    bottomware: "",
    woolen: "",
    others: "",
    service: "",
    contact: "",
    description: "",
  };

  render() {
    const {
      date,
      topware,
      bottomware,
      woolen,
      others,
      service,
      contact,
      description,
    } = this.state;
    return (
      <>
        <div className="request-bg-container">
          <div className="date-container">
            <label className="datelabel" htmlFor="date">
              Date
            </label>
            <input className="date-input" type="date" id="date" value={date} />
          </div>
          <div className="date-container">
            <label className="datelabel" htmlFor="top">
              Topware
            </label>
            <input
              className="date-input"
              type="text"
              id="top"
              value={topware}
            />
          </div>
          <div className="date-container">
            <label className="datelabel" htmlFor="bottomware">
              Bottomware
            </label>
            <input
              className="date-input"
              type="text"
              id="bottomware"
              value={bottomware}
            />
          </div>
          <div className="date-container">
            <label className="datelabel" htmlFor="woolen">
              Woolen wear
            </label>
            <input
              className="date-input"
              type="text"
              id="woolen"
              value={woolen}
            />
          </div>
          <div className="date-container">
            <label className="datelabel" htmlFor="others">
              Others
            </label>
            <select
              className="date-input"
              type="text"
              id="others"
              value={others}
            />
          </div>
          <div className="date-container">
            <label className="datelabel" htmlFor="Description">
              select servicers
            </label>
            <select name="select servicers">
              <option value="wash">Wash</option>
              <option value="dry-clean">Dry-clean</option>
              <option value="iron">Iron</option>
              <option value="maintainance">Maintainance</option>
            </select>
          </div>
          <div className="date-container">
            <label className="datelabel" htmlFor="contact">
              Contact Person
            </label>
            <input
              className="date-input"
              type="text"
              id="contact"
              value={contact}
            />
          </div>
          <div className="date-container">
            <label className="datelabel" htmlFor="Description">
              Description
            </label>
            <input
              className="date-input"
              type="text"
              id="Description"
              value={description}
            />
          </div>
        </div>
        <button className="login-button">Submit</button>
      </>
    );
  }
}

export default Request;
