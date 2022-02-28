import React from 'react'
import EducationItem from './EducationItem'

export default function Education(props) {
    return (
        <div>
            <h4 className="mb-4">Education</h4>
            <ul className="education-list anim-list">
                <EducationItem start="2012" end="2016" place="Udon Thani Rajabhat University" major="Bachelor of science Information Technology (Software development)" gpa="3.45" file="udru-transcript.jpg" isForCapture={props.isForCapture} />

            </ul>
        </div>
    )
}
