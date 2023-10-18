"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faGlobe,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../UI/Title";

const Survey = () => {
  const [happyTravelers, setHappyTravelers] = useState(0);
  const [countriesVisited, setCountriesVisited] = useState(0);
  const [eventsOrganized, setEventsOrganized] = useState(0);

  useEffect(() => {
    const animationDuration = 3000; // 3 seconds

    const interval1 = setInterval(() => {
      setHappyTravelers((prevValue) => prevValue + 10);
    }, animationDuration / 120);

    const interval2 = setInterval(() => {
      setCountriesVisited((prevValue) => prevValue + 1);
    }, animationDuration / 45);

    const interval3 = setInterval(() => {
      setEventsOrganized((prevValue) => prevValue + 5);
    }, animationDuration / 260);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div>
      <Title title="Survey and Overview" top="Take a Look" />
      <section className="bg-elegant p-8">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-around">
            <div className="p-4 space-y-2">
              <p className="text-5xl font-bold text-primary">
                <FontAwesomeIcon icon={faSmile} />
              </p>
              <p className="text-xl text-sunset">Happy Travelers</p>
              <p className="text-lg text-neutral">
                +{happyTravelers} this year
              </p>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-5xl font-bold text-primary">
                <FontAwesomeIcon icon={faGlobe} />
              </p>
              <p className="text-xl text-sunset">Countries Visited</p>
              <p className="text-lg text-neutral">
                +{countriesVisited} this year
              </p>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-5xl font-bold text-primary">
                <FontAwesomeIcon icon={faCalendar} />
              </p>
              <p className="text-xl text-sunset">Events Organized</p>
              <p className="text-lg text-neutral">
                +{eventsOrganized} this year
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Survey;
