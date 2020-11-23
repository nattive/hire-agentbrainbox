import React, { Component } from "react";
import { connect } from "react-redux";
import AgentCard from "../../Components/AgentCard";

const AgentsList = () => {
  return (
    <>
      <div className="slider-area ">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          data-background="assets/img/hero/about.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Get your job</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-listing-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="row">
                <div className="col-12">
                  <div className="small-section-tittle2 mb-45">
                    <div className="ion"></div>
                    <h4>Filter Jobs</h4>
                  </div>
                </div>
              </div>
              <div className="job-category-listing mb-50">
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Location</h4>
                  </div>
                  <div className="select-job-items2">
                    <select name="select" className="nice-select">
                      <option value="">State</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>
                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Experience</h4>
                    </div>
                    <label className="container">
                      0 - 5 years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                     5 - 10 years
                      <input type="checkbox" checked="checked active" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      10+ years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Job Location</h4>
                  </div>
                  <div className="select-job-items2">
                    <select name="select">
                      <option value="">Anywhere</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>
                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Experience</h4>
                    </div>
                    <label className="container">
                      1-2 Years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      2-3 Years
                      <input type="checkbox" checked="checked active" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      3-6 Years
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      6-more..
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                {/* <div className="single-listing">
                  <div className="select-Categories pb-50">
                    <div className="small-section-tittle2">
                      <h4>Posted Within</h4>
                    </div>
                    <label className="container">
                      Any
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Today
                      <input type="checkbox" checked="checked active" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 2 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 3 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 5 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 10 days
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div> */}
                <div className="single-listing">
                  {/* <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                    <div className="small-section-tittle2">
                      <h4>Filter Jobs</h4>
                    </div>
                    <div className="widgets_inner">
                      <div className="range_item">
                        <input
                          type="text"
                          className="js-range-slider"
                          value=""
                        />
                        <div className="d-flex align-items-center">
                          <div className="price_text">
                            <p>Price :</p>
                          </div>
                          <div className="price_value d-flex justify-content-center">
                            <input
                              type="text"
                              className="js-input-from"
                              id="amount"
                              readonly
                            />
                            <span>to</span>
                            <input
                              type="text"
                              className="js-input-to"
                              id="amount"
                              readonly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside> */}
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-10">
              <section className="featured-job-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="count-job mb-35">
                        <span>39, 782 Jobs found</span>
                        <div className="select-job-items">
                          <span>Sort by</span>
                          <select name="select">
                            <option value="">None</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3">
                      <AgentCard />
                    </div>
                    <div className="col-xs-3">
                      <AgentCard />
                    </div>
                    <div className="col-xs-3">
                      <AgentCard />
                    </div>
                    <div className="col-xs-3">
                      <AgentCard />
                    </div>
                    
                 </div>
                 </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-area pb-115 text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="ti-angle-right"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(AgentsList);
