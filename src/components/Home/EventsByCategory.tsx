import React from "react";
import Title from "../UI/Title";
import Link from "next/link";

const EventCard = ({ image, title, category }: any) => {
  return (
    <Link href={"/services"}>
      <div className="w-64 h-64 mx-4 my-4 relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="bg-black bg-opacity-60 h-full flex flex-col justify-between p-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="text-sm text-white">{category}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const EventsByCategory = () => {
  const events = [
    {
      image:
        "https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
      title: "Summer Adventure",
      category: "Adventure Travel",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
      title: "Tropical Paradise",
      category: "Beach Getaways",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1469",
      title: "European Discover",
      category: "Cultural Exploration",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
      title: "Mountain Retreat",
      category: "Hiking & Trekking",
    },
    {
      image:
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
      title: "Safari Expedition",
      category: "Wildlife Tours",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
      title: "City Escapade",
      category: "Urban Exploration",
    },
  ];

  return (
    <div>
      <Title title="Events By Category" top="Make Your" />
      <div className="flex flex-wrap justify-center">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsByCategory;
