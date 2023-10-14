import { useGetServicesQuery } from "@/redux/api/features/services/servicesApi";
import Loader from "../Shared/Loader";
import ServiceCard from "./Card/ServiceCard";
import { iServices } from "@/interface/api";

const ServicesPriceLowToHigh = () => {
  const query: any = {};

  query["sortBy"] = "price";
  query["sortOrder"] = "desc";

  const { data, isLoading } = useGetServicesQuery(query);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.data?.data?.length > 0 &&
        data.data.data.map((service: iServices) => (
          <ServiceCard
            key={service.id}
            service={service}
            isLoading={isLoading}
          />
        ))}
    </div>
  );
};

export default ServicesPriceLowToHigh;
