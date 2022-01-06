import React from 'react'
import EducationItem from './EducationItem'

export default function Education() {
    return (
        <div>
            <h5 className="mb-4">Education</h5>
            <ul className="education-list anim-list">
                <EducationItem start="2012" end="2016" place="Udon Thani Rajabhat University" major="Bachelor of science Information Technology (Software development)" gpa="3.45" />

            </ul>
        </div>
    )
}
