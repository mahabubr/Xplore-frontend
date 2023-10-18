const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Contact Information */}
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            123 Main Street
            <br />
            City, Country 12345
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@example.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-white">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Destinations</a>
            </li>
            <li>
              <a>Tours</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Newsletter Signup</h2>
          <p>
            Subscribe to our newsletter to receive the latest travel updates and
            promotions.
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            <button className="mt-2 p-2 bg-blue-500 hover:bg-blue-600 rounded text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/4 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-2xl">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Your Travel Agency. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
