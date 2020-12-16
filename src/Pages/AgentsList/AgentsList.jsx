import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import AgentCard from "../../Components/AgentCard";
import { getAgents, getAgentsByState } from "../../Actions/agentAction";
import bg from "../../Assets/img/hero/about.jpg";
import Skeleton from "react-loading-skeleton";
import { IoIosOptions, IoIosArrowBack, IoMdRefresh } from "react-icons/io";

const AgentsList = (props) => {
  const [openFilter, setOpenFilter] = useState(true);
  const handFilterToggle = () => setOpenFilter(!openFilter);
  useEffect(() => {
    props.getAgents();
  }, []);
  return (
    <>
      <div className="slider-area ">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Get your Agent</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-listing-area  pb-120">
        <div className="container-fluid mx-3">
          <div className="row">
            <div
              className={`col-xl-2 col-lg-2 col-md-2 mr-2 ${
                openFilter && "collapsed"
              }`}
              style={{ backgroundColor: "white" }}
            >
              <div className="row featured-job-area">
                <div className="col-12">
                  <div className="small-section-tittle2 mb-45 d-flex justify-content-between">
                    <h4>Filter Agents</h4>
                  </div>
                </div>
              </div>
              <div className="job-category-listing mb-50">
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Agent's Location</h4>
                  </div>
                  <div className="select-job-items2">
                    <select
                      name="select"
                      className=" form-control"
                      onChange={(e) => props.getAgentsByState(e.target.value)}
                    >
                      {props.states.map((state, key) => (
                        <option key={key} value={state}>
                          {state}
                        </option>
                      ))}
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
                    <h4>Agency's Location</h4>
                  </div>
                  <div className="select-job-items2">
                    <select name="select" className=" form-control">
                      {props.states.map((state, key) => (
                        <option key={key} value="Lagos">
                          {state}
                        </option>
                      ))}
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
                      <h4>Filter Agents</h4>
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
            <div
              className={`${
                openFilter
                  ? "col-xl-12 col-lg-12 col-md-12"
                  : "col-xl-9 col-lg-9 col-md-10 w-100"
              }`}
              style={{ backgroundColor: "white" }}
            >
              <section
                className="featured-job-area"
                style={{ height: window.innerHeight }}
              >
                <div className="container">
                  <div className="row  mb-4">
                    <div className="col-lg-12">
                      <div className="count-job mb-35 mb-4">
                        <div>
                          <h4 className="mr-2">
                            {!openFilter ? (
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  props.getAgents();
                                }}
                                title="Open filter"
                              >
                                <IoIosArrowBack onClick={handFilterToggle} />
                              </a>
                            ) : (
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handFilterToggle();
                                }}
                                title="Open filter"
                              >
                                <IoIosOptions />
                              </a>
                            )}
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                props.getAgents();
                              }}
                              title="Refresh"
                            >
                              <IoMdRefresh />
                            </a>
                          </h4>
                        </div>
                        <span>{props.agents.length} Agent(s) found</span>
                        {/* <div className="select-job-items">
                          <span>Sort by</span>
                          <select name="select">
                            <option value="">None</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                          </select>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    {props.gettingAgents ? (
                      [...Array(10)].map((x, i) => (
                        <div className="col-xs-3 m-3" key={i}>
                          <Skeleton width={200} height={200} />
                          <Skeleton count={3} />
                        </div>
                      ))
                    ) : props.agents.length > 0 ? (
                      props.agents.map((agent) => (
                        <div className="col-xs-3" key={agent.id}>
                          <AgentCard {...agent} />
                        </div>
                      ))
                    ) : (
                      <p>No Agents yet </p>
                    )}
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

const mapStateToProps = (state) => ({
  agents: state.agent.agents,
  gettingAgents: state.agent.gettingAgents,
  states: state.general.states,
});

const mapDispatchToProps = { getAgents, getAgentsByState };

export default connect(mapStateToProps, mapDispatchToProps)(AgentsList);
