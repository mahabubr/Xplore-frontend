"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../UI/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    rating: 5, // Add a rating property
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    rating: 4, // Add a rating property
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    rating: 3, // Add a rating property
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const ClientReviewWithImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Title title="Client Review" top="See The" />
      <section className="p-8 flex items-center">
        <div className="container mx-auto flex justify-between">
          <div className="w-1/3">
            <div className="grid gap-4 relative">
              <img
                src={
                  "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1528"
                }
                alt={`Image`}
                className="rounded-lg h-52 w-full object-cover"
              />
              <img
                src={
                  "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470"
                }
                alt={`Image`}
                className="rounded-lg h-48 w-48 object-cover absolute -bottom-20 left-20"
              />
            </div>
          </div>
          <div className="w-2/3 ml-8">
            <Slider {...settings}>
              {reviews.map((review) => (
                <div key={review.id} className="p-4">
                  <div className="flex items-center">
                    <img
                      src={
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470"
                      } // Add the user's profile image URL
                      alt={`Image of ${review.name}`}
                      className="rounded-full h-12 w-12 object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-2xl text-primary font-semibold">
                        {review.name}
                      </p>
                      <p className="text-md text-cyan-700">{review.email}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        color="#FFD700"
                        icon={faStarHalfStroke}
                      />
                      <FontAwesomeIcon
                        color="#FFD700"
                        icon={faStarHalfStroke}
                      />
                      <FontAwesomeIcon
                        color="#FFD700"
                        icon={faStarHalfStroke}
                      />
                      <FontAwesomeIcon
                        color="#FFD700"
                        icon={faStarHalfStroke}
                      />
                      <FontAwesomeIcon
                        color="#FFD700"
                        icon={faStarHalfStroke}
                      />
                      <p className="ml-2 text-gray-600">
                        Rating: {review.rating}
                      </p>
                    </div>
                    <p className="text-base text-neutral mt-4">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientReviewWithImages;
