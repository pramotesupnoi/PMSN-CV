import React from 'react'
import AccomplishmentsItem from './AccomplishmentsItem'

export default function Accomplishments() {
    return (
        <div className="main-accom pb-5">
            <h3 className="mb-4 ps-3">Accomplishments</h3>

            <ul className="anim-list">
                <AccomplishmentsItem info="Thailand's Mental Health Center #8 : Mental health assessment system" 
                detail="The online assessment for teacher and parent use to evaluate their student/child mental health problem and if they have sign of a problem the system will suggest the way to handle the problem. Also this system allow student/child to evaluate themself and will open for general user in the future.
Using PHP, MySql, ReactJS, Bootstrap and some others library in development process.
My role in this project is designing website appearance, coding (front end & back end), designing system and database. " />

                <AccomplishmentsItem info="Gift Angel Radio radio station website" detail="Website for #1 radio station in Udon Thani, Thailand. 
Using PHP, MySql, JavaScript, Bootstrap and some others library in development process.
This website can manage news, DJ, radio schedule, top chart list, sponsor, page appearance.
My role in this project is designing website appearance, coding (front end & back end), create rest api for mobile application, designing system and database. " />

                <AccomplishmentsItem info="Hintang village's E-Commerce website" detail="E-commerce website that sell handmade product by elderly from Hintang village, Udon Thani, Thailand.
Using PHP, MySql, JavaScript and some others library in development process.
My role in this project is create website layout following the design, coding (front end & back end), designing system and database." />

                <AccomplishmentsItem info="Udon Thani Rajabhat University Teacher evaluation system" detail="Teacher Evaluation System for Udon Thani Rajabhat University.
Using PHP, MySql, JavaScript and some others library in development process.
This system allow admin to create a work evaluation schedule and let the teachers in the university to send their works to calculate the amount of salary raise they will get in the university's budget year.
My role in this project is create page layout following the design, coding (front end & back end), designing system and database." />

                <AccomplishmentsItem info="Flyflow Studio Gym & Fitness membership system" detail="Membership system for Flyflow Studio Gym in Fitness center.
Using .NET C#, SQL Server in development process.
This system use to manage members, fitness course, promotion, register course for members, collect and process data when members come to use gym's services, print receipt and reports, calculate daily, monthly, yearly income. The system is a windows application.
My role in this project is designing layout, coding, designing system and database." />
            </ul>
            <br />
            <p className="fw-light ps-4 small">* Some projects can not be mention due to client confidentiality</p>    
        </div> 
    )
}
