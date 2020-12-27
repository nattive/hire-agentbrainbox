import { connect } from "react-redux";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CreateAgency from "./CreateAgency";
import AuthHome from "./AuthHome";
const Auth = () => {
  const { path } = useRouteMatch();
  let location = useLocation();
  return (
    <div>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={3000}>
          <Switch location={location}>
            <Route
              exact
              path={`${path}`}
              component={(props) => <AuthHome {...props} />}
            />
            <Route
              path={`${path}/login`}
              component={(props) => <SignIn {...props} />}
            />
            <Route
              path={`${path}/register`}
              component={(props) => <SignUp {...props} />}
            />
            <Route
              path={`${path}/create-agency`}
              component={(props) => <CreateAgency {...props} />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
