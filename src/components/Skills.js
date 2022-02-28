import React from 'react'
import SkillsItem from './SkillsItem'

export default function Skills() {
    return (
        <div className="main-skills">
            <div className="row">
                <div className="col-xl-6">
                    <h5 className="mb-4 text-black-50">Professional skills</h5>
                    <div className="row gx-2">
                        <SkillsItem img="002-js.png" name="JavaScript" details="React, JQuery, NodeJs" />
                        <SkillsItem img="001-html-5.png" name="HTML" />
                        <SkillsItem img="003-css-3.png" name="CSS" />
                        <SkillsItem img="004-c-sharp.png" name="C# .Net" details="Windows form app" />
                        <SkillsItem img="005-unity.png" name="Unity3D" details="Game, AR/VR" />
                        <SkillsItem img="011-php.png" name="PHP" />
                        <SkillsItem img="012-python.png" name="Python" details="FastAPI" />
                        <SkillsItem img="010-server.png" name="DBMS" details="SQL server, MySql, Firebase, MongoDB" />
                    </div>
                </div>
                <div className="col-xl-6 mt-5 mt-xl-0">
                    <h5 className="mb-4 text-black-50">Additional skills</h5>
                    <div className="row gx-2">
                        <SkillsItem img="006-photoshop.png" name="Photoshop" />
                        <SkillsItem img="007-office.png" name="MS Office" />
                        <SkillsItem img="013-pencil.png" name="Drawing" />
                    </div>
                </div>
            </div>
        </div>
    )
}
