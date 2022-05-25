import React from "react";

export default function IntroComponent() {
  return (
    <>
      <section id="intro">
        <div className="container-fluid">
          <div className="row mb-2 mt-5 d-flex flex-row justify-content-around">
            <div className="col-xl-6">
              <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <div className="col-auto d-lg-block">
                    {/* <svg
                    className="bd-placeholder-img"
                    width="auto"
                    height="450"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <rect width="100%" height="100%" fill="#55595c" />
                  </svg> */}
                    <img
                      className="img-fluid"
                      src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-02.jpg"
                      // width="auto"
                      // height="450"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="row g-0  overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <p className="mb-auto p-md-5 intro-p">
                    Garbagere is a Cloud platform whose main objective is to
                    provide waste collection, treatment and recovery entities
                    with a solution that allows them to manage in real time all
                    assets related to waste collection and treatment operations
                    and urban cleaning, namely through sensing technologies
                    (IoT).
                  </p>
                  <p className="mb-auto p-md-5 intro-p">
                    The platform is composed by two systems that complement each
                    other: a Web application and a Android mobile application.
                    The Web application makes it possible to carry out all the
                    planning and management of operations, being particularly
                    useful for back-office users. The Android mobile application
                    is designed to help with tasks usually performed outside of
                    the office environment that require the intervention of
                    specialized teams in the field
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
