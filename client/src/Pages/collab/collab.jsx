import React from "react";
import './collab.css'

export default function Collab() {
    const allies = [
        { id: 1, logo: "https://pic.clubic.com/v1/images/2063553/raw" },
        { id: 2, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/EY_logo_2019.svg/800px-EY_logo_2019.svg.png" },
        { id: 3, logo: "https://media.licdn.com/dms/image/C560BAQE0N4qKJB0n6A/company-logo_200_200/0/1631323272759?e=2147483647&v=beta&t=2Ls7e6TyC_KT9w6RT_VVR4LBQMyIZasGIiE35lGf6ZY" },
        { id: 4, logo: "https://fabskill.s3.eu-west-3.amazonaws.com/job_visual/1670509519-884-1797.png" },
        { id: 5, logo: "https://media.licdn.com/dms/image/C560BAQE0N4qKJB0n6A/company-logo_200_200/0/1631323272759?e=2147483647&v=beta&t=2Ls7e6TyC_KT9w6RT_VVR4LBQMyIZasGIiE35lGf6ZY" },

    ]
    return (
        <div className="Collab-section1">
            <div className="container02">
                <div className="container3">
                    <div className="text-centered-agenda2">Partenaires</div>
                    <div className="subtitle-pgm">
                        <div className="line-sub-pgm"></div>
                        <div>Lorem ipsum dolor sit amet </div>
                        <div className="line-sub-pgm"></div>
                    </div>
                </div>
            </div>
            <div className="jobs-offer">
                <div className="title1">Les entreprises qui recrutent</div>
                <div className="jobs">
                    {allies.map(ally => (
                        <div key={ally.id} className="ally">
                            <img src={ally.logo} alt={`Ally ${ally.id}`} className="allyphoto" />
                            <div className="alliesCont">
                                <button className="btn1">Voir l'offre</button>
                                <button className="btn2">Je postule</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="exposant">
                <div className="title1">Les exposants</div>
                <div className="jobs">
                    {allies.map(exp => (
                        <div key={exp.id} className="exp">
                            <img src={exp.logo} alt={`exp ${exp.id}`} className="expPhoto" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="jobs-offer">
                <div className="title1">Les sponsors</div>
                <div className="jobs">
                    {allies.map(sponsor => (
                        <div key={sponsor.id} className="sponsor">
                            <img src={sponsor.logo} alt={`sponsor ${sponsor.id}`} className="sponsorPhoto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}