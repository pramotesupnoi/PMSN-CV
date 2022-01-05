import React from "react";
import WorkExp from "./WorkExp";
import AboutMeTop from "./AboutMeTop";

export default function AboutMe() {
  return (
    <div className="col-lg-8 col-xl-9">
      <div className="main-about-me p-3 py-4 shadow text-dark">
        <AboutMeTop />
        <hr className="my-5" />
        <WorkExp />
      </div>
    </div>
  );
}
