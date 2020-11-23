import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Advertisement, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AgentCard from "../../Components/AgentCard";

const list = [
  "Transaction made out of ABB is at users risk",
  "Drafts will now auto-save while writing",
];
const TopAgents = () => {
  return (
    <>
      <section className="featured-job-area  feature-padding">
        <div class="row mb-105">
          <div class="col-lg-12">
            <div class="section-tittle text-center">
              <span>Browse</span>
              <h2>Top Agents</h2>
            </div>
          </div>
        </div>

        <div className="mx-5">
          <div className="container justify-content-around row">
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopAgents);
