import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import cat from "./images/animations/lf30_editor_r2ia1abk.json";

// import './App.css';

const Calendar1 = () => {
  const [date, setDate] = useState(new Date());

  const container = useRef();

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: cat,
    });
    // Return clean up function here
    return () => instance.destroy();
  }, []);

  return (
    <div className="calendar-box">
      <h1 className="text-center">Our Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>

      <div className="description">
        <h3 className="event">This month events</h3>
        <ul>
          <li>3 - Ice cream eating competition</li>
          <li>17 - Water ballon fight</li>
          <li>25 - Sock swapping event</li>
        </ul>
      </div>
      <div className="animation" ref={container}></div>
    </div>
  );
};

export default Calendar1;
