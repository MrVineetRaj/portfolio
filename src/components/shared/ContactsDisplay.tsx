import { contacts } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const ContactsDisplay = () => {
  return (
    <div className="flex gap-2 my-2">
      <Image
        src="/icons/mail.svg"
        width={32}
        height={32}
        alt="mail"
        className="hover:shadow-blue-500 shadow-lg transition-all duration-300 cursor-pointer border-2 rounded-lg border-violet-300"
        onClick={() => {
          //copy to clipboard
          navigator.clipboard.writeText(contacts.email);
          toast.success("Email copied to clipboard");
        }}
      />
      <a href={contacts.github} target="_blank" rel="github">
        <Image
          src="/icons/github.svg"
          width={32}
          height={32}
          alt="github"
          className="hover:shadow-blue-500 shadow-lg transition-all duration-300 cursor-pointer  border-2 rounded-lg border-violet-300 bg-white"
        />
      </a>
      <a href={contacts.linkedin} target="_blank" rel="linkedin">
        <Image
          src="/icons/linkedin.svg"
          width={32}
          height={32}
          alt="linkedin"
          className="hover:shadow-blue-500 shadow-lg transition-all duration-300 cursor-pointer border-2 rounded-lg border-violet-300 bg-white"
        />
      </a>
      <a href={contacts.instagram} target="_blank" rel="instagram">
        <Image
          src="/icons/instagram.svg"
          width={32}
          height={32}
          alt="instagram"
          className="hover:shadow-blue-500 shadow-lg transition-all duration-300 cursor-pointer border-2 rounded-lg border-violet-300 bg-white"
        />
      </a>
    </div>
  );
};

export default ContactsDisplay;
