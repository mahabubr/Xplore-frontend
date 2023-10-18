"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Title from "../UI/Title";
import { useGetServicesQuery } from "@/redux/api/features/services/servicesApi";
import { iServices } from "@/interface/api";
import BannerCard from "../Services/Card/BannerCard";

const AvailableServices = () => {
  const { data, isLoading } = useGetServicesQuery({
    availabilityType: "AVAILABLE",
  });

  return (
    <div className="w-10/12 mx-auto">
      <Title top="Choose Your" title="Perfect Holiday" />
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={16}
      >
        <div>
          {data?.data?.data?.length > 0 &&
            data.data.data.map((service: iServices) => (
              <SwiperSlide key={service.id}>
                <BannerCard service={service} isLoading={isLoading} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default AvailableServices;
