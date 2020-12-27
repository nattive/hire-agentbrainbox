import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import AgentCard from "../../Components/AgentCard";
import Slider from "react-slick";
import { getBannedAgents } from "../../Actions/agentAction";
const list = [
  "Transaction made out of ABB is at users risk",
  "Drafts will now auto-save while writing",
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const BannedAgents = (props) => {
  useEffect(() => {
    props.getBannedAgents();
  }, []);
  return (
    <>
      <div class="row  mb-50  mt-50 ">
        <div class="col-lg-12">
          <div class="section-tittle text-center">
            <span>Flagged or</span>
            <h2 className="text-danger">Banned Agents</h2>
          </div>
        </div>
      </div>
      <section className="container featured-job-area feature-padding">
        <div className="mx-5">
          <div className=" justify-content-around row">
            {props.gettingBannedAgent ? (
              <>
                <div className="col-xs-6 col-md-3">
                  <ReactPlaceholder style={{height: 200, margin: '10px 0'}} showLoadingAnimation type="rect" />
                  <ReactPlaceholder rows={4} showLoadingAnimation type="text" />
                </div>
                <div className="col-xs-6 col-md-3">
                  <ReactPlaceholder style={{height: 200, margin: '10px 0'}} showLoadingAnimation type="rect" />
                  <ReactPlaceholder rows={4} showLoadingAnimation type="text" />
                </div>
                <div className="col-xs-6 col-md-3">
                  <ReactPlaceholder style={{height: 200, margin: '10px 0'}} showLoadingAnimation type="rect" />
                  <ReactPlaceholder rows={4} showLoadingAnimation type="text" />
                </div>
                <div className="col-xs-6 col-md-3">
                  <ReactPlaceholder style={{height: 200, margin: '10px 0'}} showLoadingAnimation type="rect" />
                  <ReactPlaceholder rows={4} showLoadingAnimation type="text" />
                </div>
              </>
            ) : props.agents.length > 0 ? (
              props.agents.map((agent) => <AgentCard isBan {...agent} />)
            ) : (
              "no agent"
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  agents: state.agent.bannedAgents,
  gettingBannedAgent: state.agent.gettingBannedAgent,
  bannendAgentError: state.agent.bannendAgentError,
});

const mapDispatchToProps = { getBannedAgents };

export default connect(mapStateToProps, mapDispatchToProps)(BannedAgents);
