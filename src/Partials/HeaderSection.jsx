import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <div>
      <div className="header-area header-transparent">
        <div className="header-top header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
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
                        </li>
                        <li>
                          <a href="about.html">Blacklists</a>
                        </li>

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
                      </ul>
                    </nav>
                  </div>
                  <div className="header-btn d-none f-right d-lg-block">
                    <Link to="/auth/register" className="btn head-btn2">
                      Register
                    </Link>
                    <Link to="/auth/login" className="btn head-btn2">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSection);
