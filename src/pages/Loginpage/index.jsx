import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, CheckBox, Input } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Login to Ubook - Access Your Personalized Dashboard</title>
        <meta
          name="description"
          content="Securely log in to Ubook and start your personalized experience. Enter your email and password to access your account, or use Google for quick sign-in."
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col items-center gap-[51px] bg-[#ffffff] px-[71px] pb-[71px] md:px-5 md:pb-5 sm:gap-[25px]">
        {/* login section */}
        <div className="mx-auto flex w-full max-w-[1167px] flex-col items-center gap-[46px] px-3 pb-3">
          {/* header section */}
          <div className="flex w-[94%] flex-col items-center gap-6 md:w-full">
            {/* logo section */}
            <Img
              src="images/img_ficeria_1_1.png"
              alt="ficeria1one_one"
              className="h-[175px] w-[24%] rounded-[41px] object-cover"
            />

            {/* login form section */}
            <div className="flex flex-col items-center self-stretch">
              {/* login header section */}
              <div className="flex flex-col items-center gap-3">
                <a href="Login" target="_blank" rel="noreferrer">
                  {/* login link section */}
                  <Text size="lg" as="p" className="text-center capitalize">
                    Login
                  </Text>
                </a>

                {/* welcome text section */}
                <Text size="md" as="p" className="text-center capitalize !text-[#b7b7b7]">
                  Welcome To Ubook
                </Text>
              </div>

              {/* credentials input section */}
              <div className="relative mt-[-33px] flex flex-col self-stretch">
                {/* email input group section */}
                <div>
                  {/* email label input section */}
                  <div className="flex flex-col items-start gap-[13px] pb-[50px] md:pb-5">
                    {/* email label section */}
                    <Text as="p" className="text-center capitalize">
                      E-mail
                    </Text>

                    {/* email input section */}
                    <Input
                      shape="round"
                      type="email"
                      name="email"
                      placeholder={`Input  Your  Email Here`}
                      className="mb-3 w-[95%] sm:pr-5"
                    />
                  </div>

                  {/* password input group section */}
                  <div className="flex items-start justify-between gap-5 md:flex-col">
                    {/* password label input section */}
                    <div className="mb-[55px] flex w-[93%] flex-col items-start gap-3 md:w-full">
                      {/* password label section */}
                      <Text as="p" className="text-center capitalize">
                        Password
                      </Text>

                      {/* password input section */}
                      <Input
                        shape="round"
                        type="email"
                        name="password"
                        placeholder={`Input  Your  Email Here`}
                        className="self-stretch sm:px-5"
                      />
                    </div>

                    {/* show password icon section */}
                    <Img src="images/img_eye.svg" alt="eye_one" className="h-[16px] md:w-full" />
                  </div>
                </div>

                {/* options row section */}
                <div className="flex w-[84%] items-center justify-between gap-5 md:w-full sm:flex-col">
                  {/* remember me checkbox section */}
                  <CheckBox
                    name="rememberme"
                    label="Remember Me"
                    id="rememberme"
                    className="gap-[13px] self-start pr-[31px] text-center text-2xl capitalize text-[#7c96ab] sm:pr-5"
                  />

                  {/* forgot password link section */}
                  <Heading as="h1" className="self-end text-center capitalize">
                    Forget Password?
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            {/* login button section */}
            <Button shape="square" className="min-w-[995px] font-['Holtwood_One_SC'] capitalize sm:px-5">
              Login NOW
            </Button>
          </a>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            {/* social login section */}
            <div className="flex w-[36%] items-start justify-center gap-[31px] md:w-full sm:flex-col">
              {/* google login icon section */}
              <Img
                src="images/img_image_1.png"
                alt="imageone_one"
                className="mb-[5px] h-[44px] w-[19%] object-cover sm:w-full"
              />

              {/* google login text section */}
              <Heading size="md" as="h2" className="text-center capitalize">
                Login With Google
              </Heading>
            </div>
          </a>
        </div>

        {/* registration prompt section */}
        <Text size="s" as="p" className="text-center capitalize">
          <span className="text-[#7c96ab]">Not Register Yet,&nbsp;</span>
          <span className="font-bold text-[#7c96ab]">Create an account?</span>
        </Text>
      </div>
    </>
  );
}
