import Title from "../UI/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const newsData = [
  {
    title: "Exciting New Travel Destinations",
    date: "October 18, 2023",
    content:
      "Discover new and exciting travel destinations that are perfect for your next adventure.",
  },
  {
    title: "Travel Tips for Exploring Remote Islands",
    date: "October 15, 2023",
    content:
      "Explore remote islands with confidence. Our travel experts share valuable tips for your island adventure.",
  },
  {
    title: "Culinary Adventures Around the World",
    date: "October 12, 2023",
    content:
      "Embark on a journey of flavors. Taste the world's best dishes with our culinary adventure guide.",
  },
  {
    title: "Hidden Gems in Europe",
    date: "October 10, 2023",
    content:
      "Uncover Europe's hidden gems. Experience the charm of lesser-known destinations.",
  },
  {
    title: "Hiking Trails for Nature Lovers",
    date: "October 8, 2023",
    content:
      "Get closer to nature with our top hiking trail recommendations for avid nature lovers.",
  },
  {
    title: "Adventure Sports Bucket List",
    date: "October 5, 2023",
    content:
      "For thrill-seekers, we've compiled the ultimate adventure sports bucket list.",
  },
  {
    title: "Safari Adventures in Africa",
    date: "October 18, 2023",
    content:
      "Embark on a wildlife adventure in Africa. Explore the majestic landscapes and diverse wildlife on a safari of a lifetime.",
  },
  {
    title: "Winter Wonderland Destinations",
    date: "October 15, 2023",
    content:
      "Escape to enchanting winter wonderlands. Find the perfect destinations to enjoy snowy landscapes and cozy getaways.",
  },
  {
    title: "Cruise Ship Travel Essentials",
    date: "October 12, 2023",
    content:
      "Prepare for your next cruise adventure with our list of must-have travel essentials. Cruise in comfort and style.",
  },
];

const LatestNews = () => {
  return (
    <section className="mt-20">
      <Title title="Latest News" top="Read Now" />
      <div className="w-10/12 mx-auto">
        <ul className="grid grid-cols-3 gap-4">
          {newsData.map((article, index) => (
            <li
              key={index}
              className={`mb-8 p-6 rounded-xl shadow-xl ${
                index % 2 === 0 ? "bg-white" : "bg-elegant"
              }`}
            >
              <FontAwesomeIcon
                fontSize={50}
                className="mb-5"
                color="#40E0D0"
                icon={faNewspaper}
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-sunset mb-2">{article.date}</p>
              <p className="text-neutral text-sm">{article.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LatestNews;