import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import "./message.css";
import { useState } from "react";
import {
  InputGroup,
  AutoComplete,
  Icon,
  List,
  FlexboxGrid,
  Avatar,
  Badge,
  IconButton,
  Input,
  Button,
} from "rsuite";
import MessagePanel from "./components/MessagePanel";
import { sendMessage, getChats } from "../../Actions/chatAction";
import { useEffect } from "react";
import { CHAT_MESSAGES, MESSGAE_AGENT } from "../../Actions/types";
const Message = (props) => {
  const [collapseCL, setCollapseCL] = useState(false);
  const [messageInput, setMessageInput] = useState();
  const [showChat, setShowChat] = useState(false);
  /**
   *
   *Types of messages.
   ** 1: Normal message, This is the default message.
   ***** @param Int id, unique message id
   ***** @param String body, Message body
   ***** @param String Time, Message Time/Date
   *
   ** 2 System message: Notification as message, This can be the tracking
   *activity from the user to the Agency
   ***** @param String type: the message type (i.e system-message)
   ***** @param String body, Message body
   ***** @param String Time, Message Time/Date
   *
   ** 3 system message on agent: Same as system message but informs the agency that the user
   * is talking about a specific agent
   ***** @param String type: the message type (i.e system-message-agent)
   ***** @param Int agent_id, unique id of the agent
   ***** @param String body, Message body
   ***** @param String Time, Message Time/Date
   */
  const [messages, setMessages] = useState([
    {
      id: 1,
      body: "so when are we leaving",
      time: "Today, 7:47am",
    },
    {
      id: 2,
      body: "Tomorow",
      time: "Today, 7:47am",
    },
    {
      id: 1,
      body: "ok",
      time: "Today, 7:47am",
    },
    {
      type: "system-message",
      body: "This user has left the chat",
      time: "Today, 7:47am",
    },
    {
      type: "system-message-agent",
      body: "I will like to enquire about this agent",
      agent_id: 1,
      time: "Today, 7:47am",
    },
  ]);
  const handleSend = () => {
    dispatch({
      type: CHAT_MESSAGES,
      payload: props.chatMessages.concat({
        id: props.user.id,
        body: messageInput,
        Time: Date.now(),
        sender_id: props.user.id,
        reciever_id: props.reciever.id,
      }),
    });

    const data = {
      message: messageInput,
      reciever_id: props.reciever.id,
    };
    props.sendMessage(data);
    setMessageInput(" ");
  };
  const dispatch = useDispatch();
  const handleShowChat = (chat) => {
    setShowChat(true);
    dispatch({ type: MESSGAE_AGENT, payload: chat.reciever });
    dispatch({ type: CHAT_MESSAGES, payload: chat.chatMessages });
  };
  return (
    <div
      className="container"
      // style={{ overflowX: "hidden", height: window.innerHeight }}
    >
      <div className="row">
        <div
          className={`contact-list ${collapseCL ? "collapsed" : "open"}  ${
            showChat && "hide-on-sm"
          }`}
        >
          <div className="card w-100 h-100">
            <div className="card-header">
              <InputGroup style={{ width: "100%" }}>
                <AutoComplete data={[]} />
                <InputGroup.Button>
                  <Icon icon="search" />
                </InputGroup.Button>
              </InputGroup>
            </div>
            <div
              className="card-body"
              style={{ height: window.innerHeight - 100, overflowY: "auto" }}
            >
              <List hover>
                {props.chats.length > 0 ? (
                  props.chats.map((chat) => (
                    <List.Item
                      className="contact-list-item"
                      onClick={() => handleShowChat(chat)}
                    >
                      <div className="row">
                        <div className="col-2">
                          <Avatar circle size="sm" />
                        </div>
                        <div className="col-10">
                          <div className="chat-details">
                            <h6>
                              {(chat.reciever.agency_name &&
                                chat.reciever.agency_name.substring(0, 10)) ||
                                (chat.reciever.name &&
                                  chat.reciever.name.substring(0, 10))}
                              {chat.reciever.name &&
                              chat.reciever.name.length > 10
                                ? "..."
                                : null ||
                                  (chat.reciever.agency_name &&
                                    chat.reciever.agency_name.length > 10)
                                ? "..."
                                : null}
                            </h6>
                            <small className="text-muted">
                              {chat.lastMessageTime}
                            </small>
                          </div>
                          <div className="d-flex justify-content-between">
                            <small>{chat.lastMessage}</small>{" "}
                            <Badge className="badge" content="0" />
                          </div>
                        </div>
                      </div>
                    </List.Item>
                  ))
                ) : (
                  <List.Item>
                    <p>No chats</p>
                  </List.Item>
                )}
              </List>
            </div>
          </div>
        </div>
        <div className={`chat-area ${!showChat && "hide-on-sm"}`}>
          {props.chatMessages && props.chatMessages.length > 0 ? (
            <div className="p-4">
              <MessagePanel
                messages={props.chatMessages}
                reciever={props.reciever}
              />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <Input
                  componentClass="input"
                  classPrefix="form-control"
                  rows={1}
                  className="chat-input"
                  placeholder="say something..."
                  value={messageInput}
                  onChange={(value) => setMessageInput(value)}
                />
                <div className="d-flex justify-content-between">
                  <div />
                  <Button color="green" type="submit">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <>
              <div className="p-4"> select a chat</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  reciever: state.chat.reciever,
  chats: state.chat.chats,
  chatMessages: state.chat.chatMessages,
  user: state.auth.user,
});

const mapDispatchToProps = { sendMessage, getChats };

export default connect(mapStateToProps, mapDispatchToProps)(Message);
