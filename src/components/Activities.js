import React from 'react'
import ActivitiesItem from './ActivitiesItem'
import * as dogAnimation from './../animations/lf30_editor_o1ltoqf9.json'
import Lottie from 'react-lottie';

export default function Activities() {
    const animOptions = {
        loop: true,
        autoplay: true,
        animationData: dogAnimation.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className="main-activities">
            <h3 className="mb-4 ps-3">Activities</h3>
            <ul className="anim-list">
                <ActivitiesItem info="Participated in a National Software Contest (NSC) 17th Final Round 2015" place="Fasion Island Shopping Mall, Bangkok" />
                <ActivitiesItem info="Participated in a National Software Contest (NSC) 18th Final Round 2016" place="Mahisorn Hall, Siam Commercial Bank PCL., Head Office. Bangkok" />
                <ActivitiesItem info="Lecturer about How to create game with Unity3D 2015" place="Udon Thani Rajabhat Univerisity" />
                <ActivitiesItem info="Lecturer about How to create game with Unity3D 2016" place="Udon Thani Rajabhat Univerisity" />
                <ActivitiesItem info="Lecturer about How to create mobile game with Unity3D 2016" place="Nakhon Ratchasima Rajabhat Univerisity" />
                <ActivitiesItem info="Lecturer about How to create game with Unity3D 2020" place="Udon Thani Rajabhat Univerisity" />
                <ActivitiesItem info="Lecturer about How to create game with Unity3D 2021" place="Udon Thani Rajabhat Univerisity" />
            </ul>
            <div className="dog-anim">
                <Lottie options={animOptions} height="100%" width="100%" />
            </div>
        </div>
    )
}
