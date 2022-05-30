import CarouselComponent from "./carouselComponent";
import React, { useRef, useState } from "react";
import MobileCarouselComponent from "./mobileCarouselComponent";

export default function FunctionalitiesComponent() {
  return (
    <>
      <section id="functionalities">
        <div className="px-4 py-5 my-md-5 text-center">
          <div className="container marketing">
            <h1 className=" fw-bold white-title mb-title ">Functionalities</h1>
            <div className="row mt-5">
              <CarouselComponent />
              <MobileCarouselComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
