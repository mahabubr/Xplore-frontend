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
    rating: 4,
    review:
      "I had a great experience with this product. It's exactly what I was looking for.",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    rating: 5,
    review:
      "The quality of this product exceeded my expectations. I highly recommend it.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    rating: 3,
    review:
      "I found the product to be satisfactory, but there is room for improvement.",
  },
  {
    id: 4,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    rating: 2,
    review:
      "I was disappointed with the product. It didn't meet my needs as expected.",
  },
  {
    id: 5,
    name: "Ella Davis",
    email: "ella.davis@example.com",
    rating: 4,
    review:
      "This product is a good value for the price. It's functional and reliable.",
  },
  {
    id: 6,
    name: "David Brown",
    email: "david.brown@example.com",
    rating: 3,
    review:
      "I have mixed feelings about the product. It has its pros and cons.",
  },
  {
    id: 7,
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    rating: 4,
    review:
      "The customer service was excellent, and the product arrived on time.",
  },
  {
    id: 8,
    name: "Sam Adams",
    email: "sam.adams@example.com",
    rating: 5,
    review:
      "I'm extremely satisfied with this product. It's a game-changer for me.",
  },
  {
    id: 9,
    name: "Olivia Moore",
    email: "olivia.moore@example.com",
    rating: 4,
    review:
      "This product has improved my daily routine. It's worth the investment.",
  },
  {
    id: 10,
    name: "Michael Taylor",
    email: "michael.taylor@example.com",
    rating: 3,
    review:
      "I expected more from this product. It's decent, but not exceptional.",
  },
  {
    id: 11,
    name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
    rating: 2,
    review:
      "I encountered issues with the product and had a disappointing experience.",
  },
  {
    id: 12,
    name: "Matthew Wilson",
    email: "matthew.wilson@example.com",
    rating: 4,
    review:
      "The product met my requirements, and I'm satisfied with its performance.",
  },
  {
    id: 13,
    name: "Ava Davis",
    email: "ava.davis@example.com",
    rating: 5,
    review:
      "I love this product. It's a must-have for anyone in a similar situation.",
  },
  {
    id: 14,
    name: "Liam Brown",
    email: "liam.brown@example.com",
    rating: 4,
    review:
      "I would recommend this product to others. It's reliable and user-friendly.",
  },
  {
    id: 15,
    name: "Mia Johnson",
    email: "mia.johnson@example.com",
    rating: 3,
    review:
      "The product serves its purpose, but it could benefit from some improvements.",
  },
  {
    id: 16,
    name: "Noah Clark",
    email: "noah.clark@example.com",
    rating: 4,
    review:
      "I've had a positive experience with this product. It's been quite useful for me.",
  },
  {
    id: 17,
    name: "Isabella Wilson",
    email: "isabella.wilson@example.com",
    rating: 5,
    review:
      "This product is outstanding. I'm thrilled with its performance and quality.",
  },
  {
    id: 18,
    name: "James Adams",
    email: "james.adams@example.com",
    rating: 4,
    review:
      "I'm satisfied with the product, and it's a valuable addition to my daily routine.",
  },
  {
    id: 19,
    name: "Charlotte Moore",
    email: "charlotte.moore@example.com",
    rating: 3,
    review:
      "The product works as expected, but there are minor issues that could be addressed.",
  },
  {
    id: 20,
    name: "Benjamin Taylor",
    email: "benjamin.taylor@example.com",
    rating: 2,
    review: "I regret purchasing this product. It didn't meet my expectations.",
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
                      }
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
