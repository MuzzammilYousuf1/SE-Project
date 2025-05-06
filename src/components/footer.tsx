import React from "react";
import ecofyLogo from "../assets/ecofyLogo.jpg";

interface FooterProps {
  title: string;
  text: string;
  description?: string;
}

const Footer: React.FC<FooterProps> = ({ title, text, description }) => {

  return (
    <div className="relative z-50 bg-[#191F33]">
      <div className="flex flex-col items-center px-4 py-12">
        <div className="flex items-center space-x-4">
          <img src={ecofyLogo} alt="BWT-Logo" className="w-12 bg-transparent" />
          <h1 className="text-3xl font-semibold tracking-wider text-white">
            {title}
          </h1>
        </div>
        <p className="max-w-xl text-center text-lg font-medium text-white mt-4">
          {text}
        </p>
      </div>
      <div className="bg-[#2E3447]">
        <div className="px-3 py-3 text-center">
          <span className="text-[#767E94]">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;