import React from 'react'
import AccomplishmentsItem from './AccomplishmentsItem'

export default function Accomplishments() {
    return (
        <div className="main-accom pb-5">
            <h3 className="mb-4 ps-3">Accomplishments</h3>

            <ul className="anim-list">
                <AccomplishmentsItem info="Thailand's Mental Health Center #8 : Mental health assessment system" 
                detail="The online assessment for teacher and parent use to evaluate their student/child mental health.
Using PHP, MySql, ReactJs and Bootstrap." />

                <AccomplishmentsItem info="Gift Angel Radio radio station website & mobile app" detail="Website and mobile application for #1 radio station in Udon Thani, Thailand. 
Using PHP, MySql, ReactJs and Bootstrap." />

                <AccomplishmentsItem info="Hintang village's E-Commerce website" detail="E-commerce website that sell handmade product by elderly from Hintang village, Udon Thani, Thailand.
Using PHP, MySql, JavaScript." />

                <AccomplishmentsItem info="Udon Thani Rajabhat University Teacher evaluation system" detail="Teacher Evaluation System for Udon Thani Rajabhat University.
Using PHP, MySql, JavaScript." />

                <AccomplishmentsItem info="Flyflow Studio Gym & Fitness membership system" detail="Membership management system for Flyflow Studio Gym.
Using .NET C#, SQL Server." />

<AccomplishmentsItem info="True 5G Immersive" detail="Immersive XR application for True 5G showcase event at Siam. Using Unity, Vuforia and Firebase" />
            </ul>
            <br />
            <p className="fw-light ps-4 small">* Some projects can not be mention due to client confidentiality</p>    
        </div> 
    )
}
