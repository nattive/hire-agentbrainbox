import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import AgentCard from "../../Components/AgentCard";
import { getAgencies, getAgencyByState } from "../../Actions/agentAction";
import bg from "../../Assets/img/banner/auth-section.jpg";
import Skeleton from "react-loading-skeleton";
import { IoIosOptions, IoIosArrowBack, IoMdRefresh } from "react-icons/io";
import AgencyCard from "../../Components/AgencyCard";

const AgencyList = (props) => {
  const [openFilter, setOpenFilter] = useState(true);
  const [state, setState] = useState('Lagos');
  const handFilterToggle = () => setOpenFilter(!openFilter);
  useEffect(() => {
    props.getAgencies();
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
                  <h2>Find an Agency near you</h2>
                </div>
                <div className="m-5">
                  <form action="#" className="search-box bg-light">
                    <div className="select-form w-100">
                      <div className="select-itms">
                        <select name="select" id="select1">
                          {props.states.map((state) => (
                            <option
                              key={state}
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                            >
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="search-form">
                      <a href="#" onClick={() => props.getAgencyByState(state)}>
                        Find Agency
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-listing-area  pb-120">
        <div className="container-fluid ">
          <div style={{ backgroundColor: "white" }}>
            <section
              className="featured-job-area"
              style={{ height: window.innerHeight }}
            >
              <div className="mx-auto">
                <div className="row  mb-4">
                  <div className="col-lg-12">
                    <div className="count-job mb-35 mb-4">
                      <div></div>
                      <span>{props.agencies.length} Agency(ies) found</span>
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
                  {props.gettingAgencies ? (
                    [...Array(3)].map((x, i) => (
                      <div className="col-xs-4 m-1" key={i}>
                        <Skeleton width={200} height={200} />
                        <Skeleton count={3} />
                      </div>
                    ))
                  ) : props.agencies.length > 0 ? (
                    props.agencies.map((agency) => (
                      <div className="col-md-3">
                        <AgencyCard agency={agency} />
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
      {/* <div className="pagination-area pb-115 text-center">
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
      </div> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  gettingAgencies: state.agent.gettingAgencies,
  agencies: state.agent.agencies,
  agenciesErr: state.agent.agenciesErr,
  states: state.general.States,
});

const mapDispatchToProps = { getAgencies, getAgencyByState };

export default connect(mapStateToProps, mapDispatchToProps)(AgencyList);
