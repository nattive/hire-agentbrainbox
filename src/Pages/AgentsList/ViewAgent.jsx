import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import img from "../../Assets/img/testmonial/testimonial-founder.png";
import headerImage from "../../Assets/img/hero/about.jpg";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getAgent } from "../../Actions/agentAction";
const ViewAgent = (props) => {
  const [history, setHistory] = useState([]);
  const [education, setEducation] = useState([]);
  useEffect(() => {
    let historyArray = [];
    let arrayHistory = [];
    arrayHistory = props.agent.experience
      ? props.agent.experience.split("-")
      : [];
    arrayHistory.map((h) => {
      if (h.length > 3) {
        historyArray.push(h);
      }
      setHistory(historyArray);
    });
  }, [props.agent]);

  useEffect(() => {
    let educationArray = [];
    let arrayEducation = [];
    arrayEducation = props.agent.education && props.agent.education.split("-");
    arrayEducation.map((h) => {
      if (h.length > 3) {
        educationArray.push(h);
      }
      setEducation(educationArray);
    });
  }, [props.agent]);
  const { id } = useParams();
  useEffect(() => {
    props.getAgent(id);
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
                <h2 style={{ color: "#fff" }}>{props.agent.name}'s Profile</h2>
                <i className="fas fa-map-marker-alt"></i>
                {props.agent.state_of_resident},{" "}
                {props.agent.country_of_resident}
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
                      <h4>About Me</h4>
                    </div>
                    <p>{props.agent.About}</p>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Employment History</h4>
                    </div>
                    <ul>
                      {history.map((h) => (
                        <li>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Education + Experience</h4>
                    </div>
                    <ul>
                      {education.map((h) => (
                        <li>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Abb Job Experience</h4>
                    </div>
                    <p>
                      {props.agent.adb_employmet_history || "No Previous Job"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="post-details3  mb-50">
                  <div className="img-responsive p-4">
                    <img src={props.agent.user_image} alt="" />
                  </div>
                  <div className="small-section-tittle mb-4">
                    <h4>Bio Data</h4>
                  </div>
                  <ul>
                    <li>
                      Date of Birth:{" "}
                      <span>{`${props.agent.dob}, (${props.agent.age}years)`}</span>
                    </li>
                    <li>
                      Gender: <span>{props.agent.gender}</span>
                    </li>
                    <li>
                      Nationality <span>{props.agent.country_of_origin}</span>
                    </li>
                    <li>
                      State Of Origin <span>{props.agent.state_of_origin}</span>
                    </li>
                    <li>
                      Hr: <span>Fem HR company</span>
                    </li>
                    <li>
                      Joined <span>3th of Match 1995</span>
                    </li>
                  </ul>
                  <div className="apply-btn2">
                    <a href="#" className="btn">
                      Contact Agency
                    </a>
                  </div>
                </div>
                <div className="post-details4  mb-50">
                  <div className="small-section-tittle">
                    <h4>Agency Information</h4>
                  </div>
                  <hr className="my-4" />
                  <span>Colorlib</span>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <ul>
                    <li>
                      Name: <span>Colorlib </span>
                    </li>
                    <li>
                      Web : <span> colorlib.com</span>
                    </li>
                    <li>
                      Email: <span>carrier.colorlib@gmail.com</span>
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
  agent: state.agent.agent,
});

const mapDispatchToProps = {
  getAgent,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAgent);
