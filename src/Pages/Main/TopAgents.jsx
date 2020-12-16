import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Advertisement, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AgentCard from "../../Components/AgentCard";

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
            {props.agents.length > 0
              ? props.agents.map((agent) => <AgentCard {...agent} />)
              : "no agent"}
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
