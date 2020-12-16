import React from "react";
import PropTypes from "prop-types";
import img from "../Assets/img/blog/author.png";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function AgentCard(props) {
  const history = useHistory();
  return (
    <div className="agent-card ml-3">
      <div
        className="card card-profile"
        onClick={() => history.push(`/agents/id/${props.agent_unique_id}`)}
      >
        <div className="row justify-content-center">
          <div className="col-lg-3 order-lg-2">
            <div className="card-profile-image">
              <Link to={`/agents/id/${props.agent_unique_id}`}>
                <img src={props.user_image} className="rounded-circle" />
              </Link>
            </div>
          </div>
        </div>

        <div className="card-body pt-0 pt-md-4">
          <div className="text-center mt-105">
            <h5>
              {props.name}
              <span className="font-weight-light">, 27</span>
            </h5>
            <p className="font-weight-300">
              <i className="ni location_pin mr-2"></i>
              {props.state}, Nigeria
            </p>
            {/* <div className="h6 mt-4">
              <i className="ni business_briefcase-24 mr-2"></i>Position -
              Attendant
            </div> */}
            <p>Agency: {props.agency && props.agency.agency_name}</p>
          </div>
          <div className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="items-link items-link2">
              <a
              className="nav"
                onClick={() =>
                  history.push(`/agents/id/${props.agent_unique_id}`)
                }
                href="#"
              >
                {/* <Icon name="paper plane" /> */}
                View Agent's Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AgentCard.propTypes = {
  isBan: PropTypes.bool,
};

export default AgentCard;
