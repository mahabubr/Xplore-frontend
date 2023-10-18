import { iServices } from "@/interface/api";
import {
  CalendarFilled,
  UserAddOutlined,
  SafetyCertificateFilled,
} from "@ant-design/icons";
import { Card, Tag } from "antd";
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
  const {
    title,
    price,
    location,
    image,
    description,
    day,
    availability,
    id,
    availabilityType,
    category
  } = service;

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
        {availabilityType === "AVAILABLE" ? (
          <Tag
            className="mb-5"
            icon={<SafetyCertificateFilled />}
            color="#FF6600"
          >
            {availabilityType}
          </Tag>
        ) : (
          <Tag
            className="mb-5"
            icon={<SafetyCertificateFilled />}
            color="#87CEEB"
          >
            {availabilityType}
          </Tag>
        )}
        <Meta title={title} description={description.slice(0, 50) + " ..."} />
        <div className="mt-5">
          <p className="text-lg font-semibold text-sunset">${price}</p>
          <p
            className="text-sm my-3 font-semibold text-nature p-2 inline-block rounded"
            style={{ border: "1px solid #228B22" }}
          >
            {category}
          </p>
          <p className="text-neutral">{location}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
