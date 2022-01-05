import React from 'react'

export default function SkillsItem(props) {
    return (
        <div className="col-sm-6 col-lg-4 mb-3">
            <div className="skills-item">
                <img src={`/img/skills/${props.img}`} />
                <span className="fw-bold">{props.name}</span>
                {
                    props.details !== undefined ?
                        <>
                            <br />
                            <span className="fw-light text-black-50 small">{props.details}</span>
                        </> : null
                }
            </div>
        </div>
    )
}
