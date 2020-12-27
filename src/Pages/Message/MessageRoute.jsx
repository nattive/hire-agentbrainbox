import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import MessageHome from "./MessageHome";
import { AllRequests } from "./AllRequests";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import AllMessage from "./AllMessage";
import ViewMessage from "./ViewMessage";
import Dashboard from "../Account/Dashboard";

const MessageRoute = (props) => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route
          exact
          path={path}
          component={(props) => <Dashboard {...props} />}
        />
        <Route
          exact
          path={`${path}/view/messages`}
          component={(props) => <AllMessage {...props} />}
        />
        <Route
          exact
          path={`${path}/view/messages/:id`}
          component={(props) => <ViewMessage {...props} />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessageRoute);
