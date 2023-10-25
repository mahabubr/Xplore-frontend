"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Title from "../UI/Title";
import { useGetServicesQuery } from "@/redux/api/features/services/servicesApi";
import { iServices } from "@/interface/api";
import BannerCard from "../Services/Card/BannerCard";

const UpcomingServices = () => {
  const { data, isLoading } = useGetServicesQuery({
    availabilityType: "UPCOMING",
  });

  return (
    <div className="container mx-auto">
      <Title top="Plan Your" title="Upcoming Tour" />
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 1000, reverseDirection: true }}
        speed={2000}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
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

export default UpcomingServices;
