import React, { useEffect, useState } from 'react';
import { BiAlarm } from "react-icons/bi";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Program.css";
function Program() {
    
     
    return (

            <div className="body-timeline">
                <div className="container01">
                    <div className="container2">
                        <div className="text-centered-agenda2">Agenda</div>

                        <div className="subtitle-pgm">
                            <div className="line-sub-pgm"></div>
                            <div>Map to The Entrepreneurial Brilliance! </div>
                            <div className="line-sub-pgm"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <VerticalTimeline >

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="09H00"
                            iconStyle={{ background: "#9FC8D4", color: "rgb(31,33,45)" }}
                            icon={<BiAlarm />}
                        >

                            <h3 className="vertical-timeline-element-title">
                                Welcome and registration of participants :
                            </h3>
                            <p className="vertical-timeline-element-title">
                            Embark on our event journey with a warm welcome and insightful opening remarks. 
                            </p>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="10H00 - 12H00"
                            iconStyle={{ background: "rgb(31,33,45)", color: "#E0DED2" }}
                            icon={<BiAlarm />}          >
                            <h3 className="vertical-timeline-element-title">Conference Sessions</h3>
                            <p className="vertical-timeline-element-title"> Participate in expert-led sessions to explore innovative ideas and gain valuable insights, shaping the future of Responsible Business and Entrepreneurship in your field.</p>


                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="10H00 - 14H30 "
                            iconStyle={{ background: "#9FC8D4", color: "rgb(31,33,45)" }}
                            icon={<BiAlarm />}
                        >
                            <h3 className="vertical-timeline-element-title">Networking with Exhibitors</h3>
                            <p className="vertical-timeline-element-title"> Explore innovative solutions, build relationships, and discover opportunities in a dynamic networking environment.</p>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: "7px solid  rgb(31,33,45)" }}
                            date="14H30- 15H00"
                            iconStyle={{ background: "rgb(31,33,45)", color: "#E0DED2" }}
                            icon={<BiAlarm />}
                        >
                            <h3 className="vertical-timeline-element-title">Final Reflections</h3>
                            <p className="vertical-timeline-element-title">As the day concludes, join us for a final reflection on the day's highlights and achievements.</p>


                        </VerticalTimelineElement>
  
 
   

                    </VerticalTimeline>
                </div>
            </div>
            );
}

export default Program;

