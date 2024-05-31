"use client"
import React, { useState } from "react";
import { BsFillRocketFill } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { FaGoogle, FaGithub } from "react-icons/fa";
import VerifyAccount from "@/components/verify-account";

export default function Auth() {
  const [isLogin, setIsLogin]: any = useState(false);

  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-16 px-8 py-8 lg:flex-row lg:items-start lg:gap-5 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-10 text-center lg:flex-row lg:items-center lg:gap-12 lg:text-left">
        <div className="w-full lg:w-1/2">
          <div className="my-5 grid grid-cols-12 gap-3">
            <button className="btn lg:col-span-5 col-span-12 lg:w-full">
              <FaGoogle className="text-xl" /> 
              {isLogin ? "Login with Google" : "Sign up with Google"}
            </button>
            <div className="divider divider-base col-span-12 lg:col-span-2 w-full mx-auto">
              OR
            </div>
            <button className="btn lg:col-span-5 col-span-12 lg:w-full">
              <FaGithub className="text-2xl" />
              {isLogin ? "Login with GitHub" : "Sign up with GitHub"}
            </button>
          </div>
          <form>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="name@example.com"
                className="input input-bordered w-full"
              />
              <div className="label">
                <span className="label-text-alt">Invalid email</span>
              </div>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="••••••••••"
                className="input input-bordered w-full"
              />
              <div className="label">
                <span className="label-text-alt">Invalid password</span>
              </div>
            </label>
            <div className="flex items-center justify-between">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-4 w-4"
                  />
                  <span className="label-text ml-2">Remember me</span>
                </label>
              </div>
              <span className="link-hover link text-sm">
                Forgot your password?
              </span>
            </div>
            <button className={isLogin ? "btn btn-primary mt-5 w-full" : "btn mt-5 w-full"}>{ isLogin ? "Login" :  "Sign Up"}</button>
          </form>
          <div className="mt-5">
            {isLogin ? "You don't have an account?" : "Already have an account?"}
            <span className="link-hover link ml-2" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register here" : "Login here"}
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <a
              href="https://www.producthunt.com/products/transferchain/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-transferchain"
              target="_blank"
              className="flex justify-center lg:justify-start"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=526056&theme=light"
                alt="TransferChain - Blockchain&#0045;based&#0032;Secure&#0032;&#0038;&#0032;Private&#0032;file&#0032;sharing&#0032;for&#0032;everyone | Product Hunt"
                height="54"
              />
            </a>
            <h1 className="mt-5 items-center gap-3 text-3xl xl:text-5xl font-extrabold tracking-tight md:-mb-4 lg:items-start lg:text-4xl">
              {isLogin ? "Login your account" : "Create your account"}
              <span className="fire-animation w-full">with design portfolios.</span>
            </h1>
          </div>
          <p className="my-10 text-lg leading-relaxed opacity-80">
            The NextJS boilerplate with all you need to build your SaaS, AI
            tool, or any other web app and make your first $ online fast.
          </p>
          <div>
            <p className="mt-2 flex items-center justify-start gap-1 text-sm md:text-sm">
              <span className="flex text-green-500">
                <IoGiftOutline className="mr-1 text-lg lg:mr-2" />
                $100 off
              </span>
              <span> for the first 3350 customers (8 left)</span>
            </p>
          </div>
          <div className="align-center flex flex-col justify-start gap-3 md:flex-row mt-2">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-primary"
                  checked={true}
                />
              </div>
              <div className="text-base text-base-content/80 text-start">
                <span className="text-base-content">
                  <span className="font-semibold">3353 </span>
                  maker ship faster
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <VerifyAccount /> */}
      </div>
    </section>
  );
}
