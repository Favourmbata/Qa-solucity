
import React from 'react';
import { useState } from 'react';
import image from "../../assert/group-image.png";
import star from "../../assert/Star 23.png"
import vector from "../../assert/Vector 335.png"
import one from "../../assert/1.png"
import two from "../../assert/2.png"
import three from "../../assert/3.png"
import handshake from "../../assert/handshake.png"

const Hero = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setEmail('');
    }, 2000); 
  };

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <div className="text-black md:flex-1">
          <button className=" bg-orange-text rounded px-4 py-2 mb-4 ml-7">
            QA Solucity: Where Quality Meets Innovation
          </button>
          <h3 className="font-bold text-2xl mb-4 ml-7">
            Delivering End-to-End <br />
            Excellence in <br />
            Software
          </h3>
          
          <p className="mb-6 ml-7">
            Elevate your software experience with QA Solucity. Our <br />
            unwavering commitment to quality, innovation, and exceeding <br />
            expectations ensures every interaction is a seamless <br />
            and exceptional journey.
          </p>
          <div className="bg-white p-4 ml-7 rounded-lg mb-4 border-4 w-full max-w-lg mx-auto">
      {!success ? (
        <form onSubmit={handleSubmit}>
          <p className="mb-2">Subscribe to our Newsletter</p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="p-2 rounded border border-gray-300 w-full md:flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-black text-white rounded px-4 py-2 w-full md:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <p className="mt-4 text-green-500">Subscription successful!</p>
      )}
    </div>
          <p className=' ml-7 mb-10'>
            Get tech insights, trends, and updates. Subscribe to our newsletter <br/> for a dose of innovation in 
            your inbox
          </p>
        </div>
        <div className="flex justify-center md:flex-1 mt-8 md:mt-0">
          <img src={image} alt="Group" className=" w-[150%] h-96" />
          
        </div>
      </div>
      <div className='ml-7 '>
        <p className='flex items-center  text-2xl gap-4 mb-5 animate-move-right '>orting Systems <img src={star} alt='' className=' w-5 h-4'/>
         Communication Enhancement <img src={star} alt='' className='w-5 h-4'/> 
         Automation Testing
         </p>
         <p className='flex  text-2xl items-center gap-5 animate-move-left'>Comprehensive Testing <img src={star} alt='' className=' w-5 h-4' />
         Manual Testing <img src={star} alt='' className=' w-5 h-4'/>
         Automation Solutions
         </p>
      </div>
      <div className=''>
      <div>
        <h2 className='  text-text-colours ml-7  mt-14'>Excellence Defined: Our Team, Our Process</h2>
        <h1 className='font-bold text-xl ml-7'>We have best team <br/>
        and best process</h1>
        <p className=' max-w-80 ml-7'>At QA Solucity, our dedicated team and 
        streamlined processes converge to set new standards in quality
         assurance and innovation. Experience excellence in every project with us.</p>
         <button className='  bg-contacte-colour text-white ml-7 mt-3 rounded-xl w-36 h-10 '>
          Contact Us
         </button>
      </div>
      <div className=''>
      <img src={vector} alt='' className='hidden lg:block'/>
      <div className=''>
            <div className=' bg-slate-100 h-10 w-12 rounded-2xl lg:flex justify-center items-center absolute lg:top-[245%] lg:left-60 hidden'>
              <div className=' h-4 w-4 rounded-full bg-gray-500'></div>
            </div>
            <div className=' bg-slate-100 h-10 w-12 rounded-2xl lg:flex justify-center items-center absolute lg:top-[217%] lg:left-[57%] hidden'>
              <div className=' h-4 w-4 rounded-full bg-gray-500'></div>
            </div>
            <div className=' bg-slate-100 h-10 w-12 rounded-2xl lg:flex justify-center items-center absolute lg:top-[175%] lg:left-[80%] hidden'>
              <div className=' h-4 w-4 rounded-full bg-gray-500'></div>
            </div>
      </div> 
      
      <div className=' mb-10 '>
      <img src={one} alt='' className=' ml-80 w-9  absolute -mt-7'/>
        <div className='ml-44 mb-24 '>
        <h2 className=' font-bold'>Discovery & Analysis</h2>
          <p className=' max-w-64'>We dive deep into your project, 
          understanding your goals and analyzing 
          potential challenges.</p>
         
        </div>
      </div>
      <div className=' justify-center items-center absolute lg:top-[214%] lg:left-[57%] md:mt-20'>
      <img src={two} alt='' className='ml-60 w-9 h-15 absolute -mt-4'/>
      <h2 className=' font-bold mt-2'>Tailored Solutions & Implementation</h2>
      <p className=' max-w-56'>Crafting customized QA strategies, 
      we rigorously test and implement solutions
     for top-tier software quality.</p>
      </div>
     
      <div className=' justify-center items-center absolute lg:top-[180%] lg:left-[80%]'>
      <img src={three} alt='' className='w-9 h-13 ml-44 absolute -mt-0 '/>
      <h2 className=' font-bold mt-7'>Continuous Excellence & Support</h2>
      <p className='max-w-64'>Beyond project completion, we ensure ongoing 
      optimization and support, forging a
       lasting partnership for your success.</p>
      </div>
     
      </div>
    
    </div>
    
    <div className="relative  w-[90%] h-96 flex justify-center items-center">
  <img src={handshake} alt="" className=" ml-16"/>
  <div className="absolute text-center text-white">
    <h2 className=' font-bold text-xl '>Push your product to next level.</h2>
    <p className="max-h-96">Building a stellar product demands an outstanding team. Choose <br/>
      excellence — collaborate with QA Solucity today for unparalleled success
    </p>
    <button className="bg-orange-text text-white rounded-md w-28 h-10 mt-24">Contact Us</button>
  </div>
</div>
    <style jsx>{`
  @keyframes moveRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes moveLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-move-right {
    animation: moveRight 15s linear infinite;
  }

  .animate-move-left {
    animation: moveLeft 15s linear infinite;
  }
`}</style>

    
    </div>
    
  );
};

export default Hero;
