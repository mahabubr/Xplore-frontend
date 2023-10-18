import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mt-10 mb-6">
          Contact Us
        </h1>

        {/* Contact Information */}
        <section className="bg-white p-8 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            Feel free to reach out to us if you have any questions or inquiries.
          </p>
          <address className="mt-4">
            Travel Agency Name
            <br />
            Address: 123 Main St, City, Country
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@travelagency.com
            <br />
          </address>
        </section>

        {/* Contact Form */}
        <section className="bg-white p-8 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Location Map */}
        <section className="bg-white p-8 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
          {/* Embed a map or add location information here */}
        </section>

        {/* Frequently Asked Questions */}
        <section className="bg-white p-8 shadow-md rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <ul>
            <li>
              <strong>Q: How do I book a trip?</strong>
              <p>
                A: You can book a trip by visiting our website and using our
                online booking system.
              </p>
            </li>
            <li>
              <strong>Q: What payment methods do you accept?</strong>
              <p>
                A: We accept credit cards, PayPal, and more. Check our payment
                options for details.
              </p>
            </li>
            {/* Add more FAQs as needed */}
          </ul>
        </section>

        {/* Social Media Links */}
        <section className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <p>
            Follow us on social media to stay updated with our latest travel
            deals and news.
          </p>
          {/* Add your social media links/icons here */}
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
