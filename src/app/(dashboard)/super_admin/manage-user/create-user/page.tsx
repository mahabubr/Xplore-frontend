"use client";

import ApiError from "@/components/Errors/ApiError";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import { useCreateUserMutation } from "@/redux/api/features/user/userApi";
import { Button, Select, message } from "antd";
import { useState } from "react";

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [error, setError] = useState<any>({});
  const [role, setRole] = useState("");

  const onSubmit = async (data: any) => {
    data["role"] = role;
    try {
      const res = await createUser(data).unwrap();
      if (res.success) {
        message.success(res.message);
        setError({});
        setRole("");
      }
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div className="w-6/12 mx-auto">
      <h2 className="text-xl text mb-8 text-primary text-center">
        Create User
      </h2>
      <Form submitHandler={onSubmit}>
        <div className="space-y-3">
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="example@email.com"
          />
          <FormInput
            name="password"
            label="Password"
            placeholder="******"
            type="password"
          />
          <Select
            className="w-full h-10"
            value={role ? role : "Add Role"}
            onChange={(value) => setRole(value)}
            options={[
              { value: "super_admin", label: "Super Admin" },
              { value: "admin", label: "Admin" },
              { value: "tourist", label: "Tourist" },
            ]}
          />
        </div>
        <ApiError error={error} />
        <div className="mt-5 flex justify-end">
          <Button type="primary" className="" htmlType="submit">
            Create Now
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateUser;
