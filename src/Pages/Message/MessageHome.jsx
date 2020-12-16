import React, { Component } from "react";
import { connect } from "react-redux";
import "./message.css";
import { Link } from "react-router-dom";
import MessageRoute from "./MessageRoute";
import {
  useRouteMatch,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
const MessageHome = (props) => {
    const location = useLocation();
    const {url} = useRouteMatch()
    console.log(location.pathname);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <ul className="message-menu">
            <li
              className={`${
                
                Location.pathname === "/message/view/messages" && "active"
              }`}
            >
              <Link to={`${url}/view/messages`}>Your Messages</Link>
            </li>
            <li>
              <Link to="/">Notifications</Link>
            </li>
            <li>
              <Link to="/">Tickets</Link>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-9">
          <MessageRoute />
        </div>
      </div>
      .
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessageHome);
