import React from 'react'
import Navbar from '../reuseable/navbar/Navbar'
import Footer from "../reuseable/footer/Footer"
import pixelOne from "../../assert/pexels-fauxels-one.png"
import pixelTwo from "../../assert/pexels-two.png"
import pixelThree from "../../assert/pexels-three.png"
 import pixelFour from "../../assert/image 62.png"
 import Handshake from "../../assert/handshake.png"
const EngagementModel = () => {
  return (
    <div>
    <Navbar/>
        <div>
      <div className=''>
        <img src={pixelThree} alt=''/>
        <div className=' absolute inset-0 flex flex-col justify-center items-center'>
            <h2 className=' text-white text-5xl font-bold'>Engagement Model</h2>
            <p className='text-white mt-4'>An effective engagement model is the cornerstone of a successful software project, <br/>
            a dynamic partnership where collaboration and shared objectives converge to <br/> deliver exceptional outcomes.</p>
            <h5 className='text-white bg-contacte-colour'>Adeniyi John</h5>
        </div>
        <div className=' px-20 md:px-4'>
        <p className=' mt-10'>
  Just as the client requirements vary, our approach is tailored accordingly. QA Solucity offers a diverse range of engagement models, each
  <br />
  designed to align with your specific business needs. Through these models, we strive to optimize cost-efficiency while maintaining the highest
  <br />
  standards of quality assurance.
</p>
        <p className='mt-5'>QA Solucity adopts a dynamic approach in service delivery, prioritizing customer satisfaction at competitive rates. 
        Our engagement model is meticulously designed to address customer requirements effectively, 
        fostering a commitment to project success from inception</p>
        </div>
        <h2 className='font-bold text-3xl text-center mt-9'>Our <span className=' font-extrabold'>Engagement Models</span> </h2>
       
       <div className='flex flex-col md:flex-row gap-10 px-4 md:px-28 my-14'>
        <div className='flex-1'>
            <img src={pixelOne} alt='' className=' w-[100%] rounded-md'/>
        </div>
        <div className='flex-1'>
            <h2 className=' text-violet-700 text-3xl'>Flexible Capacity</h2>
            <p className='mt-9'>In this model, QA Solucity offers flexible capacity solutions tailored to the <br/>
            client's fluctuating needs.</p>
            <p className=' mt-7'>Scenario: A startup is developing a new software product and requires testing <br/> support during peak development phases. QA Solucity provides a scalable <br/>
            team of testers that can be quickly ramped up or down based on the project's<br/>
             needs. This allows the startup to maintain agility while ensuring <br/>
             comprehensive testing coverage.</p>
        </div>
       
        </div>
        <div className='flex flex-col md:flex-row gap-10 px-4 md:px-28 my-14'>
  <div className='flex-1 md:order-2'>
    <img src={pixelFour} alt='' className='w-full rounded-md h-72' />
  </div>
  <div className='flex-1 md:order-1'>
    <h2 className='text-violet-600 text-3xl'>Outcome-Based Partnership</h2>
    <p className='mt-4'>
      Under this model, QA Solucity forms a strategic partnership with the client based on achieving predefined outcomes and objectives.
    </p>
    <p className='mt-4'>
      Scenario: A large enterprise is undergoing a digital transformation and requires comprehensive quality assurance support across multiple projects. QA Solucity
      enters into a partnership agreement with the enterprise to deliver specific outcomes, such as reducing software defects or improving time-to-market by a percentage amount.
    </p>
  </div>
</div>
        
        <div className='flex flex-col md:flex-row gap-10 px-4 md:px-28 my-14'>
        <div className=' px-16 flex-1 '>
            <img src={pixelTwo} alt='' className=' my-9 h-72'/>
            </div>
           <div>
            <h2 className=' text-violet-600 text-3xl mt-10'>On-Demand Testing Services</h2>
            <p className=' mt-5'>In this model, QA Solucity offers on-demand testing services, allowing clients <br/>
            to access testing expertise and resources as needed, without the <br/>
            commitment of long-term partnerships.</p>
            <p className='mt-9 leading-8'>
            Scenario: A medium-sized software development company occasionally <br/>
            requires additional testing support for specific projects or during peak<br/>
             periods. Rather than maintaining an in-house testing team or entering into <br/>
             long-term contracts, the company opts to leverage QA Solucity's on-demand <br/>
             testing services.
            </p>
           </div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center lg:px-64 mt-8 mb-8"> 
      <img src={Handshake} alt='' className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4  bg-opacity-50 mx-6"> 
        <h2 className="text-2xl ">Push your product to next level.</h2>
        <p className="font-bold max-w-lg mt-4">
          Building a stellar product demands an outstanding team. Choose excellence — collaborate with QA Solucity today for unparalleled success.
        </p>
        <button className="bg-orange-600 text-white rounded-md py-3 px-4 mt-12">Contact Us</button>
      </div>
    </div>
      </div>
        </div>
        <Footer/>
    </div>
  )
}

export default EngagementModel

