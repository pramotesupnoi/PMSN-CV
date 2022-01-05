import React from 'react'

export default function WorkExpItem(props) {
    return (
        <li className="work-exp-item pb-4">
            <div className="small text-black-50 fw-light">{props.start} - {props.end}</div>
            <h5 className="fw-bold my-1">{props.position}</h5>
            <div>@{props.company}</div>
        </li>
    )
}
