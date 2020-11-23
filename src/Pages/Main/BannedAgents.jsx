import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Advertisement, Message } from "semantic-ui-react";
import AgentCard from "../../Components/AgentCard";


const list = [
  "Transaction made out of ABB is at users risk",
  "Drafts will now auto-save while writing",
];
const BannedAgents = () => {
  return (
    <>
      <section className="featured-job-area  feature-padding">
        <div class="row  mb-105 ">
          <div class="col-lg-12">
            <div class="section-tittle text-center">
              <span>Flagged or</span>
              <h2 className="text-danger">Banned Agents</h2>
            </div>
          </div>
        </div>

        <div className="container -4 border border-danger">
          <div className="mx-5 mt-105">
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
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BannedAgents);
