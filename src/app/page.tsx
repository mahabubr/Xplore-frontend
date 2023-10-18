import AvailableServices from "@/components/Home/AvaiableService";
import Banner from "@/components/Home/Banner";
import ClientReview from "@/components/Home/ClientReview";
import EventsByCategory from "@/components/Home/EventsByCategory";
import HomeViews from "@/components/Home/HomeViews";
import LatestNews from "@/components/Home/LatestNews";
import Stories from "@/components/Home/Stories";
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
      <Stories />
      <LatestNews />
      <HomeViews />
      <Footer />
    </div>
  );
};

export default Home;
