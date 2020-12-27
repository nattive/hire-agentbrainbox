import React from "react";
import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div className="card card-body stat-card">
              <div className="text-center my-auto mx-auto">
                <p> Emplued Staffs</p>
                <span>0</span>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div className="card card-body stat-card">
              <div className="text-center my-auto mx-auto">
                <p> Unread Messages</p>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
