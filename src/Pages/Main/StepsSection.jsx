import React from "react";
//
//
//
// Mobile Application
// className="border-bt
export default function StepsSection() {
  return (
    <div>
      <div
        class="apply-process-area apply-bg pt-50 pb-50 mb-50 bg-light"
        data-background="assets/img/gallery/how-applybg.png"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-tittle white-text text-center p-2">
                <span>Apply Process</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-process text-center mb-30">
                <div class="process-ion">
                  <span class="flaticon-search"></span>
                </div>
                <div class="process-cap">
                  <h5>1. Select Your City</h5>
                  <p>Enter your Shop's Location, city to filter agents</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-process text-center mb-30">
                <div class="process-ion">
                  <span class="flaticon-curriculum-vitae"></span>
                </div>
                <div class="process-cap">
                  <h5>2. Apply for Agent</h5>
                  <p>Surf through list of agents by different HRs</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-process text-center mb-30">
                <div class="process-ion">
                  <span class="flaticon-tour"></span>
                </div>
                <div class="process-cap">
                  <h5>3. Select Desired Agent</h5>
                  <p>
                    View your desired agent, review documents and information
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div class="single-process text-center mb-30">
                <div class="process-ion">
                  <span class="flaticon-tour"></span>
                </div>
                <div class="process-cap">
                  <h5>3. Send An AAR</h5>
                  <p>
                    Send an agent availablity enquiry with just a click, This
                    will inform the HR agency of your interest about the agent.
                    {/* The agency will respond with all neccesary steps aon how to safely emply the agent */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
