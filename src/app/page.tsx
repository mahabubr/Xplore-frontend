import AvailableServices from "@/components/Home/AvaiableService";
import Banner from "@/components/Home/Banner";
import ClientReview from "@/components/Home/ClientReview";
import EventsByCategory from "@/components/Home/EventsByCategory";
import LatestNews from "@/components/Home/LatestNews";
import Survey from "@/components/Home/Survey";
import UpcomingServices from "@/components/Home/UpcommingService";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AvailableServices />
      <EventsByCategory />
      <UpcomingServices />
      <Survey />
      <ClientReview />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;
