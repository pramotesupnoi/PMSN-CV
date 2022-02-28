import React from "react";
import WorkExp from "./WorkExp";
import AboutMeTop from "./AboutMeTop";
import Skills from "./Skills";
import CertsAndAwards from "./CertsAndAwards";
import Activities from "./Activities";
import RefPerson from "./RefPerson";
import Education from "./Education";
import Accomplishments from "./Accomplishments";

export default function AboutMe(props) {
  return (
    <div className="col-lg-8 col-xl-9">
      <div className="main-sec1 p-3 py-4 shadow text-dark">
        <AboutMeTop />
        <Education isForCapture={props.isForCapture} />
        <hr className="my-5" />
        <WorkExp />
        <hr className="my-5" />
        <Skills />
      </div>
      <div className="svg-spacer svg-1"></div>
      <div className="main-sec2 p-3 py-4 shadow text-white">
        <CertsAndAwards isForCapture={props.isForCapture} />
      </div>
      <div className="svg-spacer svg-2"></div>

      <div className="main-sec1 p-3 py-4 shadow text-dark">
        <Activities />
      </div>
      <div className="svg-spacer svg-1"></div>

      <div className="main-sec2 p-3 py-4 shadow text-white">
        <Accomplishments />
      </div>
      <div>
        <RefPerson />
      </div>
    </div>
  );
}
