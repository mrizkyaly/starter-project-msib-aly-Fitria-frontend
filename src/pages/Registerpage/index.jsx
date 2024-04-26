import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, CheckBox, Input } from "../../components";

export default function FrameThirtyNinePage() {
  return (
    <>
      <Helmet>
        <title>Register for Ubook - Create Your New Account Today</title>
        <meta
          name="description"
          content="Join Ubook today and discover a world of learning. Register with your username and email, or quickly sign up with Google. Start your journey now!"
        />
      </Helmet>

      {/* registration container section */}
      <div className="w-full">
        <div className="flex flex-col items-center bg-[#ffffff] p-[38px] sm:p-5">
          {/* header section */}
          <div className="flex flex-col items-center gap-3">
            <a href="Register" target="_blank" rel="noreferrer">
              <Text size="lg" as="p" className="text-center capitalize">
                Register
              </Text>
            </a>
            <Text size="md" as="p" className="text-center capitalize !text-[#b7b7b7]">
              Welcome To Ubook
            </Text>
          </div>
          <div className="mr-[88px] mt-7 flex w-[85%] flex-col self-end md:mr-0 md:w-full">
            {/* username input section */}
            <div className="flex w-[92%] flex-col items-start gap-3 md:w-full">
              <Text as="p" className="text-center capitalize">
                Username
              </Text>
              <Input
                shape="round"
                type="text"
                name="userName"
                placeholder={`Input  Your  Username Here`}
                className="self-stretch sm:pr-5"
              />
            </div>
            <div className="mt-6 flex flex-col gap-[62px] sm:gap-[31px]">
              {/* email input section */}
              <div className="flex w-[93%] flex-col items-start gap-[13px] md:w-full">
                <Text as="p" className="text-center capitalize">
                  E-mail
                </Text>
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder={`Input  Your  Email Here`}
                  className="self-stretch sm:pr-5"
                />
              </div>

              {/* password input section */}
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="mb-[55px] flex w-[93%] flex-col items-start gap-3 md:w-full">
                  <Text as="p" className="text-center capitalize">
                    Password
                  </Text>
                  <Input
                    shape="round"
                    type="password"
                    name="password"
                    placeholder={`Input  Your  Password Here`}
                    className="self-stretch sm:px-5"
                  />
                </div>
                <Img src="images/img_eye.svg" alt="eye_one" className="h-[16px] md:w-full" />
              </div>
            </div>

            {/* remember me section */}
            <div className="mx-auto flex w-full max-w-[900px] items-center justify-between gap-5 md:p-5 sm:flex-col">
              <CheckBox
                name="rememberme"
                label="Remember Me"
                id="rememberme"
                className="gap-[13px] self-start pr-[31px] text-center text-2xl capitalize text-[#7c96ab] sm:pr-5"
              />
              <Heading as="h1" className="self-end text-center capitalize">
                Forget Password?
              </Heading>
            </div>
          </div>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <Button shape="square" className="mt-14 min-w-[995px] font-['Holtwood_One_SC'] capitalize sm:px-5">
              Register NOW
            </Button>
          </a>

          {/* social register section */}
          <div className="mt-[18px] flex w-[31%] items-start justify-center gap-[9px] md:w-full sm:flex-col">
            <Img
              src="images/img_image_1.png"
              alt="imageone_one"
              className="mb-[5px] h-[44px] w-[17%] object-cover sm:w-full"
            />
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Heading size="md" as="h2" className="text-center capitalize">
                Register With Google
              </Heading>
            </a>
          </div>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            {/* login prompt section */}
            <Text size="s" as="p" className="mb-[5px] mt-14 text-center capitalize">
              <span className="text-[#7c96ab]">Already Have an account</span>
              <span className="text-[#7c96ab]">,&nbsp;</span>
              <span className="font-bold text-[#7c96ab]">Login Now</span>
            </Text>
          </a>
        </div>
      </div>
    </>
  );
}
