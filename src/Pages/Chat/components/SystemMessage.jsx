import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function SystemMessage(props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="system-message-box">
        <p> {props.body} </p>
        {props.agent_id && (
          <Link to={`/seller/agent/view/${1}`}>See Agent Details</Link>
        )}
      </div>
    </div>
  );
}

SystemMessage.propTypes = {
  type: PropTypes.string,
  body: PropTypes.string.isRequired,
  agent_id: PropTypes.number,
  time: PropTypes.string,
};

export default SystemMessage;
