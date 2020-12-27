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
import AgencyList from "./AgencyList";
import ViewAgency from "./ViewAgency";

const AgencyRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route
        // exact
        path={path}
        component={(props) => <AgencyList {...props} />}
      />
      <Route
        path={`${path}/id/:id`}
        component={(props) => <ViewAgency {...props} />}
      />
    </Switch>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AgencyRoute);
