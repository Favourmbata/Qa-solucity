import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaMediumM } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="text-white p-8  bg-indigo-900 px-24">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="leading-6">
          <h5 className="font-bold mb-2 text-white">QA Quality</h5>
          <ul className="space-y-1">
            <li>Where Quality Meets</li>
            <li>Innovation</li>
          </ul>
          <div className="flex gap-2 mt-4">
            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaMediumM className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-2">Quick Links</h5>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>QA Training</li>
            <li>Works</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Resources</h5>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Events</li>
            <li>Free E-book</li>
          </ul>
        </div>
        <div className=''>
          <h5 className="font-bold mb-2">Join Our Newsletter</h5>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="p-2 rounded text-black cursor-pointer md:w-auto"
            />
            <button className="bg-contacte-colour text-white py-2 px-4 rounded hover:bg-blue-600 ml-2 md:ml-0">
              Subscribe
            </button>
          </div>
          <p className="mt-2 max-w-80">
            *Will send you weekly updates for enhanced software <br/>
            testing management with QA Solucity Solutions.
          </p>
        </div>
      </div>
      <hr className=" bg-contacte-colour mt-8" />
      <p className="text-center mt-3">Copyright @ QA Solucity 2024. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
