import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { showMessage, replyMessage } from "../../Actions/chatAction";
import { useEffect } from "react";
import { Button } from "rsuite";
import { GoReply } from "react-icons/go";
const ViewMessage = (props) => {
  const { id } = useParams();
  const [receiver_Id, setRecieverId] = useState();
  const [message, setMessage] = useState();
  const [subject, setSubject] = useState();
  const [message_id, setMessageId] = useState();
  const [showReplyMessage, setshowReplyMessage] = useState();
  const [showReplyContainer, setShowReplyContainer] = useState(false);
  const hadleShowReply = (e) => {
    e.preventDefault();
    setMessageId(props.message.id);
    setSubject(`RE: ${props.message.subject}`);
    setRecieverId(
      props.user.id === props.message.user.id
        ? props.message.receiver.id
        : props.message.user.id
    );
    setShowReplyContainer(!showReplyContainer);
  };
  useEffect(() => {
    props.showMessage(id);
    console.log(props.message);
  }, [id]);
  const handleSendReply = () => {
    let data = {
      receiver_Id,
      message,
      subject,
      message_id,
    };
    props.replyMessage(data);
  };
  return (
    <div className="container">
      <a className="p-2 w-100">
        <p className="message-container">
          <a href="" onClick={hadleShowReply} className="p-2 text-dark">
            <i className="fa fa-edit" /> Reply
          </a>
        </p>
        <div className={`reply-container ${!showReplyContainer && "collapse"}`}>
          <input
            type="text"
            placeholder="...Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            rows={12}
            cols={10}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="float-left">
            <Button
              onClick={handleSendReply}
              className="btn"
              color="green"
              loading={props.sendingReply}
            >
              Reply
            </Button>
          </div>
        </div>
      </a>
      {props.message.replies && props.message.replies.length > 0
        ? props.message.replies.map((reply) => (
            <div className="message-reply-container">
              <div
                className="read-reply-header"
                onClick={() => setshowReplyMessage(!showReplyMessage)}
              >
                <div className="d-flex justify-content-between">
                  <div className="text-left">
                    {reply.user && (
                      <div className="text-muted pb-1 small">
                        <i>
                          {props.user.id === reply.user.id ? (
                            <small>
                              <GoReply /> You replied
                            </small>
                          ) : null}
                        </i>
                      </div>
                    )}
                    <p className="sender-data">
                      <br />
                      <span>
                        <i className="fa fa-user mr-2"></i>
                      </span>
                      <p>
                        {reply.user && reply.user.name} <br />
                        <small>Agent</small>
                      </p>
                    </p>
                  </div>
                  <div className="text-right">{reply.date}</div>
                </div>
              </div>
              <div
                className={`read-message-body ${
                  !showReplyMessage && "collapse"
                }`}
              >
                {reply.message}
              </div>
            </div>
          ))
        : null}
      <div className="message-container">
        <div className="read-message-header">
          <div className="d-flex justify-content-between">
            <div className="text-left">
              {props.message.user && (
                <small className="text-muted pb-1 small">
                  <i>
                    {props.user.id === props.message.user.id
                      ? "This message was sent by you"
                      : null}
                  </i>
                </small>
              )}
              <p className="sender-data">
                <br />
                <span>
                  <i className="fa fa-user mr-2"></i>
                </span>
                <p>
                  {props.message.user && props.message.user.name} <br />
                  <small>Agent</small>
                </p>
              </p>
            </div>
            <div className="text-right">{props.message.date}</div>
          </div>
        </div>
        <div className="read-message-body">{props.message.message}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.chat.msg,
  messageError: state.chat.messageError,
  sendingReply: state.chat.sendingReply,
  replySent: state.chat.replySent,
  replySentError: state.chat.replySentError,
  user: state.auth.user,
});

const mapDispatchToProps = { showMessage, replyMessage };

export default connect(mapStateToProps, mapDispatchToProps)(ViewMessage);
