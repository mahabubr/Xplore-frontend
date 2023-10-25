"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import Title from "../UI/Title";
import { useGetServicesQuery } from "@/redux/api/features/services/servicesApi";
import { iServices } from "@/interface/api";
import BannerCard from "../Services/Card/BannerCard";
import { motion } from "framer-motion";

const AvailableServices = () => {
  const { data, isLoading } = useGetServicesQuery({
    availabilityType: "AVAILABLE",
  });

  return (
    <div className="container mx-auto">
      <Title top="Choose Your" title="Perfect Holiday" />
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 1000 }}
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
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <BannerCard service={service} isLoading={isLoading} />
                </motion.div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default AvailableServices;
