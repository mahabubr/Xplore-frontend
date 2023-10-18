import AvailableServices from "@/components/Home/AvaiableService";
import Banner from "@/components/Home/Banner";
import ClientReview from "@/components/Home/ClientReview";
import EventsByCategory from "@/components/Home/EventsByCategory";
import Survey from "@/components/Home/Survey";
import UpcomingServices from "@/components/Home/UpcommingService";
import Navbar from "@/components/Shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AvailableServices />
      <UpcomingServices />
      <EventsByCategory />
      <Survey />
      <ClientReview />
    </div>
  );
};

export default Home;
