import React from "react";
import { FaTiktok, FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";
import lgo2 from "../assets/lgo2.png";

function FooterHome2() {
    return (
        <div className="border-t border-gray-300 py-6 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
            <div className="flex items-center space-x-2">
                <img src={lgo2} alt="Logo" className="h-6" />
                <p className="text-gray-600 text-sm mt-2 md:mt-0">&copy; Copyright 2025 Pitch Software GmbH. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
                <FaTiktok className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                <FaXTwitter className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                <FaFacebookF className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                <FaLinkedinIn className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                <FaInstagram className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                <FaYoutube className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </div>
        </div>
    );
};

export default FooterHome2;
