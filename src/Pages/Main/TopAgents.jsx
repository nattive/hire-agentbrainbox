import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Advertisement, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AgentCard from "../../Components/AgentCard";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

const list = [
  "Transaction made out of ABB is at users risk",
  "Drafts will now auto-save while writing",
];
const TopAgents = (props) => {
  return (
    <>
      <div class="row mb-105">
        <div class="col-lg-12">
          <div class="section-tittle text-center">
            <span>Browse</span>
            <h2>Top Agents</h2>
          </div>
        </div>
      </div>
      <section className="container featured-job-area feature-padding">
        <div className="mx-5">
          <div className=" justify-content-around row">
            {props.gettingAgents ? (
              <>
                <div className="col-xs-6 col-md-3">
                  <ReactPlaceholder
                    style={{ height: 200, margin: "10px 0" }}
                    showLoadingAnimation
                    type="rect"
                  />
                  <ReactPlaceholder rows={4} showLoadingAnimation type="text" />
                </div>
                <div className="col-xs-6 col-md-3">
                  <ReactPlaceholder
                    style={{ height: 200, margin: "10px 0" }}
                    showLoadingAnimation
                    type="rect"
                  />
                  <ReactPlaceholder rows={4} showLoadingAnimation type="text" />
                </div>
                <div className="col-xs-6 col-md-3">
                  <ReactPlaceholder
                    style={{ height: 200, margin: "10px 0" }}
                    showLoadingAnimation
                    type="rect"
                  />
                  <ReactPlaceholder rows={4} showLoadingAnimation type="text" />
                </div>
                <div className="col-xs-6 col-md-3">
                  <ReactPlaceholder
                    style={{ height: 200, margin: "10px 0" }}
                    showLoadingAnimation
                    type="rect"
                  />
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
  gettingAgents: state.agent.gettingAgents,
  agents: state.agent.agents,
  agentError: state.agent.agentError,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopAgents);
