"use client";
import React, { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import FormField from "../shared/FormField";
import Link from "next/link";
import ContactsDisplay from "../shared/ContactsDisplay";
import toast from "react-hot-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const sendMail = async () => {
    setLoading(true);
    console.log(formData);
    const res = await fetch("/api/send-mail", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status !== 200) {
      toast.error(data.message);
      setLoading(false);
      return;
    }
    toast.success(data.message);
    setLoading(false);
  };
  return (
    <section className="py-4 flex flex-col  items-center border-t border-violet-300 min-h-28 w-full">
      <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row px-4 md:px-8 justify-between items-center">
        <div className="h-[100%] flex flex-col items-center lg:items-start ">
          <SectionHeading title="Vineet Raj" />
          <ContactsDisplay />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <FormField
            title="Email"
            handleTextChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            label="Email"
            type="email"
          />
          <FormField
            title="Message"
            handleTextChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            label="Message"
            type="textArea"
          />
          <button
            className="bg-violet-500 px-8 py-2 w-[180px] rounded-md  font-bold text-2xl"
            onClick={sendMail}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
