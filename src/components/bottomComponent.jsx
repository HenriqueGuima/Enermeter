import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import emailjs from "@emailjs/browser";
import ReactPlayer from "react-player";

export default function BottomComponent() {
  // Modal open state
  const [modal, setModal] = React.useState(false);

  useEffect(() => {
    (function () {
      "use strict";
      window.addEventListener(
        "load",
        function () {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName("form");
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    })();
  }, []);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qehhr4t",
        "template_dj7g6ia",
        form.current,
        "YyjLGX4ebDhpgSPd4"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.location.reload(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section id="bottom-content">
        <div className="container-fluid">
          <div class=" py-5 my-5 text-center">
            <div className="row">
              <div className="col-md-12 mx-auto">
                <h1 class=" fw-bold blue-title mt-5">
                  Transforming waste industry
                </h1>
                <ReactPlayer
                  url="https://videos-garbagere.s3.eu-west-3.amazonaws.com/Enermeter_Mockup.mp4"
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="auto"
                  className="center-video-bottom"
                />
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

                {/* <img
                src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-21.png"
                width="auto"
                height="450"
              /> */}

                <div className="button-width">
                  <div
                    color="primary"
                    onClick={toggle}
                    type="button"
                    class="request"
                  >
                    Request Demo
                  </div>
                  <Modal
                    isOpen={modal}
                    toggle={toggle}
                    modalTransition={{ timeout: 500 }}
                  >
                    <ModalBody>
                      {" "}
                      <div className="form-group">
                        <form ref={form} onSubmit={sendEmail} className="form">
                          <label className="label">First Name</label>
                          <input
                            type="text"
                            name="user_fname"
                            className="form-control"
                            required
                          />
                          <label className="label">Last Name</label>
                          <input
                            type="text"
                            name="user_lname"
                            className="form-control"
                            required
                          />
                          <label className="label">Job Title</label>
                          <input
                            type="text"
                            name="user_job"
                            className="form-control"
                            required
                          />
                          <label className="label">Email</label>
                          <input
                            type="email"
                            name="user_email"
                            className="form-control"
                            required
                          />
                          <input
                            type="submit"
                            value="Send"
                            class="btn btn-primary"
                            onClick={toggle}
                          />
                        </form>
                      </div>
                    </ModalBody>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
