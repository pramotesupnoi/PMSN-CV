import React from "react";
import TopProfileContactItem from "./TopProfileContactItem";

export default function TopProfile() {
  return (
    <div className="col-lg-4 col-xl-3">
        <div className="main-profile p-3 py-4 shadow">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-10">
              <div className="profile-img">
                <div className="profile-img-inner">
                  <img src="/img/smiley-dog.jpg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 col-lg-12">
              <div className="text-center mt-4">
                <h2>Pramote Supnoi</h2>
                <h5 className="fw-lighter text-black-50">Full-stack developer</h5>
              </div>
              <div className="row mt-4">
                <TopProfileContactItem fa_class="fa-brands fa-github" type="link" text="pramotesupnoi" val="https://github.com/pramotesupnoi" />
                <TopProfileContactItem fa_class="fa-brands fa-linkedin" type="link" text="pramotesupnoi" val="https://www.linkedin.com/in/pramote-supnoi-a94482152/" />
                <TopProfileContactItem fa_class="fa-solid fa-square-phone" type="tel" text="+66951699021" val="+66951699021" />
                <TopProfileContactItem fa_class="fa-solid fa-envelope" type="mailto" text="pramotesupnoi@gmail.com" val="pramotesupnoi@gmail.com" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
