"use client";

import React from "react";
import Lottie from "lottie-react";
import animate from "../../../assets/animate/travel2.json";
import logo from "../../../assets/brand.png";
import Image from "next/image";
import Link from "next/link";
import Step from "@/components/UI/Step";
import FormInput from "@/components/Froms/FormInput";
import { Button } from "antd";

const SignUp = () => {
  const steps = [
    {
      title: "Signup Info",
      content: (
        <>
          <div className="space-y-3 mt-6">
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
        </>
      ),
    },
    {
      title: "Personal Info",
      content: (
        <>
          <div className="space-y-3 mt-6">
            <FormInput
              name="name"
              type="text"
              label="Name"
              placeholder="John De"
            />
            <FormInput
              name="phone"
              type="text"
              label="Phone"
              placeholder="+1 2522 1455 6688"
            />
            <FormInput
              name="address"
              type="text"
              label="Address"
              placeholder="California, USA"
            />
          </div>
        </>
      ),
    },
  ];

  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
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
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <h2 className="text-xl text mb-8">Register Your Account</h2>
          <Step
            steps={steps}
            submitHandler={(value) => {
              onSubmit(value);
            }}
          />
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
