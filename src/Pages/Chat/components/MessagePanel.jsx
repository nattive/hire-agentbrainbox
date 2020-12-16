import React, { Component, useRef, useEffect } from "react";
import { connect } from "react-redux";
import MessageItem from "./MessageItem";
import SystemMessage from "./SystemMessage";

const MessagePanel = (props) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [props.messages]);

  return (
    <div className="container">
      <div className="card card-body">
        <h6>{props.reciever.agency_name || props.reciever.name }</h6>
      </div>
      <div
        className="card card-body"
        style={{ height: window.innerHeight - 200, overflow: "auto" }}
      >
        <div className="message-panel">
          {props.messages.map &&
            props.messages.map((message, index) => {
              switch (message.type) {
                case "system-message":
                  return <SystemMessage {...message} />;
                case "system-message-agent":
                  return <SystemMessage {...message} />;

                default:
                  return (
                    <MessageItem
                      date={message.Time}
                      message={message.body}
                      key={index}
                      right={message.sender_id === props.user.id ? true : false}
                    />
                  );
              }
            })}
          <div className="clear" ref={messagesEndRef} />
          <div style={{ height: 100 }}></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessagePanel);
