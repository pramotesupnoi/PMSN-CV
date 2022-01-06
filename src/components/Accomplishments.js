import React from 'react'
import AccomplishmentsItem from './AccomplishmentsItem'

export default function Accomplishments() {
    return (
        <div className="main-accom">
            <h5 className="mb-4">Accomplishments</h5>
            <ul className="anim-list">
                <AccomplishmentsItem info="Thailand's Mental Health Center #8 : Mental health assessment system" />
                <AccomplishmentsItem info="Gift Angel Radio radio station website" />
                <AccomplishmentsItem info="Hintang village's E-Commerce website" />
                <AccomplishmentsItem info="Udon Thani Rajabhat University Teacher evaluation system" />
                <AccomplishmentsItem info="Flyflow Studio Gym & Fitness membership system" />
            </ul>
        </div> 
    )
}
