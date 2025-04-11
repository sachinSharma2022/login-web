"use client";
import Link from "next/link";
import Input from "../ui/input";
import Button from "../ui/button";
import Icons from "../ui/icons";
import Select from "../ui/select";
import { useState } from "react";
import SocialLinks from "../social";
import NewAccountInfo from "../newAccountInfo";

const ForgotForm = ({ onBackClick }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const options = [
    { value: "india", label: "India" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
  ];
  return (
    <section className="flex items-center flex-col justify-center w-full relative z-10 px-5 lg:px-0 max-w-[730px]">
      <h1 className="text-2xl font-bold text-center mb-8 text-white">
        Enter your email or mobile number
      </h1>

      <form
        className="w-full flex justify-center flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <Select
            options={options}
            id="country"
            placeholder="Please select country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            aria-label="Select your country"
            containerStyle="lg:w-[350px]"
          />

          <Input
            id="email"
            type="text"
            placeholder="Email/Mobile Number"
            aria-label="Email or Mobile Number"
            containerStyle="lg:w-[350px]"
          />
        </div>

        <div className="w-full lg:w-[350px] mx-auto">
          <Button type="submit">Submit</Button>
        </div>
      </form>

      <div className="mt-4 text-center flex items-center">
        <button
          type="button"
          onClick={onBackClick}
          className="group border border-white h-10 text-white hover:bg-white hover:text-black transition duration-300 flex items-center justify-center px-4 mx-auto font-bold gap-2"
        >
          <span className="inline-block group-hover:animate-wiggleX">
            <Icons.CaretLeft />
          </span>
          Go Back
        </button>
      </div>

      <NewAccountInfo />
      <SocialLinks facebookLogin="/" googleLogin="/" />
    </section>
  );
};

export default ForgotForm;
