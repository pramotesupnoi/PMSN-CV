import React from 'react'
import WorkExpItem from './WorkExpItem'

export default function WorkExp() {
    return (
        <div>
            <h4 className="mb-4 text-black-50">Experiences</h4>
            <ul className="work-exp-list">
                <WorkExpItem start="2020-10-10" end="2021-11-11" company="Google Co.,Ltd." position="Software engineer" />
                <WorkExpItem start="2020-10-10" end="2021-11-11" company="Google Co.,Ltd." position="Software engineer" />
                <WorkExpItem start="2020-10-10" end="2021-11-11" company="Google Co.,Ltd." position="Software engineer" />

            </ul>
        </div>
    )
}
