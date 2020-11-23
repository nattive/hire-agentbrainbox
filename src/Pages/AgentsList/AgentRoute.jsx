import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AgentsList from "./AgentsList";
import ViewAgent from "./ViewAgent";

const AgentRoute = () => {
    const {path} = useRouteMatch()
  return (
    <Switch>
      <Route
        exact
        path={path}
        component={(props) => <AgentsList {...props} />}
      />
      <Route path={`${path}/id/:id`} component={(props) => <ViewAgent {...props} />} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AgentRoute);
