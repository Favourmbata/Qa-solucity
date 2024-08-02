import React from 'react'
import Navbar from '../../component/reuseable/navbar/Navbar'
import Footer from '../../component/reuseable/footer/Footer'
import Profession from "../../assert/profession.png"
import pixelOne from "../../assert/pexels-fauxels-one.png"
 import pixelTwo from "../../assert/pexels-two.png"
 import Handshake from "../../assert/handshake.png"
 import pixelFour from "../../assert/image 62.png"
const ProfessionalQa = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <div className="relative">
          <img src={Profession} alt='Professional QA Training' className="w-full" />
          <h2 className='absolute text-5xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Professional QA Training</h2>
        </div>
        <div>
          <p className='mt-5  px-10'>
            At QA Solucity, we're dedicated to nurturing bright individuals for successful tech careers. 
            Through our Professional QA Training Programs, we offer <br/> comprehensive resources, personalized mentorship,  and practical experience. Our programs focus on developing not just technical skills, <br/>
            but also critical thinking, teamwork, and communication. 
            Participants engage in immersive learning, working on real-world projects with <br/>
            industry experts to gain valuable insights. 
            Join us and kickstart your tech career with confidence.
          </p>
        </div>
        <hr className='border-b-2 bg-gray-300 border-dotted absolute inset-x-0 top-[115%] mx-9'/>
        <h2 className='text-2xl font-bold text-center mt-11'>How it Works</h2>
        <div className='px-4 md:px-28 my-14'>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='flex-1'>
          <img src={pixelOne} alt='' className='w-full rounded-md h-72' />
        </div>
        <div className='flex-1'>
          <h2 className='text-violet-700 text-3xl'>Flexible Capacity</h2>
          <p className='mt-9'>
            In this model, QA Solucity offers flexible capacity solutions tailored to the client's fluctuating needs.
          </p>
          <p className='mt-7'>
            Scenario: A startup is developing a new software product and requires testing support during peak development phases. QA Solucity provides a scalable team of testers that can be quickly ramped up or down based on the project's needs. This allows the startup to maintain agility while ensuring comprehensive testing coverage.
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-10 mt-14'>
        <div className='flex-1 md:order-2'>
          <img src={pixelFour} alt='' className='w-full rounded-md h-72' />
        </div>
        <div className='flex-1 md:order-1'>
          <h2 className='text-violet-600 text-3xl'>Outcome-Based Partnership</h2>
          <p className='mt-4'>
            Under this model, QA Solucity forms a strategic partnership with the client based on achieving predefined outcomes and objectives.
          </p>
          <p className='mt-4'>
            Scenario: A large enterprise is undergoing a digital transformation and requires comprehensive quality assurance support across multiple projects. QA Solucity enters into a partnership agreement with the enterprise to deliver specific outcomes, such as reducing software defects or improving time-to-market by a percentage amount.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 px-4 md:px-28 my-14'>
        <div className=' flex-1 '>
            <img src={pixelTwo} alt='' className=' w-full rounded-md h-[98%]' />
            </div>
           <div>
            <h2 className=' text-violet-600 text-3xl mt-10 '>On-Demand Testing Services</h2>
            <p className=' mt-5 '>In this model, QA Solucity offers on-demand testing services, allowing clients <br/>
            to access testing expertise and resources as needed, without the <br/>
            commitment of long-term partnerships.</p>
            <p className='mt-9 leading-8 '>
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
        <button className=" bg-orange-text text-white rounded-md py-3 px-4 mt-12">Contact Us</button>
      </div>
    </div>
    </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProfessionalQa
