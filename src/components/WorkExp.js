import React from 'react'
import WorkExpItem from './WorkExpItem'
import * as devAnimation from './../animations/lf30_editor_s5xa5vlx.json'
import Lottie from 'react-lottie';

export default function WorkExp() {
    const animOptions = {
        loop: true,
        autoplay: true,
        animationData: devAnimation.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className="main-work-exp">
            <h4 className="mb-4 text-black-50">Experiences</h4>
            <ul className="work-exp-list">
                <WorkExpItem start="May 2015" end="July 2015" company="AT Creative Solution Co.,Ltd." position="Internship student" />
                <WorkExpItem start="May 2017" end="Oct 2019" company="Softcare Co.,Ltd." position="Full stack developer" />
                <WorkExpItem start="Oct 2019" end="Oct 2020" company="VVR Asia Co.,Ltd." position="AR/VR developer" />
                <WorkExpItem start="Oct 2020" end="Present" company="Freelancer" position="Full stack, AR/VR developer" />
            </ul>
            <div className="dev-anim">
                <Lottie options={animOptions} height="100%" width="100%" />
            </div>
        </div>
    )
}
