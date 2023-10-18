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

const BannerCard = ({
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
    id,
    availabilityType,
  } = service;

  return (
    <Link href={`/services/${id}`}>
      <Card
        loading={isLoading}
        cover={<Image src={image} alt={title} height={150} width={200} />}
        style={{ backgroundColor: "#f9f9f9" }}
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
        <Meta title={title} />
        <div className="mt-2">
          <p className="text-lg font-semibold text-nature">${price}</p>
          <p className="text-neutral">{location}</p>
        </div>
      </Card>
    </Link>
  );
};

export default BannerCard;
