import React from 'react'

import Navbar from '../reuseable/navbar/Navbar'
import Footer from '../reuseable/footer/Footer'
import pixelke from "../../assert/pexels-ketut-subiyanto-4559679 1.png"
import pixelba from "../../assert/pexels-pixabay-356043 1.png"
import vector from "../../assert/Vector 335.png"
import one from "../../assert/1.png"
import two from "../../assert/2.png"
import three from "../../assert/3.png"
import handshake from "../../assert/handshake.png"
export const Methodology = () => {
  return (
    <div>
    <Navbar/>
    <div className=' relative'>
        <img src={pixelke} alt='' className=' h-auto w-full'/>
        <div className=' absolute inset-0 flex justify-center items-center flex-col text-white'>
        <h2 className='font-bold text-4xl ml-32'>Methodology</h2>
        <p className='text-white mt-3'>A methodology will lack the precision of a technique but will be a firmer guide to <br/>
        action than a philosophy. 
        A technique tells you 'how', a <br/> philosophy tells you 'what',
         a methodology contains elements of both 'what' and 'how'.</p>
         <h5 className='text-white bg-contacte-colour mt-4'>Adeniyi John</h5>
        </div>
        
    </div>
    <div className="flex flex-col md:flex-row mt-8 mb-8 px-5">
      <div className="md:w-1/2">
        <img src={pixelba} alt="" className="w-[87%] h-[80%]" />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h2 className="text-2xl font-bold">
          Our <span className="text-indigo-800">System</span>
        </h2>
        <p className="max-w-lg mt-4 leading-7">
          At QA Solucity, we employ a results-oriented strategy to ensure superior quality and cost-effectiveness in our solutions. We leverage cutting-edge methodologies to optimize performance while delivering for our clients.
        </p>
        <p className="mt-12 max-w-lg leading-9">
          Our solutions demonstrate an insightful grasp of real-world business obstacles, leveraging technology to offer practical resolutions. This approach has led us to successfully execute over projects across African and global markets. QA Solucity operates on foundational values and consistently strives for excellence, resulting in unmatched quality and exceptional performance.
        </p>
      </div>
    </div>
    <hr className="border-b-2 bg-gray-300 border-dotted absolute inset-x-0 top-[190%] mx-9" />
    <div>
        <h2 className=' text-indigo-500 px-10'>Our Process</h2>
        
        <h2 className=' text-indigo-500 px-10 text-3xl mt-4'>Our Methodology</h2>
        <div className=' px-10'>
            <p className=' max-w-80 mt-4'>At QA Solucity, our dedicated team and streamlined processes 
            converge to set new standards 
            in quality assurance and innovation.
             Experience excellence in every project with us.</p>
             <button className=' bg-indigo-600 text-white py-2 px-4 rounded-md mt-4'>Contact Us</button>
        </div>
        <div className=''>
      <img src={vector} alt='' className='hidden lg:block'/>
      <div className=''>
            <div className=' bg-slate-100 h-10 w-12 rounded-2xl lg:flex justify-center items-center absolute lg:top-[300%] lg:left-60 hidden'>
              <div className=' h-4 w-4 rounded-full bg-gray-500'></div>
            </div>
            <div className=' bg-slate-100 h-10 w-12 rounded-2xl lg:flex justify-center items-center absolute lg:top-[273%] lg:left-[55%] hidden'>
              <div className=' h-4 w-4 rounded-full bg-gray-500'></div>
            </div>
            <div className=' bg-slate-100 h-10 w-12 rounded-2xl lg:flex justify-center items-center absolute lg:top-[235%] lg:left-[76%] hidden'>
              <div className=' h-4 w-4 rounded-full bg-gray-500'></div>
            </div>
      </div> 
      
      <div className=' mb-10 '>
      <img src={one} alt='' className=' ml-[35%] w-9  absolute -mt-7'/>
        <div className=' ml-64 mb-24 '>
        <h2 className=' font-bold'>Discovery & Analysis</h2>
          <p className=' max-w-64'>We dive deep into your project, 
          understanding your goals and analyzing 
          potential challenges.</p>
         
        </div>
      </div>
      <div className=' justify-center items-center absolute lg:top-[269%] lg:left-[57%] md:mt-20'>
      <img src={two} alt='' className='ml-60 w-9 h-15 absolute -mt-2'/>
      <h2 className=' font-bold '>Tailored Solutions & Implementation</h2>
      <p className=' max-w-56'>Crafting customized QA strategies, 
      we rigorously test and implement solutions
     for top-tier software quality.</p>
      </div>
     
      <div className=' justify-center items-center absolute lg:top-[240%] lg:left-[77%]'>
      <img src={three} alt='' className='w-9 h-13 ml-44 absolute -mt-0 '/>
      <h2 className=' font-bold mt-7'>Continuous Excellence & Support</h2>
      <p className='max-w-64'>Beyond project completion, we ensure ongoing 
      optimization and support, forging a
       lasting partnership for your success.</p>
      </div>
      <div className="relative w-full h-full flex items-center justify-center px-64 mt-8 mb-8"> 
      <img src={handshake} alt='' className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4  bg-opacity-50 mx-6"> {/* Adjusted mx */}
        <h2 className="text-2xl ">Push your product to next level.</h2>
        <p className="font-bold max-w-lg mt-4">
          Building a stellar product demands an outstanding team. Choose excellence — collaborate with QA Solucity today for unparalleled success.
        </p>
        <button className=" bg-orange-text text-white rounded-md py-3 px-4 mt-12">Contact Us</button>
      </div>
    </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
