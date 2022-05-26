import React from "react";

export default function FooterComponent() {
  return (
    <>
      <div className="container-fluid">
        <div class="px-4 py-5 my-5 text-center">
          <div className="row">
            <div className="col-lg-2 mx-auto mt-5"></div>
            <div className="col-lg-2 mx-auto mt-5">
              {/* <svg
                className="bd-placeholder-img"
                width="250"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#55595c" />
              </svg> */}
              <img
                className="img-fluid max-width-300"
                src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/enermeter-logo.png"
              />
            </div>
            <div className="col-lg-2 mt-5">
              <div className="col p-4 d-flex flex-column position-static contacts">
                <span>Contacts</span>
                <p>Travessa dos prados nº12</p>
                <p>4705-025 Celeirós, Aveleda e Vimieiro</p>
                <p>Braga-Portugal</p>
                <p>+351 253 287 237</p>
                <a href="mailto:garbagere@enermeter.pt" className="mail-link">
                  garbagere@enermeter.pt
                </a>
              </div>
            </div>
            <div className="col-lg-3 mx-auto mt-5">
              <div className="col p-4 d-flex flex-column position-static contacts">
                <p> &#169; 2022 Enermeter</p>
                <p>- Todos os direitos reservados | Legal</p>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <a
                      href="https://pt.linkedin.com/company/enermeter"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin px-2 social-link"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/Enermeter"
                      target="_blank"
                    >
                      <i class="fa-brands fa-facebook px-2 social-link"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/user/enermeter"
                      target="_blank"
                    >
                      <i class="fa-brands fa-youtube px-2 social-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mx-auto mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
