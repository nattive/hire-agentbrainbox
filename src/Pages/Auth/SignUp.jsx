import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Message } from "semantic-ui-react";
import authImg from "../../Assets/img/banner/auth-section.svg";
import { registerUser } from "../../Actions/registerAction";
import { useState } from "react";
import { useEffect } from "react";
const SignUp = (props) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [state, setState] = useState("Lagos");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = () => {
    const data = {
      name,
      errors,
      email,
      phone,
      country,
      state,
      city,
      address,
      password,
      confirmPassword,
    };
    props.registerUser(data)
  };
  const field = [
    {
      id: 1,
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "Your full name",
      errorMessage: errors.name,
    },
    {
      id: 2,
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "Email address",
      type: "email",
      errorMessage: errors.email,
    },
    {
      id: 3,
      value: phone,
      type: "tel",
      onChange: (e) => setPhone(e.target.value),
      errorMessage: errors.phone,
      placeholder: "Phone number",
    },
    {
      id: 4,
      value: address,
      onChange: (e) => setAddress(e.target.value),
      errorMessage: errors.address,
      placeholder: "Resident Address",
    },
    {
      id: 5,
      value: city,
      errorMessage: errors.city,
      onChange: (e) => setCity(e.target.value),
      placeholder: "City",
    },
    {
      id: 6,
      value: password,
      errorMessage: errors.password,
      onChange: (e) => setPassword(e.target.value),
      placeholder: "password",
      type: "password",
    },
    {
      id: 7,
      value: confirmPassword,
      errorMessage: errors.confirm_password,
      onChange: (e) => setConfirmPassword(e.target.value),
      placeholder: "Confirm password",
      type: "password",
    },
  ];
  useEffect(() => {
    props.registrationError &&
      props.registrationError.errors &&
      setErrors(props.registrationError.errors);
  }, [props.registrationError]);
  return (
    <>
      <div className="container">
        <div className="row m-4">
        <div className="col-lg-6 d-none d-md-block">
          <img src={authImg} className='w-100 p-4' />

        </div>
          <div className="col-lg-6 col-md-6 col sm-12 col-xs-12 mb-4">
            <div className="card" style={{ height: "490px", overflow: "auto" }}>
              <div className="card-header bg-transparent">
                <h3 class="text-heading">Create User account</h3>
                {props.registrationError ? (
                  <div className="alert alert-danger">
                    {props.registrationError && 'An error occurred'}
                  </div>
                ) : (
                  <p>
                    If you already have a user account, <Link>Proceed </Link>to
                    creating HR account
                  </p>
                )}
              </div>
              <div className=" card-body">
                <form action="#">
                  <div class="mt-10">
                    {field.map((input) => (
                      <>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          onChange={input.onChange}
                          value={input.value}
                          required
                          class="single-input"
                        />
                        <small className="text-danger ml-4">
                          {input.errorMessage}
                        </small>
                      </>
                    ))}
                  </div>

                  <div class="input-group-icon mt-10">
                    <div class="icon">
                      <i class="fa fa-plane" aria-hidden="true"></i>
                    </div>
                    <div className="d-flex justify-content-between align-">
                      <div class="form-select" id="default-select">
                        <select
                          class="nice-select"
                          onChange={(e) => setCountry(e.target.value)}
                          name="state"
                        >
                          <option value="" disabled>
                            Choose your country
                          </option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      <div class="form-select" id="default-select">
                        <select
                          class="nice-select"
                          onChange={(e) => setState(e.target.value)}
                          name="state"
                        >
                          <option disabled>Select state</option>
                          <option value="Lagos">Lagos</option>
                          <option value="1">Dilli</option>
                          <option value="1">Newyork</option>
                          <option value="1">Islamabad</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="m-3 d-flex justify-content-between align-items-center">
                  <Link to="/">Forget Password</Link>
                  <div className="float-right">
                    <Button
                      basic
                      color="orange"
                      to="/auth/login"
                      className="btn head-btn2"
                      onClick={handleSubmit}
                      loading={props.isRegistering}
                    >
                      Register <i className="fa fa-arrow-right"></i>
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
                  <Link to="/auth/login">Sign in</Link> if you already have ab
                  account
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
  registerStatus: state.auth.registerStatus,
  authenticating: state.auth.authenticating,
  isRegistering: state.auth.isRegistering,
  registrationError: state.auth.registrationError,
});

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
