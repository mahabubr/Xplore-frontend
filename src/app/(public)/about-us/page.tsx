/* eslint-disable @next/next/no-img-element */
import Organized from "@/components/Home/Organized";
import Title from "@/components/UI/Title";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto">
      <section className="py-10">
        <div className="container mx-auto">
          <Title title="About Us" top="Learn More" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-justify leading-loose">
                Your Travel Agency is your gateway to unforgettable adventures.
                Welcome to our premier travel agency, where adventure meets
                luxury, and every journey is a story waiting to be told. At our
                agency, we&apos;re passionate about crafting unforgettable
                experiences for travelers from around the world. Whether
                you&apos;re a wanderlust seeker, a culture enthusiast, or simply
                in search of relaxation, we&apos;ve got you covered. Our team of
                experienced travel experts is dedicated to curating exceptional
                trips that cater to your unique desires. From pristine beaches
                to towering mountain peaks, bustling cityscapes to serene
                countryside escapes, we offer a diverse range of destinations
                and travel styles. With our commitment to quality and attention
                to detail, your dream vacation becomes a reality. Trust us to
                handle all the logistics, leaving you free to savor every moment
                of your journey.
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-justify leading-loose">
                Your travel aspirations are as unique as you are, and
                that&apos;s why we take a personalized approach to planning your
                perfect getaway. We listen to your preferences and desires,
                ensuring that your itinerary is tailored to your individual
                tastes. Our relationships with top-notch hotels, airlines, and
                local experts mean that you&apos;ll enjoy exclusive perks and
                insider access throughout your trip. Whether you&apos;re
                embarking on a solo adventure, a romantic escape, a family
                vacation, or a group excursion, we&apos;ve got the expertise to
                make it a seamless and memorable experience. Join us as we turn
                your travel dreams into reality. At our travel agency, we
                don&apos;t just arrange vacations; we create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <Title title="Out Team" top="About" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-secondary p-8 rounded-xl">
            <div className="p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 1"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">Travel Specialist</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 2"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Adventure Expert</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?auto=format&fit=crop&q=80&w=1588&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">David Johnson</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">Stacey Alvarez</h3>
              <p className="text-gray-600">Account Executive</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">Jodie Shepherd</h3>
              <p className="text-gray-600">President of Sales</p>
            </div>
            <div className=" p-6 rounded shadow-md bg-elegant">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold">Lillian Mcintosh</h3>
              <p className="text-gray-600">Medical Assistant</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-10">
        <div className="container mx-auto flex justify-start flex-col">
          <Title
            title="Our Mission"
            top="At Your Travel Agency, our mission is to inspire and facilitate
            travel experiences that create lifelong memories. We believe in the
            transformative power of travel and are committed to providing
            exceptional service to our clients."
          />
        </div>
        <div>
          1
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
