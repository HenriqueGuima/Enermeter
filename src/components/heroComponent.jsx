import React from "react";
import ReactPlayer from "react-player";

export default function HeroComponent() {
  return (
    <>
      <section id="hero">
        <div className="row">
          <div className="container-fluid center-video">
            {/* video placeholder*/}
            {/* <img
                src="https://www.talent-100.com.au/wordpress/wp-content/uploads/2016/08/video-placeholder.jpg"
                className="img-fluid "
                alt="hero-image"
              /> */}
            <ReactPlayer
              url="https://videos-garbagere.s3.eu-west-3.amazonaws.com/garbagere-video.mp4"
              playing={true}
              loop={true}
              muted={true}
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
