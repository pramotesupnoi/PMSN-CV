import React from 'react'
import CertsAndAwardsItem from './CertsAndAwardsItem'

export default function CertsAndAwards() {
    return (
        <div className="main-cert-award">
            <h5 className="mb-4">Certifications and awards</h5>
            <ul className="cert-award-list anim-list">
                <CertsAndAwardsItem info="Microsoft Offce Certification 2014" place="Khon Kaen University" />
                <CertsAndAwardsItem info="Bronze medal certification in Mathematical ability creative contest using The Geometer's Sketchpad 2010" place="Satrirachinuthit School" />
                <CertsAndAwardsItem info="Second place in Microsoft Power Point competition 2009" place="Santapon college" />
                <CertsAndAwardsItem info="Second place in Microsoft Word competition 2010" place="Udon Thani Rajabhat University" />
            </ul>
        </div>
    )
}
