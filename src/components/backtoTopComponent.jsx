import React, { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import useGoTop from "../hooks/useGoTop";

export default function BackToTopComponent() {
  const { showTopBtn, goToTop } = useGoTop();
  return (
    <>
      {showTopBtn && (
        <HiChevronUp
          className="icon-position icon-style"
          onClick={goToTop}
        ></HiChevronUp>
      )}{" "}
    </>
  );
}
