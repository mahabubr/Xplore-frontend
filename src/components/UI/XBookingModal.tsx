import React, { useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import Form from "../Froms/Form";
import FormInput from "../Froms/FormInput";

const XBookingModal = ({ setIsModalOpen, isModalOpen, calenderData }: any) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: any) => {
    data.date_from = calenderData?.startDate;
    data.date_to = calenderData?.endDate;

    try {
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        title="Booking Processing"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="80%"
      >
        <Form submitHandler={onSubmit}>
          <Row className="mt-5 " gutter={30}>
            <Col span={12}>
              <FormInput
                name="email"
                placeholder="Your Email"
                label="Your Email"
              />
            </Col>
            <Col span={12}>
              <FormInput
                name="phone"
                placeholder="Phone Number"
                label="Phone Number"
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="date_from"
                placeholder="Date From"
                label="Date From"
                value={calenderData?.startDate}
                disabled
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="date_to"
                placeholder="Date To"
                label="Date To"
                value={calenderData?.endDate}
                disabled
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="how_day"
                placeholder="What Many Days"
                label="What Many Days"
                type="number"
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="adult"
                placeholder="Adult"
                label="Adult"
                type="number"
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="child"
                placeholder="Child"
                label="child"
                type="number"
              />
            </Col>
            <Col span={12} className="mt-6">
              <FormInput
                name="infant"
                placeholder="Infant"
                label="Infant"
                type="number"
              />
            </Col>
          </Row>
          <div className="mt-6 flex justify-center">
            <Button type="dashed" htmlType="submit" className="w-6/12 mx-auto">
              Confirm Booking
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default XBookingModal;
