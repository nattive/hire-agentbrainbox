import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import image from "../Assets/img/about/about_lft.png";
import "./agency.css";
import { useHistory } from "react-router-dom";
const AgencyCard = (props) => {
  const history = useHistory()
  const { agency_name, logo, agency_about, city, state, agents, id } = props.agency;
  return (
    <div class="card hovercard">
      <div class="cardheader"></div>
      <div class="avatar">
        <img alt="" src={logo || image} />
      </div>
      <div class="info">
        <div class="title">
          <a
            className="nav"
            onClick={(e) => {
              e.preventDefault();
              history.push(`/agency/id/${agents.id}`);
            }}
            href="#"
          >
            {agency_name}
          </a>
        </div>
        <div class="desc">HR Agency</div>
        <div class="desc">{`${city}, ${state}`}</div>
        <div class="desc">{agents.length} Agents uploaded</div>
      </div>
      <div class="bottom">
        <div className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
          <div className="items-link items-link2">
            <a
              className="nav"
              onClick={(e) => {
                e.preventDefault();
                history.push(`/agency/id/${id}`);
              }}
              href="#"
            >
              {/* <Icon name="paper plane" /> */}
             More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

AgencyCard.propTypes = {
  agency: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AgencyCard);
