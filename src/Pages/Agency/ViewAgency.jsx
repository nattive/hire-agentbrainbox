import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import img from "../../Assets/img/testmonial/testimonial-founder.png";
import headerImage from "../../Assets/img/hero/about.jpg";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { getAgency } from "../../Actions/agentAction";
import { Link } from "react-router-dom";
import { sendAgentEnq } from "../../Actions/agentAction";
const ViewAgency = (props) => {
  const historyNav = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    props.getAgency(id);
  }, []);
  return (
    <>
      <div
        class="single-slider section-overly slider-height3 d-flex align-items-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="hero-cap text-center text-light">
                <h2 style={{ color: "#fff" }}>
                  {props.agency.agency_name}'s Profile
                </h2>
                <i className="fas fa-map-marker-alt"></i>{" "}
                <span className="text-capitalize">
                  {props.agency.state}, {props.agency.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-4">
        <div className="job-post-company pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-7 col-lg-8">
                <div className="job-post-details">
                  <div className="post-details1 mb-50">
                    <div className="small-section-tittle">
                      <h4>About Us</h4>
                    </div>
                    <p>{props.agency.agency_about}</p>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Our Address</h4>
                    </div>
                    <p>{`${props.agency.agency_address},  ${props.agency.state}, ${props.agency.country}`}</p>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle mb-2">
                      <h4>Other Information</h4>
                    </div>
                    <p>
                      Agency was founded in {props.agency.agency_found_year}.
                      {`${
                        props.agency.has_training_facility === 1
                          ? "We have a facility to train agents"
                          : null
                      }`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="post-details3  mb-50">
                  <div className="img-responsive p-4">
                    <img src={props.agency.logo} alt="" />
                  </div>
                  <div className="small-section-tittle mb-4">
                    <h4>Our Contact</h4>
                  </div>
                  <ul>
                    <li>
                      Phone Number
                      <span>{`${props.agency.agency_phone}`}</span>
                    </li>
                    <li>
                      Email Address
                      <span>{`${props.agency.agency_email}`}</span>
                    </li>
                    <li>
                      Website
                      <span>{`${props.agency.agency_website}`}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  agency: state.agent.agency,
  gettingAgency: state.auth.gettingAgency,
  agError: state.auth.agError,
});

const mapDispatchToProps = {
  getAgency,
  sendAgentEnq,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAgency);
