"use client";

import { Avatar, Button, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";

const AdminProfile = () => {
  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row>
        <Col span={8} className="flex flex-col  items-center">
          <Avatar size={100} icon={<UserOutlined />} />
          <div className="mt-10">
            <p className="text-passion font-bold cursor-pointer">Delete Account</p>
          </div>
        </Col>
        <Col span={16}>
          <Form submitHandler={onSubmit}>
            <Row gutter={20}>
              <Col span={12} className="mt-5">
                <FormInput
                  name="name"
                  label="Name"
                  placeholder="Enter Your Name"
                />
              </Col>
              <Col span={12} className="mt-5">
                <FormInput
                  name="email"
                  label="Email"
                  value={"Res.@am.com"}
                  disabled={true}
                />
              </Col>
              <Col span={12} className="mt-5">
                <FormInput
                  name="password"
                  label="Password"
                  value={"*******"}
                  disabled={true}
                />
              </Col>
              <Col span={12} className="mt-5">
                <FormInput
                  name="phone"
                  label="Phone"
                  placeholder="Enter Your Phone"
                />
              </Col>
              <Col span={12} className="mt-5">
                <FormInput
                  name="address"
                  label="Address"
                  placeholder="Address"
                />
              </Col>
            </Row>
            <div className="mt-10 flex justify-end">
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AdminProfile;
