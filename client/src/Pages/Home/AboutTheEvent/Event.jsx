import './Event.css';
import icon1 from "./../../../Assets/icon1.png";
import icon2 from "./../../../Assets/icon2.png";
import icon3 from "./../../../Assets/icon3.png";
import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Event() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon, setShowSemicolon] = useState(false);
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const then = moment('2024-01-24 08:30:00', 'YYYY-MM-DD hh:mm:ss');
      const now = moment();

      if (now >= then) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setFinish(true);
      } else {
        const duration = moment.duration(then.diff(now));
        const totalDays = Math.floor(duration.asDays());

        setDays(totalDays);
        setHours(duration.hours());
        setMinutes(duration.minutes());
        setSeconds(duration.seconds());
      }
    };

    updateCountdown();

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, []);
  
  

  return (
    <div className="event-container">
      <div className="title">ABOUT THE EVENT</div>
      <div className="subtitle">
        <div className="line-sub"></div>
        <div>The first Junior Conference</div>
        <div className="line-sub"></div>
      </div>


      <div className="aboutTheEvent">

        <div className="values">
          <div className="icon-title">
            <img src={icon1} className="icons" />
            <div>Values</div>
          </div>
          <div className="parag">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>

        <div className="thematic">
          <div className="icon-title">
            <img src={icon2} className="icons" />
            <div>thematic</div>
          </div>
          <div className="parag">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>

        <div className="info">
          <div className="icon-title">
            <img src={icon3} className="icons" />
            <div>Information</div>
          </div>
          <div className="parag">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>

      </div>

      <div className="counter-container">
        <div className='time-line'>
        <div className='time-remaining-title'>TIME REMAINING</div>
        <div className='line1'></div>
        </div>
        {!finish &&
          <div className="timer-container">
            <div className="timer">
              <div className='time1'>{days}</div>
              <span className='time2'>Days</span>
            </div>
            <div className='two-points'>:</div>
            {showSemicolon ? <div className="semicolon">:</div> : null}
            <div className="timer">
              <div className='time1'>{hours}</div>
              <span className='time2'>Hours</span>
            </div>
            <div className='two-points'>:</div>
            {showSemicolon ? <div className="semicolon">:</div> : null}
            <div className="timer">
              <div className='time1'>{minutes}</div>
              <span className='time2'>Minutes</span>
            </div>
            <div className='two-points'>:</div>
            {showSemicolon ? <div className="semicolon">:</div> : null}
            <div className="timer">
              <div className='time1'>{seconds}</div>
              <span className='time2'>Seconds</span>
            </div>
          
          </div>
           }
        {finish &&
          <img src={icon1} className="header-logo" />}
        <div className='line2'></div>
      </div>

    </div>
  );
}
