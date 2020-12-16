import React from "react";
import PropTypes from "prop-types";

function MessageItem(props) {
  return (
    <>
      <div className={`message-body ${props.right ? "sender" : ""}`}>
        <div className="time">{props.date}</div>
        <div className={`bubble ${props.right ? "right" : "left"}`}>
          <p className="message" style={{color: '#fff'}}>
            {props.message}
          </p>
        </div>
        <div className="clear"></div>
      </div>
      <div className="clear"></div>
    </>
  );
}

MessageItem.propTypes = {
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isRead: PropTypes.bool,
    right: PropTypes.bool
};

export default MessageItem;
