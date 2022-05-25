import React from "react";

export default function ArchitectureComponent() {
  return (
    <>
      <section id="architecture">
        <div className="container-fluid">
          <div class="px-4 py-5 my-5 text-center">
            <div className="row">
              <div className="col-md-12 mx-auto mt-5">
                {" "}
                <h1 class="fw-bold blue-title mb-title ">Architecture</h1>
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
                  src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/21-cortado.png"
                  // width="auto"
                  // height="450"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
