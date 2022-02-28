import React from 'react'
import Lottie from 'react-lottie'
import * as dotAnimation from './../animations/lf30_editor_tq5ilmhe.json'

export default function EducationItem(props) {
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
            <span className="fw-light small text-black-50">{props.start} - {props.end}</span>
            <br />
            <span>{props.major}</span>
            <br />
            <span className="small">GPA {props.gpa}</span>
            <br />
            <span className="fw-light small text-black-50"> at {props.place}</span>
            {
                props.file !== undefined && !props.isForCapture ? 
                <><br />
                    <a href={`./file/${props.file}`} className="btn btn-sm btn-outline-dark mt-1 py-0" target="_blank" rel="noreferrer">
                        <i className="far fa-file-alt"></i> View transcript
                    </a></> 
                : null
            }
            <span className="dot">
                <Lottie options={animOptions} height="100%" width="100%" />
            </span>
        </li>
    )
}
