import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon, Advertisement, Message } from "semantic-ui-react";
import AgentCard from "../../Components/AgentCard";
import Slider from "react-slick";

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
const BannedAgents = () => {
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
      <section className="featured-job-area pt-5">
        <div className="mx-5">
          <Slider {...settings}>
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </Slider>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BannedAgents);
