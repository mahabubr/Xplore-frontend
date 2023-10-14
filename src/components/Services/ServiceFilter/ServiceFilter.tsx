import React, { useState } from "react";
import XSelect from "@/components/UI/XSelect";
import { DatePicker, Input, Slider } from "antd";
import moment from "moment";

const ServiceFilter = ({
  setLocation,
  setMonth,
  setSliderValues,
  sliderValues,
}: any) => {
  const handleMonthChange = (date: any) => {
    if (date) {
      const selectedMonth = moment(date).format("MMMM");
      setMonth(selectedMonth);
    } else {
      setMonth(null);
    }
  };

  const handleSliderChange = (sliderValues: any) => {
    setSliderValues(sliderValues);
  };

  console.log(sliderValues[0]);

  return (
    <div className="bg-elegant p-4 rounded-lg">
      <h2 className="text-center text-passion text-lg">
        Find Your Destination
      </h2>
      <div className="mt-5">
        <XSelect setLocation={setLocation} />
        <DatePicker
          onChange={handleMonthChange}
          className="w-full my-3"
          size="middle"
          picker="month"
        />
        <div>
          <Slider range defaultValue={[0, 100]} onChange={handleSliderChange} />
          <Input
            value={`$ ${sliderValues[0] | 0} - $ ${sliderValues[1] | 0}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;
