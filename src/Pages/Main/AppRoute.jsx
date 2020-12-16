import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import HeaderSection from "../../Partials/HeaderSection";
import Home from "./Home";
import AgentsList from "../AgentsList";
import Auth from "../Auth";
import Chat from "../Chat";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAgents } from "../../Actions/agentAction";
import Echo from "laravel-echo";
import {
  Widget,
  addResponseMessage,
  toggleWidget,
  renderCustomComponent,
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { useState } from "react";
import { token } from "../../Constants/constant";
import { baseUrlNoApi } from "../../Constants/API";
import Pusher from "pusher-js";
import { sendMessage, getChats } from "../../Actions/chatAction";
import Message from "../Message";

const AppRoute = (props) => {
  const history = useHistory();
  const [autoRespond, setAutoRespond] = useState();

  useEffect(() => {
    props.link && history.push(props.link);
  }, [props.link]);
  useEffect(() => {
    props.getAgents();
    /**
     *
     * Echo server
     */
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "444a813005c3d837d511",
      encrypted: true,
      cluster: "eu",
      authEndpoint: `${baseUrlNoApi}/broadcasting/auth`,
      auth: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem(token),
        },
      },
    });
    props.getChats();
  }, []);
  // useEffect(() => {
  //   console.log('user');
  //   window.Echo.join(`chat.user.${props.user.id}`)
  //     .here((user) => {
  //       console.log(user);
  //       console.log('user');
  //     })
  //     .listen("CHatMessageSent", (event) => {
  //       console.log(event);
  //     });
  // }, [props.user]);
  useEffect(() => {
    {
      props.channels &&
        props.channels.forEach((channel) => {
          window.Echo.join(`chat.channel.${channel}`)
            .here((user) => {
              console.log(user);
            })
            .listen("CHatMessageSent", (event) => {
              console.log(event);
            });
        });
    }
  }, [props.channels]);
  useEffect(() => {
    /**
     *
     * Open the chat widget
     */
    props.reciever.id && toggleWidget(true);
  }, [props.reciever]);
  const handleNewMessage = (newMessage) => {
    addResponseMessage("Welcome to agent bain box");
  };

  return (
    <Switch>
      <div>
        <HeaderSection />
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route path="/auth" component={(props) => <Auth {...props} />} />
        <Route
          path="/message"
          component={(props) => <Message {...props} />}
        />
        <Route
          path="/agents"
          component={(props) => <AgentsList {...props} />}
        />
      </div>
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  link: state.general.link,
  reciever: state.chat.reciever,
  channels: state.chat.channels,
  user: state.auth.user,
});

const mapDispatchToProps = { getAgents, sendMessage, getChats };

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
