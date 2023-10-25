import { iServices } from "@/interface/api";
import { SafetyCertificateFilled } from "@ant-design/icons";
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
  const { title, price, location, image, id, availabilityType } = service;

  return (
    <Link href={`/services/${id}`}>
      <Card
        bordered={false}
        hoverable={false}
        loading={isLoading}
        className=""
        cover={
          <Image
            src={image}
            alt={title}
            height={150}
            width={200}
            className="object-cover rounded-3xl p-3"
          />
        }
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
