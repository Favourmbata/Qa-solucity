

import React from 'react';
import Image from '../../assert/pexels-lukas-574070 1.png';
import Navbar from '../reuseable/navbar/Navbar';
import Footer from '../reuseable/footer/Footer';
import QA from "../../assert/QA Solucity Logo 1.png";
import Handshake from "../../assert/handshake.png";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={Image} alt="About Us" className="w-full h-auto " />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-opacity-50 z-10 ">
          <h1 className="text-4xl font-bold mt-4 text-white">About Us</h1>
          <p className="max-w-2xl mx-auto mb-4 text-white bg-black leading-9">
            "Every time I have seen software teams that are out of control, it has been because software testing was thought of as a separate activity, and not as something that was part of everyone's job."
          </p>
          <button className="px-3 py-1 bg-blue-500 text-white rounded">
            - Cem Kaner
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center my-8 px-4">
        <div className="md:w-1/2 p-4">
          <img src={QA} alt="Our Story" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-extrabold mb-4">
            Our <span className="text-blue-600">Story</span>
          </h2>
          <div>
            <p className="mt-3 leading-9">
              A few years ago, our journey began as the founding team came together with one goal: leveraging their collective expertise to build a company known for providing top-tier IT services. As time passed, experienced and enthusiastic individuals joined our team, working together to tackle new challenges, innovate, and deliver tangible value.
            </p>
            <p className="mt-6 leading-9">
              Our solutions reflect deep understanding of real-world business challenges, empowered by our skilled use of technology to provide effective solutions. As a result, we've completed projects across African and international markets, staying true to QA Solucity's founding principles and commitment to excellence, ensuring consistent quality and exceptional performance.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-b-2 bg-gray-300 border-dotted absolute inset-x-0 top-[200%] mx-9" />
      <div className="p-4">
        <div className="mb-6">
          <h2 className="font-bold text-2xl">
            Our <span className="text-blue-500">Core Values</span>
          </h2>
          <p>
            At QA Solucity, our core values - excellence in execution, integrity, continuous development, mutual respect, ownership, and innovation - define who we are. These values guide our actions and decisions, ensuring that we consistently deliver exceptional software testing services to our clients.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 lg:px-48">
          <div className="flex-1 bg-violet-950 p-4 rounded-lg max-w-xs md:max-w-sm">
            <h2 className="text-indigo-800 font-bold">Our Vision</h2>
            <p className="mt-4 leading-7 text-white">
              To revolutionize how organizations operate by providing advanced consulting, delivering high-quality learning and development programs, resulting in peak performance that positively affects their financial outcomes.
            </p>
          </div>
          <div className="flex-1 bg-blue-700 p-4 rounded-lg max-w-xs md:max-w-sm">
            <h2 className="text-white font-bold">Our Mission</h2>
            <p className="mt-4 leading-7 text-white">
              We aim to provide business and technological solutions of exceptional quality, exceeding our customers' expectations and establishing ourselves as their preferred partner.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-64 mt-8 mb-8">
        <img src={Handshake} alt='' className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-opacity-50">
          <h2 className="text-2xl">Push your product to next level.</h2>
          <p className="font-bold max-w-lg mt-4">
            Building a stellar product demands an outstanding team. Choose excellence — collaborate with QA Solucity today for unparalleled success.
          </p>
          <button className="bg-orange-600 text-white rounded-md py-3 px-4 mt-12">Contact Us</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
