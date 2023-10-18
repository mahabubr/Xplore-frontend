import Head from "next/head";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100">
      {/* About Us Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-loose">
                Your Travel Agency is your gateway to unforgettable adventures.
                We are dedicated to making your travel dreams a reality.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-loose">
                With a team of experienced travel experts, we provide
                personalized travel experiences that cater to your unique
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="/team-member1.jpg"
                alt="Team Member 1"
                className="w-full h-auto rounded mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">Travel Specialist</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="/team-member2.jpg"
                alt="Team Member 2"
                className="w-full h-auto rounded mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Adventure Expert</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <img
                src="/team-member3.jpg"
                alt="Team Member 3"
                className="w-full h-auto rounded mb-4"
              />
              <h3 className="text-xl font-bold">David Johnson</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-600 leading-loose">
            At Your Travel Agency, our mission is to inspire and facilitate
            travel experiences that create lifelong memories. We believe in the
            transformative power of travel and are committed to providing
            exceptional service to our clients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
