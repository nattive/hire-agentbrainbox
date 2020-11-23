import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import { Uploader, Panel, DatePicker, Checkbox } from "rsuite";
import Geocode from "react-geocode";
import { registerAgency } from "../../Actions/registerAction";
import { Button, Icon } from "semantic-ui-react";
import { baseUrl } from "../../Constants/API";
import { token } from "../../Constants/constant";
const userToken = localStorage.getItem(token);
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const CreateAgency = (props) => {
  const [agency_name, setAgencyName] = useState();
  const [agency_email, setAgencyEmail] = useState();
  const [agency_phone, setAgencyPhone] = useState();
  const [agency_website, setAgencyWebsite] = useState();
  const [agency_address, setAgencyAddress] = useState();
  const [center, setCenter] = useState({
    lat: 59.955413,
    lng: 30.337844,
  });
  const [zoom, setZoom] = useState(15);
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();

  const [agency_map_cord, setAgencyMapCord] = useState();
  const [agency_about, setAgencyAbout] = useState();
  const [CAC, setCAC] = useState();
  const [agency_found_year, setAgencyFoundYear] = useState();
  const [has_training_facility, setHasTrainingFacility] = useState(true);

  const [agency_image, setAgencyImage] = useState();
  const [logo, setLogo] = useState();
  const [file, setFile] = useState();
  const [agency, setAgency] = useState({});
  const [step, setStep] = React.useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };

  const onNext = () => {
    step === 1 ? handleCreate() : onChange(step + 1);
  };
  const onPrevious = () => onChange(step - 1);
  const handleCreate = () => {
    let credentials = {
      agency_name,
      agency_email,
      agency_phone,
      agency_website,
      agency_address,
      city,
      country,
      state,
      agency_map_cord,
      agency_about,
      CAC,
      agency_found_year,
      has_training_facility,
    };
    props.registerAgency(credentials);
  };
  const basicField = [
    {
      value: agency_name,
      name: "name",
      placeholders: "Agency's Official Name",
      onChange: (e) => setAgencyName(e.target.value),
    },
    {
      value: agency_email,
      name: "email",
      placeholders: "Agency's Email",
      onChange: (e) => setAgencyEmail(e.target.value),
    },
    {
      value: agency_phone,
      name: "phone",
      placeholders: "Agency's Phone number",
      onChange: (e) => setAgencyPhone(e.target.value),
    },
    {
      value: agency_website,
      name: "website",
      placeholders: "Agency website (if available)e",
      onChange: (e) => setAgencyWebsite(e.target.value),
    },
    {
      value: agency_address,
      name: "Address",
      placeholders: "Agency's street address, closest landmark",
      onChange: (e) => setAgencyAddress(e.target.value),
    },
    {
      value: city,
      name: "city",
      placeholders: "City/Town",
      onChange: (e) => setCity(e.target.value),
    },
    {
      value: state,
      placeholders: "state",
      onChange: (e) => setState(e.target.value),
    },
    {
      value: country,
      name: "country",
      placeholders: "Agency;s country of registration",
      onChange: (e) => setCountry(e.target.value),
    },
  ];
  const fileFields = [
    {
      name: "logo",
      label: "upload agency logo",
      onChange: (e) => setLogo(e[0]),
    },
    {
      name: "agency_image",
      label: "upload cover image",
      onChange: (e) => setAgencyImage(e[0]),
    },
    {
      name: "file",
      label: "upload registration document",
      onChange: (e) => setFile(e[0]),
    },
  ];

  useEffect(() => {
    Geocode.setApiKey("AIzaSyCg3Qd-2DFLW4L5a-WJzDHk_JN12z2iISM");
    Geocode.setLanguage("ng");

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);
  const cordFromAddress = () => {
    Geocode.fromAddress("Eiffel Tower").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  useEffect(() => {
    if (props.agency.id) {
      setAgency(props.agency);
      setStep(2);
    }
  }, [props.agency]);

  return (
    <div className="container bg-light">
      <div className="container p-4">
        <Panel
          header={`Create your agency account`}
          bordered
          className="mx-auto"
          style={{ backgroundColor: "#fff" }}
        >
          {step === 0 && (
            <>
              <div style={{ height: "50vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyCg3Qd-2DFLW4L5a-WJzDHk_JN12z2iISM",
                  }}
                  defaultCenter={center}
                  defaultZoom={zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
              <form action="#" className="row mt-10">
                {basicField.map((input) => (
                  <>
                    <div className="col-6 mt-10">
                      <input
                        type="text"
                        name={input.name}
                        placeholder={input.placeholders}
                        onChange={input.onChange}
                        onBlur={cordFromAddress}
                        required
                        className="single-input"
                      />
                    </div>
                  </>
                ))}
              </form>
            </>
          )}
          {step === 1 && (
            <div className="row m-3">
              <div className="col-lg-6 col-xs-12">
                <div className="mt-10">
                  <div className="form-group">
                    <p htmlFor="" className="form-control-label">
                      About
                    </p>
                    <textarea
                      value={agency_about}
                      onChange={(e) => setAgencyAbout(e.target.value)}
                      cols="30"
                      rows="10"
                      placeholder="...Your agency's brief information"
                      className="single-textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-10">
                  <div class="switch-wrap d-flex justify-content-between w-75">
                    <Checkbox
                      defaultChecked={has_training_facility}
                      onClick={() =>
                        setHasTrainingFacility(!has_training_facility)
                      }
                    >
                      {" "}
                      <p>
                        Do you have a training facility to train sport bet
                        agents?
                      </p>
                    </Checkbox>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                <div className="input-group mt-10">
                  <p htmlFor="cac" className="form-control-label">
                    CAC or any related Registration code
                  </p>
                  <input
                    type="text"
                    name="cac"
                    placeholder="e.g RG-XXXXX"
                    onChange={(e) => setCAC(e.target.value)}
                    required
                    className="single-input"
                  />
                </div>
                <div className="input-group mt-10 mt-4">
                  <p htmlFor="cac" className="form-control-label">
                    When was the agency created?
                  </p>{" "}
                  <br />
                  <DatePicker
                    onChange={(e) => setAgencyFoundYear(e)}
                    style={{ width: 280, marginTop: 5 }}
                  />
                </div>
              </div>
            </div>
          )}
          {step == 2 && (
            <div className="row">
              {fileFields.map((uploader) => (
                <Uploader
                  action={`${baseUrl}/agency/profile/upload-media`}
                  draggable
                  headers={{ Authorization: `Bearer ${userToken}` }}
                  className="col-xs-12 col-md-6"
                  multiple={false}
                  name={uploader.name}
                  //   onChange={(e) => console.log(e)}
                >
                  <div style={{ lineHeight: "50px" }}>{uploader.label}</div>
                </Uploader>
              ))}
            </div>
          )}
          {step === 3 && (
            <div className="container d-flex justify-content-center">
              <div className="card col-xs-12 col-md-6 card-body">
                <div className="text-center">
                  <Icon name="thumbs up" size="huge" color="green" />
                  <h4 className="text-center">All Done!</h4>
                  <p>
                    Your account has been created successfully, Tou can proceed
                    to your dashboard as soon as your account as been approved
                  </p>
                </div>
              <a
                href="http://localhost:3001/login"
                className="btn head-btn pr-3 pl-3 mt-30"
              >
                Go to your Dashboard
              </a>
              </div>
            </div>
          )}
          <div className="float-right mt-4">
            <Button
              onClick={onPrevious}
              color="orange"
              className="btn head-btn2 p-3"
              disabled={step === 0}
              basic
            >
              Previous
            </Button>
            <Button
              className="btn-flat btn head-btn2 p-3"
              onClick={onNext}
              disabled={step === 3}
              loading={props.creatingAgency}
              color="green"
            >
              Next
            </Button>
          </div>
        </Panel>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  agency: state.auth.agency,
  creatingAgency: state.auth.creatingAgency,
  registrationError: state.auth.registrationError,
});

const mapDispatchToProps = {
  registerAgency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAgency);
