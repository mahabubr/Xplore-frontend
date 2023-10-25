"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faGlobe,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Title from "../UI/Title";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Survey = () => {
  return (
    <div>
      <Title title="Survey and Overview" top="Take a Look" />
      <section className="bg-elegant p-8">
        <div className="container mx-auto text-center">
          <motion.div className="flex flex-wrap justify-around">
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeatDelay: 1,
              }}
              className="p-4 space-y-2"
            >
              <p className="text-5xl font-bold text-primary">
                <FontAwesomeIcon icon={faSmile} />
              </p>
              <p className="text-xl text-sunset">Happy Travelers</p>
              <p className="text-lg text-neutral">
                +<CountUp start={1} end={50000} duration={20} />
              </p>
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeatDelay: 1,
              }}
              className="p-4 space-y-2"
            >
              <p className="text-5xl font-bold text-primary">
                <FontAwesomeIcon icon={faGlobe} />
              </p>
              <p className="text-xl text-sunset">Countries Visited</p>
              <p className="text-lg text-neutral">
                +<CountUp start={1} end={150} duration={50} />
              </p>
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeatDelay: 1,
              }}
              className="p-4 space-y-2"
            >
              <p className="text-5xl font-bold text-primary">
                <FontAwesomeIcon icon={faCalendar} />
              </p>
              <p className="text-xl text-sunset">Events Organized</p>
              <p className="text-lg text-neutral">
                +<CountUp start={1} end={35000} duration={20} />
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Survey;
