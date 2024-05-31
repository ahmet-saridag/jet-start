"use client"
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function VerifyAccount() {
  return (
    <div className="w-full flex flex-col justify-center">
    <ul className="steps w-full lg:w-96 mx-auto">
      <li data-content="✓" className="step step-primary">Register</li>
      <li data-content="?" className="step step-primary">Verify</li>
    </ul>
    <div className="flex flex-col mt-12">
       <h2 className="text-3xl">Verify your account</h2>
       <p className="w-4/5 mt-5 text-sm leading-relaxed opacity-80">We emailed you a six-digit code to name@company.com. Enter the code below to confirm your email adress.</p>
       <label className="form-control w-full mt-3">
        <div className="label">
          <span className="label-text">Code</span>
        </div>
        <input
          type="text"
          placeholder="123456"
          className="input input-bordered w-full"
        />
        <div className="label">
          <span className="label-text-alt">Invalid code</span>
        </div>
      </label>
    </div>
    <div role="alert" className="alert alert-primary mt-2">
      <IoIosInformationCircleOutline className="text-2xl" />  <span className="text-xs lg:text-sm">Make sure to keep this window open while check your inbox.</span>
    </div>
    <button className="btn btn-primary mt-5 lg:w-full">
         Verify
     </button>
  </div>
  )
}
