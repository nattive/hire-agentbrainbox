import React, { Component } from "react";
import { connect } from "react-redux";
import img from "../../Assets/img/testmonial/testimonial-founder.png";
import headerImage from "../../Assets/img/hero/about.jpg";
const ViewAgent = () => {
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
                <h2 style={{ color: "#fff" }}>Ademo;a's Profile</h2>
                <i className="fas fa-map-marker-alt"></i>Athens, Greece
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
                    <p>
                      It is a long established fact that a reader will beff
                      distracted by vbthe creadable content of a page when
                      looking at its layout. The pointf of using Lorem Ipsum is
                      that it has ahf mcore or-lgess normal distribution of
                      letters, as opposed to using, Content here content here
                      making it look like readable.
                    </p>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Job History</h4>
                    </div>
                    <ul>
                      <li>System Software Development</li>
                      <li>
                        Mobile Applicationin iOS/Android/Tizen or other platform
                      </li>
                      <li>
                        Research and code , libraries, APIs and frameworks
                      </li>
                      <li>
                        Strong knowledge on software development life cycle
                      </li>
                      <li>Strong problem solving and debugging skills</li>
                    </ul>
                  </div>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Education + Experience</h4>
                    </div>
                    <ul>
                      <li>3 or more years of professional design experience</li>
                      <li>Direct response email experience</li>
                      <li>Ecommerce website design experience</li>
                      <li>Familiarity with mobile and web apps preferred</li>
                      <li>Experience using Invision a plus</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="post-details3  mb-50">
                  <div className="img-responsive p-4">
                    <img src={img} alt="" />
                  </div>
                  <div className="small-section-tittle mb-4">
                    <h4>Bio Data</h4>
                  </div>
                  <ul>
                    <li>
                      Date of Birth: <span>3th of Match 1995</span>
                    </li>
                    <li>
                      Nationality <span>Male</span>
                    </li>
                    <li>
                      State <span>Male</span>
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
                  <hr className="my-4"/>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAgent);
