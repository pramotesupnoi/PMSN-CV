import React from 'react'
import Lottie from 'react-lottie'
import * as dotAnimation from './../animations/lf30_editor_mexxw5up.json'

export default function CertsAndAwardsItem(props) {
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
            <span className="fw-light small"> at {props.place}</span>  
            {
                props.file !== undefined ? 
                <><br />
                    <a href={`./file/${props.file}`} className="btn btn-sm btn-light mt-1 py-0" target="_blank" rel="noreferrer">
                        <i className="far fa-file-alt"></i> View
                    </a></> 
                : null
            }
            <span className="dot">
                <Lottie options={animOptions} height="100%" width="100%" />
            </span>
            
        </li>
    )
}
