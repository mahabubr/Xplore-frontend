import React from "react";
import { CheckCircle, BarChart, Users, Heart, Star } from "react-feather";
import Title from "../UI/Title";

const Organized = () => {
  return (
    <div className="w-10/12 mx-auto my-10 mb-20">
      <Title title="Organized" top="Explore the" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <CheckCircle className="w-8 h-8 text-green-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Feature 1: Easy to Use</h3>
            <p className="text-gray-700">
              Our user-friendly interface makes it simple for anyone to get
              started. No technical expertise required.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <BarChart className="w-8 h-8 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Feature 2: Data Analytics</h3>
            <p className="text-gray-700">
              Dive deep into your data with powerful analytics tools. Gain
              valuable insights and make data-driven decisions.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Users className="w-8 h-8 text-indigo-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Feature 3: Collaboration</h3>
            <p className="text-gray-700">
              Collaborate seamlessly with your team, share your work, and
              improve productivity together.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <CheckCircle className="w-8 h-8 text-pink-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Feature 4: Notifications</h3>
            <p className="text-gray-700">
              Stay informed with real-time notifications and updates.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Heart className="w-8 h-8 text-red-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Feature 5: Love and Care</h3>
            <p className="text-gray-700">
              We value our users and provide exceptional support and care.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Star className="w-8 h-8 text-yellow-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">
              Feature 6: Ratings & Reviews
            </h3>
            <p className="text-gray-700">
              Share your feedback and read reviews from our satisfied users.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <CheckCircle className="w-8 h-8 text-purple-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">
              Feature 7: Task Completion
            </h3>
            <p className="text-gray-700">
              Keep track of your tasks and mark them as completed.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <BarChart className="w-8 h-8 text-teal-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">
              Feature 8: Data Visualization
            </h3>
            <p className="text-gray-700">
              Visualize your data with beautiful and informative charts.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Users className="w-8 h-8 text-cyan-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Feature 9: User Community</h3>
            <p className="text-gray-700">
              Join our active user community for discussions and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organized;
