import React from 'react'
import TopProfileContactItem from './TopProfileContactItem'
import * as astAnimation from './../animations/lf20_ca38h6i1.json'
import Lottie from 'react-lottie';

export default function RefPerson() {
    const animOptions = {
        loop: true,
        autoplay: true,
        animationData: astAnimation.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className="main-ref-person bg-white p-3 py-4 shadow text-white mt-3">
            <h5 className="mb-4 ">Reference</h5>
            <h4 className="mb-2">Mr.Khwanchai Suksaen</h4>
            <p className="fw-light">Teacher</p>
            <TopProfileContactItem fa_class="fa-solid fa-square-phone" type="tel" text="+6689-715-6151" val="+66897156151" colorClass="text-white" />
            <TopProfileContactItem fa_class="fa-solid fa-envelope" type="mailto" text="khwanchai.s@gmail.com" val="khwanchai.s@gmail.com" colorClass="text-white" />
            <div className="ast-anim">
                <Lottie options={animOptions} height="100%" width="100%" />
            </div>
        </div>
    )
}
