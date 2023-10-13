"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import animate from "../../../assets/animate/travel2.json";
import logo from "../../../assets/brand.png";
import Image from "next/image";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import { Button, message } from "antd";
import Link from "next/link";
import { useCreateUserMutation } from "@/redux/api/features/user/userApi";
import ApiError from "@/components/Errors/ApiError";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [createUser] = useCreateUserMutation();
  const [error, setError] = useState<any>({});

  const router = useRouter();

  const onSubmit = async (data: any) => {
    data["role"] = "tourist";
    try {
      const res = await createUser(data).unwrap();
      if (res.success) {
        message.success(res.message);
        setError({});
        router.push("/login");
      }
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-8 h-screen">
      <div className="col-span-1 grid place-items-center">
        <div className="">
          <Image src={logo} alt="brand" height={80} width={200} />
          <p className="text-center text-neutral">More Explore</p>
        </div>
        <Lottie animationData={animate} loop={true} />
      </div>
      <div className="relative w-full bg-elegant col-span-2 custom-clip-path">
        <div className="relative z-10 h-full  flex flex-col justify-center items-center">
          <h2 className="text-xl text mb-8 text-primary">
            Register Your Account
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
            </div>
            <ApiError error={error} />
            <div className="mt-5 ">
              <Button type="primary" className="w-full" htmlType="submit">
                Sign Up
              </Button>
            </div>
          </Form>
          <span className="mt-6 text-xs text-neutral">
            Don&lsquo;t have and account?{" "}
            <Link className="text-sunset" href="/login">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
