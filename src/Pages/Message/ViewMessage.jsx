import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { showMessage, replyMessage } from "../../Actions/chatAction";
import { useEffect } from "react";
import { Button } from "rsuite";
import not_found from "../../Assets/img/banner/not_found.svg";
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
    setSubject(
      `RE: ${props.message.messages[props.message.messages.length - 1].subject}`
    );
    setRecieverId(
      props.user.id === props.message.reciever_id
        ? props.message.sender_id
        : props.message.reciever_id
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
      message_name: props.message.name,
    };
    props.replyMessage(data);
  };
  return (
    <div className="container">
      {props.gettingMessage && (
        <>
          <div className="container">
            <div className="mx-auto">
              <div className="text-center text-large">
                <span className="text-muted mb-5">
                 <i className="fa fa-spin fa-spinner"></i> Loading
              </span>
              </div>
            </div>
          </div>
        </>
      )}
      {props.messageError ? (
        <>
          <div className="container">
            <div className="mx-auto">
              <div className="text-center text-large">
                <p className="text-muted mb-5">
                  {props.messageError || "An error occurced"}
                </p>
                <img
                  src={not_found}
                  alt="not fond image"
                  style={{ width: "35%" }}
                  clasName="img-fluid mt-4"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <a className="p-2 w-100">
            <p className="message-container">
              <a href="" onClick={hadleShowReply} className="p-2 text-dark">
                <i className="fa fa-edit" /> Reply
              </a>
            </p>
            <div
              className={`reply-container ${!showReplyContainer && "collapse"}`}
            >
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

          {props.message.messages && props.message.messages.length > 0
            ? props.message.messages.map((message) => (
                <div className="message-container">
                  <div className="read-message-header">
                    <div className="d-flex justify-content-between">
                      <div className="text-left">
                        {message.user && (
                          <small className="text-muted pb-1 small">
                            <i>
                              {props.user.id === message.user.id
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
                            {message.user && message.user.name} <br />
                            <small>Agent</small>
                          </p>
                        </p>
                      </div>
                      <div className="text-right">{message.date}</div>
                    </div>
                  </div>
                  <div className="read-message-body">{message.message}</div>
                </div>
              ))
            : null}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.chat.msg,
  messageError: state.chat.messageError,
  sendingReply: state.chat.sendingReply,
  gettingMessage: state.chat.gettingMessage,
  replySent: state.chat.replySent,
  replySentError: state.chat.replySentError,
  user: state.auth.user,
});

const mapDispatchToProps = { showMessage, replyMessage };

export default connect(mapStateToProps, mapDispatchToProps)(ViewMessage);
