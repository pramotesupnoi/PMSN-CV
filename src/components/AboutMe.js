import React from "react";
import WorkExp from "./WorkExp";
import AboutMeTop from "./AboutMeTop";
import Skills from "./Skills";
import CertsAndAwards from "./CertsAndAwards";
import Activities from "./Activities";

export default function AboutMe() {
  return (
    <div className="col-lg-8 col-xl-9">
      <div className="main-sec1 p-3 py-4 shadow text-dark">
        <AboutMeTop />
        <hr className="my-5" />
        <WorkExp />
        <hr className="my-5" />
        <Skills />
        {/* <hr className="my-5" /> */}
        {/* <CertsAndAwards /> */}
      </div>
      <div className="main-sec2 p-3 py-4 shadow text-white">
        <CertsAndAwards />
      </div>
      <div className="main-sec1 p-3 py-4 shadow text-dark">
        <Activities />
      </div>
    </div>
  );
}
