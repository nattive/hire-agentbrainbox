import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/custom.css";
import "./font/flaticon.css";
import { connect, useDispatch } from "react-redux";
import { AUTH_REDIRECT } from "../../Actions/types";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AuthHome() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAuthRedirect = (link) => {
    dispatch({ type: AUTH_REDIRECT, payload: link });
    history.push('/auth/register');
  };
  return (
    <div className="container p-4 registration-page">
      <div
        className="card card-body mx-auto w-70 m-4"
        style={{ height: "400px" }}
      >
        <h3 className="text-muted text-center">Which disctibes you more?</h3>
        <ul className="register-list">
          <li>
            <a onClick={() => handleAuthRedirect("/")}>
              <span
                style={{ fontSize: "100px" }}
                class="flaticon-headhunting "
              ></span>
              <p>I am looking for agents to employ</p>
            </a>
          </li>
          <li>
            <a onClick={() => handleAuthRedirect("create-agency")}>
              <span class="flaticon-search"></span>
              <p>
                I am an HR agency, Seeking for employers for my agents my agents
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AuthHome;
