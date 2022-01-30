import React from 'react'
import Lottie from 'react-lottie'
import * as dotAnimation from './../animations/lf30_editor_tq5ilmhe.json'

export default function ActivitiesItem(props) {
    const animOptions = {
        loop: true,
        autoplay: true,
        animationData: dotAnimation.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <li className="cert-award-item anim-list-item mb-3">
            <span className="fw-bold">{props.info}</span>
            <br />
            <span className="fw-light small text-black-50"> at {props.place}</span>

            <span className="dot">
                <Lottie options={animOptions} height="100%" width="100%" />
            </span>
        </li>
    )
}
