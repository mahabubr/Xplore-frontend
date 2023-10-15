"use client";

import CartCard from "@/components/Cart/CartCard";
import Loader from "@/components/Shared/Loader";
import { iServices } from "@/interface/api";
import { useGetCartQuery } from "@/redux/api/features/cart/cartApi";
import { Col, Row } from "antd";

const Cart = () => {
  const { data, isLoading } = useGetCartQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const cartData = data.data;

  return (
    <div className="w-10/12 mx-auto my-20">
      <Row gutter={50}>
        <Col span={16}>
          <div className="space-y-7">
            {cartData.length > 0 &&
              cartData?.map((service: any) => (
                <div
                  key={service.id}
                  style={{ borderBottom: "1px solid gray" }}
                >
                  <CartCard service={service.service as iServices} />
                </div>
              ))}
          </div>
        </Col>
        <Col span={8}>Book</Col>
      </Row>
    </div>
  );
};

export default Cart;
