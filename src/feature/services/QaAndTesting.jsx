

import React from 'react'
import Navbar from '../../component/reuseable/navbar/Navbar'
import Footer from '../../component/reuseable/footer/Footer'
import Image from "../../assert/testing-solution.png"
import CheckBox from "../../assert/check.png"
import Handshake from "../../assert/handshake.png";

const QaAndTesting = () => {
  return (
    <div>
      <Navbar />
      <div className='relative'>
        <img src={Image} alt='' />
        <div className='absolute inset-0 flex justify-center items-center text-center text-white  z-10'>
          <h2 className='text-5xl'>QA & Testing Solutions</h2>
        </div>
      </div>
      <div className='px-11'>
        <p className='mt-9'>
          Our comprehensive suite of QA and software testing services empowers businesses to guarantee the functionality, security, reliability, and <br />
          user-friendliness of their software products.
        </p>
        <p className='mt-8 leading-8'>
          Utilizing industry-standard software testing methodologies, we partner with our clients to achieve their quality assurance objectives. Our team <br />
          of seasoned QA experts possesses expertise across various software testing services, technologies, tools, platforms, and standards. This <br />
          breadth of knowledge enables us to implement efficient quality assurance processes and elevate your software quality management strategy<br /> to new heights. By leveraging our diverse skill
          set and vast experience, we ensure that your software solutions not only meet
          but exceed <br />industry standards, providing unparalleled value and reliability to your end-users.
        </p>
      </div>
      <hr className="border-b-2 border-dotted mx-10 mt-5" />
      <h2 className='text-3xl px-11 mt-9'> Our <span className='text-contacte-colour'>QA & Testing Solutions Includes</span> </h2>
      <div className='flex flex-row'>
        <div className='mt-3'>
          <h2 className='px-11'>Comprehensive Testing Suite</h2>
          <div className='flex gap-3 px-11 my-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Manual Testing</p>
          </div>
          <div className='flex gap-3 px-11 my-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Automated Testing</p>
          </div>
          <div className='flex gap-3 px-11 my-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Mobile Testing</p>
          </div>
          <div className='flex gap-3 px-11 my-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Web Application Testing</p>
          </div>
          <div className='flex gap-3 px-11 my-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Performance Testing</p>
          </div>
          <div className='flex gap-3 px-11 my-2'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Regression Testing</p>
          </div>
          <div className='flex gap-3 px-11 my-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Compatibility Testing</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Security Testing</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Usability Testing</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>API Testing</p>
          </div>
        </div>
        <div className='mt-3'>
          <h2>Specialized Testing Services</h2>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Database Testing</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Stress Testing</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Penetration Testing</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Load Testing</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Accessibility Testing</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Localization Testing</p>
          </div>
        </div>
        <div className='mt-3'>
          <h2 className='px-11'>Test Optimization Services</h2>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Test Strategy & Planning</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Test Case Design and Execution</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Test Environment Setup and Management</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Test Automation Framework Development</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Defect Management and Reporting</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>Test Data Management</p>
          </div>
          <div className='flex gap-3 px-11 mt-3'>
            <img src={CheckBox} alt='' className='w-5' />
            <p>QA Process Improvement</p>
          </div>
        </div>
      </div>
      <hr className="border-b-2 bg-gray-300 border-dotted mx-10 mt-5" />
      <h2 className='text-3xl px-11 mt-14'><span className='text-contacte-colour'>Benefits</span> of QA & Testing Solutions</h2>
      <div className='flex flex-row gap-8 my-5 mx-5'>
        <div className='rounded-md border w-96 mt-4 bg-slate-100'>
          <h2 className='font-bold px-11 mt-4'>Comprehensive Testing Coverage</h2>
          <p className='max-w-96 leading-7 px-11 mt-3'>
            QA & Testing Solutions offer a wide range of testing services, ensuring thorough coverage of all aspects of software quality, including functionality, performance, security, and user experience.
          </p>
        </div>
        <div className='rounded-md border w-96 mt-4 bg-slate-100'>
          <h2 className='font-bold px-11 mt-4'>Customized Testing Approaches</h2>
          <p className='max-w-96 leading-7 px-11 mt-3'>
            Clients can tailor testing approaches to suit their specific project requirements, whether it's manual testing for user interface validation or automated testing for regression testing and continuous integration.
          </p>
        </div>
        <div className='rounded-md border w-96 mt-4 bg-slate-100'>
          <h2 className='font-bold px-11 mt-4'>Improved Software Quality</h2>
          <p className='max-w-96 leading-7 px-11 mt-3'>
            By identifying and addressing defects early in the development lifecycle, QA & Testing Solutions help improve the overall quality and reliability of software products, reducing the risk of critical issues in production.
          </p>
        </div>
      </div>
     
      <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-64 mt-8 mb-8">
        <img src={Handshake} alt='' className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-opacity-50">
          <h2 className="text-2xl">Push your product to next level.</h2>
          <p className="font-bold max-w-lg mt-4">
            Building a stellar product demands an outstanding team. Choose excellence — collaborate with QA Solucity today for unparalleled success.
          </p>
          <button className=" bg-orange-text text-white rounded-md py-3 px-4 mt-12">Contact Us</button>
        </div>
      </div> 
      <Footer />
    </div>
  )
}

export default QaAndTesting
