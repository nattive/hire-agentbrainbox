import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GoCommentDiscussion, GoBell } from "react-icons/go";
import { Badge } from "rsuite";
import { me } from "../Actions/loginAction";
import logo from "../Assets/img/logo/logo.png";
import { GrUserManager } from "react-icons/gr";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import "./style.css";
const HeaderSection = (props) => {
  const [collapse, setCollapse] = React.useState(true);
  useEffect(() => {
    props.me();
  }, []);
  return (
    <div>
      <div className="header-area header-transparent navbar-header">
        <div className="header-top header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="container">
                  <div className="mobile_menu d-block d-lg-none ">
                    <div className="float-right">
                      <a href="#" onClick={() => setCollapse(!collapse)}>
                        {collapse ? <IoMenuOutline /> : <IoClose />}
                      </a>{" "}
                    </div>
                    <div
                      className={`bg-light p-3 ${
                        collapse ? "collapsed" : null
                      }`}
                    >
                      <ul className="bg-block">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/agents"> Agent near you </Link>
                        </li>
                        <li>
                          <Link to="/agency"> Agencies </Link>
                        </li>
                        {props.user.id ? (
                          <>
                            <li>
                              <Link to="/account">My Account</Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link to="/auth">Register</Link>
                            </li>
                            <li>
                              <Link to="/auth/login">Login</Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="menu-wrapper">
                  <div className="main-menu">
                    <nav className="d-none d-lg-block">
                      <ul id="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/agents"> Agent near you </Link>
                        </li>
                        <li>
                          <Link to="/agency"> Agencies </Link>
                        </li>

                        {/* <li>
                          <a href="about.html">HRs</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Locate an HR</a>
                            </li>
                            <li>
                              <a href="single-blog.html">
                                Sign up as an HR companies
                              </a>
                            </li>
                          </ul>
                        </li> */}
                        <li>
                          <a href="about.html">Blacklists</a>
                        </li>
                        {/* 
                        <li>
                          <a href="#">About</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">How we work</a>
                            </li>
                            <li>
                              <a href="single-blog.html">Who we are</a>
                            </li>
                            <li>
                              <a href="elements.html">Our Team</a>
                            </li>
                            <li>
                              <a href="job_details.html">Find Us</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                     */}
                      </ul>
                    </nav>
                  </div>
                  <div className="header-btn d-none f-right d-lg-block">
                    {props.user.id ? (
                      <div className="main-menu">
                        <ul id="navigation">
                          <li>
                            <Link to="/account">
                              <h5>
                                {/* <Badge content={0} /> */}
                                <div className="head-menu">
                                  <GrUserManager />
                                  <small className="head-menu text-dark">
                                    Your Account
                                  </small>
                                </div>
                              </h5>
                            </Link>
                          </li>
                          <li>
                            <Link to="/auth/register">
                              <h5>
                                <div className="head-menu">
                                  <Badge content={0} /> <GoBell />
                                  <small className="head-menu text-dark">
                                    Notification
                                  </small>
                                </div>
                              </h5>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <>
                        <Link to="/auth" className="btn head-btn2">
                          Register
                        </Link>
                        <Link to="/auth/login" className="btn head-btn2">
                          Login
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { me };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSection);
