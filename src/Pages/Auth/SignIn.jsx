import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import authImg from "../../Assets/img/service/1.png";
import { login } from "../../Actions/loginAction";
import { useState } from "react";
import { Message } from "rsuite";

const SignIn = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = () => {
    if (email) {
      props.login(email, password);
    } else {
      alert("email can not be empty");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row auth-section">
          <div className="col-lg-7 col-md-7 col sm-12 col-xs-12">
            <div className="border">
              <img src={authImg} alt="" className="w-100 img-responsive" />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col sm-12 col-xs-12">
            <div className="card">
              <div className="card-header bg-transparent">
                <h3 class="text-heading">Welcome Back</h3>
                {props.loginError && <Message showIcon type="error" description={props.loginError} />}
              </div>
              <div className=" card-body">
                <form action="#">
                  <div className="mt-10">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Your Email Address"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="single-input"
                    />
                  </div>
                  <div className="mt-10">
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="single-input"
                    />
                  </div>
                </form>
                <div className="m-3 d-flex justify-content-between align-items-center">
                  <Link to="/">Forget Password</Link>
                  <div className="float-right">
                    <Button
                      basic
                      color="orange"
                      onClick={handleLogin}
                      loading={props.isLoggingIn}
                      className="btn head-btn2"
                    >
                      Login <i className="fa fa-arrow-right"></i>
                    </Button>
                  </div>
                </div>
                <hr className="my-4" />
                <p className="text-center">Or Sign In with</p>
                <div className="text-center">
                  <Button
                    circular
                    color="facebook"
                    icon="facebook"
                    className="m-2"
                  />
                  <Button
                    circular
                    color="twitter"
                    icon="twitter"
                    className="m-2"
                  />
                  <Button
                    circular
                    color="linkedin"
                    icon="linkedin"
                    className="m-2"
                  />
                  <Button
                    circular
                    color="google plus"
                    icon="google plus"
                    className="m-2"
                  />
                </div>
                <p className="text-center">
                  <Link to="/auth/register">Create an Account </Link> if you
                  don't have one
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.isLoggingIn,
  user: state.auth.user,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
