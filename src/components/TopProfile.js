import React from "react";

export default function TopProfile() {
  return (
    <div className="col-lg-4 col-xl-3">
      <div className="bg-white py-3">
        <div className="main-profile p-3 shadow-sm rounded">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-5 col-md-4 col-lg-10">
              <div className="profile-img">
                <div className="profile-img-inner">
                  <img src="/img/smiley-dog.jpg" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-12">
              <div className="text-center mt-3">
                <h2>Pramote Supnoi</h2>
                <h4 className="fw-lighter text-black-50">Full-stack developer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
