"use client";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import Button from "@/components/Button";
import React, { useState } from "react";

export default function Contact() {
  // Form States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Email Validation
  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Handle Form Submission
  const handleSendDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "") {
      setErrMessage("Your name is required!");
    } else if (email === "") {
      setErrMessage("Please give your Email");
    } else if (!emailValidation(email)) {
      setErrMessage("Give a Valid Email");
    } else if (message === "") {
      setErrMessage("Enter your Message");
    } else {
      setErrMessage("");
      setUsername("");
      setEmail("");
      setMessage("");
      setSuccessMessage(
        `Hello dear ${username}. We received your message successfully. Additional details will be sent to ${email}, and our responsible personnel will contact you shortly. Thank you for your time.`
      );
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('/bg-img.webp')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-green-500/80"></div>

      <div className="relative z-10 w-full max-w-6xl px-5 py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-5xl font-bold text-black mb-4">
            Contact Us
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dignissimos eaque doloremque, nulla mollitia facilis temporibus
            ullam voluptas nostrum consequatur? Fugiat vitae sint quo est eveniet
            perspiciatis eum asperiores ipsam.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-start gap-5">
              <div className="h-[70px] w-[70px] flex items-center justify-center rounded-full bg-white shadow-md">
                <FaHome className="text-2xl text-black" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black ">Address</h4>
                <p className="text-white">
                  4671 Sugar Camp Road,
                  <br /> Owatonna, Kayole,
                  <br /> 55060
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="h-[70px] w-[70px] flex items-center justify-center rounded-full bg-white shadow-md">
                <FaPhone className="text-2xl text-black" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black">Phone</h4>
                <p className="text-white">0701-729-032</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="h-[70px] w-[70px] flex items-center justify-center rounded-full bg-white shadow-md">
                <FaEnvelope className="text-2xl text-black" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black-500">Email</h4>
                <p className="text-white">contact@kapiah.co.ke</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full md:w-[45%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Send Message
            </h2>
            <form className="space-y-6" onSubmit={handleSendDetails}>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder=" "
                  className={`peer w-full border-b-2 outline-none bg-transparent py-2
      ${errMessage && errMessage.toLowerCase().includes('name') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-green-500'}`}
                />
                <span
                  className={`absolute left-0 transition-all
    ${username ? 'top-[-10px] text-sm' : 'top-2.5 text-base'}
    ${errMessage && errMessage.toLowerCase().includes('name')
      ? 'peer-focus:text-red-500 text-red-500'
      : 'peer-focus:text-green-500 peer-placeholder-shown:text-black text-black'}
  `}
                >
                  Full Name
                </span>
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder=" "
                  className={`peer w-full border-b-2 outline-none bg-transparent py-2
      ${errMessage && errMessage.toLowerCase().includes('email') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-green-500'}`}
                />
                <span
                  className={`absolute left-0 transition-all
    ${email ? 'top-[-10px] text-sm' : 'top-2.5 text-base'}
    ${errMessage && errMessage.toLowerCase().includes('email')
      ? 'peer-focus:text-red-500 text-red-500'
      : 'peer-focus:text-green-500 peer-placeholder-shown:text-black text-black'}
  `}
                >
                  Email
                </span>
              </div>

              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder=" "
                  className={`peer w-full border-b-2 outline-none bg-transparent py-2 resize-none
      ${errMessage && errMessage.toLowerCase().includes('message') ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-green-500'}`}
                />
                <span
                  className={`absolute left-0 transition-all
    ${message ? 'top-[-10px] text-sm' : 'top-2.5 text-base'}
    ${errMessage && errMessage.toLowerCase().includes('message')
      ? 'peer-focus:text-red-500 text-red-500'
      : 'peer-focus:text-green-500 peer-placeholder-shown:text-black text-black'}
  `}
                >
                  Type your Message...
                </span>
              </div>

              {/* Error & Success Messages */}
              {errMessage && (
                <p className="text-red-500 text-sm text-center">{errMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm text-center">
                  {successMessage}
                </p>
              )}

              <Button
                type="submit"
                title="Send Mail"
                variant="btn_green w-full transition hover:bg-white hover:text-green-500"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
