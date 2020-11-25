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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAgents } from "../../Actions/agentAction";
const AppRoute = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.link && history.push(props.link);
  }, [props.link]);
  useEffect(() => {
    props.getAgents();
  }, []);

  return (
    <Switch>
      <div>
        <HeaderSection />
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route path="/auth" component={(props) => <Auth {...props} />} />
        <Route path="/agents">
          <AgentsList />
        </Route>
      </div>
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  link: state.general.link,
});

const mapDispatchToProps = { getAgents };

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
