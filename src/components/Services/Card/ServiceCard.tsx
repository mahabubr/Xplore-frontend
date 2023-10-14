import { iServices } from "@/interface/api";
import { CalendarFilled, UserAddOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const ServiceCard = ({
  service,
  isLoading,
}: {
  service: iServices;
  isLoading: boolean;
}) => {
  const { title, price, location, image, description, day, availability, id } =
    service;

  return (
    <Link href={`/services/${id}`}>
      <Card
        loading={isLoading}
        hoverable
        cover={<Image src={image} alt={title} height={200} width={200} />}
        actions={[
          <div key={1} className="flex  justify-center items-center gap-5">
            <p>{day} days</p>
            <CalendarFilled key="calendar" />
          </div>,
          <div key={2} className="flex  justify-center items-center gap-5">
            <UserAddOutlined key="user" />
            <p>{availability} +</p>
          </div>,
        ]}
      >
        <Meta title={title} description={description.slice(0, 50) + " ..."} />
        <div className="mt-5">
          <p className="text-lg font-semibold text-sunset">${price}</p>
          <p className="text-neutral">{location}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
