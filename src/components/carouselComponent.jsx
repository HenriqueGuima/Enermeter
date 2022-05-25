import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay, Navigation } from "swiper";

export default function CarouselComponent() {
  return (
    <>
      {" "}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper desktop-carousel"
      >
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-10.png"
            width="auto"
            height="140"
          />

          <p className="mt-5 legenda-func">
            Waste Collection <br></br>Management
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-11.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">
            Urban Cleaning <br></br>Management
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-12.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">
            Organization <br></br>Management
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-13.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">
            Ocurrences <br></br>Management
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-14.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">
            Fleet <br></br>Management
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-15.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">
            Fuel <br></br>Management
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-16.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">
            Waste Sites <br></br>Management
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-17.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">
            Route <br></br>Planning
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-18.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">
            Tasks <br></br>Management
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-19.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">Analytics</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imagens-enermeter.s3.eu-west-3.amazonaws.com/Site enermeter-20.png"
            width="auto"
            height="140"
          />
          <p className="mt-5 legenda-func">PAYT</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
