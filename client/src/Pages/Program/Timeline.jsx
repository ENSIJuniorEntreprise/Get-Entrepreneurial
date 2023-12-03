import React from "react";
import { BiAlarm } from "react-icons/bi";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
function Timeline() {
    return (
        <React.Fragment>
            <div className="body-timeline">
                <div className="text-centered-agenda2">Agenda</div>

                <div className="subtitle-pgm">
                    <div className="line-sub-pgm"></div>
                    <div>Lorem ipsum dolor sit amet </div>
                    <div className="line-sub-pgm"></div>
                </div>
                <div>
                    <VerticalTimeline >

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="08H00"
                            iconStyle={{ background: "#9FC8D4", color: "rgb(31,33,45)" }}
                            icon={<BiAlarm />}
                        >

                            <h3 className="vertical-timeline-element-title">
                                Accueil et enregistrement des participants
                            </h3>
                            <p className="vertical-timeline-element-title">
                                Journaliste Express FM, Tunisie
                            </p>
                            <h4 className="vertical-timeline-element-title">Maître de cérémonie: M. Wassim BEN LARBI</h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="09H15 - 10H15"
                            iconStyle={{ background: "rgb(31,33,45)", color: "#E0DED2" }}
                            icon={<BiAlarm />}          >
                            <h3 className="vertical-timeline-element-title">Pause café</h3>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="09H45 - 10H15 "
                            iconStyle={{ background: "#9FC8D4", color: "rgb(31,33,45)" }}
                            icon={<BiAlarm />}
                        >
                            <h3 className="vertical-timeline-element-title">Keynote 1 : L’importance stratégique de la transition verte et le rôle crucial du numérique et de l’innovation.</h3>
                            <p className="vertical-timeline-element-title"> Président du conseil chez Centre Financier aux Entrepreneurs Tunisie S.A.</p>
                            <h4 className="vertical-timeline-element-title">
                                Radhi MEDDEB
                            </h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="10H10- 10H30"
                            iconStyle={{ background: "rgb(31,33,45)", color: "#E0DED2" }}
                            icon={<BiAlarm />}
                        >
                            <h3 className="vertical-timeline-element-title">Keynote 2 : Baromètre des entreprises</h3>
                            <p className="vertical-timeline-element-title">Partner EY Consulting</p>
                            <h4 className="vertical-timeline-element-title">
                                M. Sami ZAOUI
                            </h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="10H30 - 11H15"
                            iconStyle={{ background: "#9FC8D4", color: "rgb(31,33,45)" }}
                            icon={<BiAlarm />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Inauguration officielle et remise des trophées
                            </h3>
                            <p className="vertical-timeline-element-title">Président Directeur Général et fondateur de TDS</p>
                            <h4 className="vertical-timeline-element-title">
                                M. Skander HADDAR
                            </h4>
                            <p className="vertical-timeline-element-title">Ministre des Technologies de la communication</p>
                            <h4 className="vertical-timeline-element-title">
                                M. Nizar BEN NEJI
                            </h4>
                            <p className="vertical-timeline-element-title"> Ministre de l'Economie et de la Planification</p>
                            <h4 className="vertical-timeline-element-title">
                                M. Samir SAID
                            </h4>
                            <br></br>
                            <h3 className="vertical-timeline-element-title">
                                Remise des trophées par La Cheffe du Gouvernement
                            </h3>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="11H15 - 12H00"
                            iconStyle={{ background: "rgb(31,33,45)", color: "#E0DED2" }}
                            icon={<BiAlarm />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Panel 1 : Politiques énergétiques, environnementales et digitales
                            </h3>
                            <p className="vertical-timeline-element-title">Directeur général, ANME, Tunisie</p>
                            <h4 className="vertical-timeline-element-title">
                                M. Fathi HANCHI
                            </h4>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="12H00 - 12H45"
                            iconStyle={{ background: "#9FC8D4", color: "rgb(31,33,45)" }}
                            icon={<BiAlarm />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Panel 2 :  Economie verte  : les opportunités de financement et d’investissement
                            </h3>
                            <p className="vertical-timeline-element-title">Directeur général, CDC, Tunisie</p>
                            <h4 className="vertical-timeline-element-title">
                                Mme. Nejia GHARBI
                            </h4>

                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Timeline;

