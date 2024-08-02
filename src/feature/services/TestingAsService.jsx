// import React from 'react'
// import Navbar from '../../component/reuseable/navbar/Navbar'
// import Footer from '../../component/reuseable/footer/Footer'
// import Testing from "../../assert/testing-service.png"
// import CheckBox from "../../assert/check.png"
//  import Handshake from "../../assert/handshake.png";
// const TestingAsService = () => {
//   return (
//     <div>
//     <Navbar/>
//         <div className=' relative'>
//           <img src={Testing} alt='' className=' h-auto w-full'/>
//           <div className=' absolute inset-0 flex justify-center items-center text-center text-white z-30 '>
//             <h2 className='text-4xl font-bold'>Testing as a Service (TaaS)</h2>
//           </div>
//           <div>
//             <p className='mt-4 px-11 leading-8'>
//             QA Solucity stands as your strategic partner in navigating intricate project requirements and tight delivery constraints,  facilitating the <br/>
//              seamless creation of enduring business value. With our accessible services, we collaborate closely with you, providing expert guidance at every <br/>
//               juncture. Our Testing-as-a-Service (TaaS) model empowers your journey by offering the necessary capacity and expertise exactly when <br/> needed. This approach accelerates the delivery of top-notch products to market, 
// aligning perfectly with QA Solucity's commitment to driving <br/>innovation and efficiency in software development.
//             </p>
//             <p className='mt-2 px-11'>
//             Moreover, our TaaS offering extends beyond mere resource provision,
//              incorporating robust testing methodologies, advanced tools, and <br/>
//              seasoned expertise with access to tailored testing services, 
//             ensuring your software meets the highest standards of quality .
//             </p>
//           </div>        
//           <hr className='border-b-2 mt-4 bg-gray-300 border-dotted absolute inset-x-0 top-[62%] mx-12'/>

//           <h2 className='text-2xl px-11 mt-5'> Our <span className=' text-contacte-colour'> Testing Services  Includes </span> </h2>
//           <div className='flex flex-row gap-8'>
//       <div>
//       <div className='mt-3'>
//         <h2 className='px-11'>Comprehensive Testing Suite</h2>
//         <div className='flex gap-3 px-11 my-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Manual Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 my-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Automated Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 my-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p >Mobile Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 my-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p >Web Application Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 my-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Performance Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 my-2'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p >Regression Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 my-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p >Compatibility Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Security Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Usability Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>API Testing</p>
//         </div>
//         </div>
//       </div>
//       <div className='mt-3'>
//           <h2 className=' ml-10'>Specialized Testing Services</h2>
//           <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Database Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Stress Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Penetration Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Load Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Accessibility Testing</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Localization Testing</p>
//         </div>
//         </div>
//         <div className='mt-3'>
//           <h2 className='px-11'>Test Optimization Services</h2>
//           <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Test Strategy & Planning</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Test Case Design and Execution</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Test Environment Setup and Management</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Test Automation Framework Development</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Defect Management and Reporting</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>Test Data Management</p>
//         </div>
//         <div className='flex gap-3 px-11 mt-3'>
//          <img src={CheckBox} alt='' className='w-5'/>
//          <p>QA Process Improvement</p>
//         </div>
//         </div>
       
//     </div>
//     <hr className='border-b-2 mt-4 bg-gray-300 border-dotted absolute inset-x-0 top-[37%] mx-8'/>

//     <div className='flex flex-row gap-5 my-5 '>
      
//         <div className=' rounded-md border w-96 mt-7 bg-slate-100 '>
//           <h2 className='font-bold px-11 mt-4'>Flexibility and Scalability</h2>
//           <p className=' max-w-96 leading-7 px-11 mt-3'>TaaS offers flexibility and scalability in accessing testing resources and expertise,
//            allowing clients to scale their testing efforts up or down based on project requirements, without the need
//            for extensive infrastructure or long-term commitments.
//            </p>
//         </div>
//         <div className='rounded-md border w-96 mt-7 bg-slate-100'>
//           <h2 className='font-bold px-11'>Cost-Effectiveness</h2>
//           <p className='max-w-96 leading-7 px-11 mt-3'>TaaS eliminates the need for upfront investments in testing tools, infrastructure, 
//           and personnel, leading to cost savings for clients. They only pay for the testing services they use, 
//           reducing overall testing costs.
//            </p>
//         </div>
//         <div className='rounded-md border w-96 mt-7 bg-slate-100'>
//           <h2 className='font-bold px-11'>Rapid Deployment</h2>
//           <p className='max-w-96 leading-7 px-11 mt-3'>
//           TaaS enables rapid deployment of testing resources, accelerating time-to-market for software products.
//            Clients can quickly access testing services as needed,
//            without the delays associated with setting up in-house testing environments.
//           </p>
//         </div>
//       </div>
//       <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-64 mt-8 mb-8">
//         <img src={Handshake} alt='' className="w-full h-auto" />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-opacity-50">
//           <h2 className="text-2xl">Push your product to next level.</h2>
//           <p className="font-bold max-w-lg mt-4">
//             Building a stellar product demands an outstanding team. Choose excellence — collaborate with QA Solucity today for unparalleled success.
//           </p>
//           <button className=" bg-orange-text text-white rounded-md py-3 px-4 mt-12">Contact Us</button>
//         </div>
//       </div> 
//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default TestingAsService



import React from 'react';
import Navbar from '../../component/reuseable/navbar/Navbar';
import Footer from '../../component/reuseable/footer/Footer';
import Testing from "../../assert/testing-service.png";
import CheckBox from "../../assert/check.png";
import Handshake from "../../assert/handshake.png";

const TestingAsService = () => {
  return (
    <div>
      <Navbar />
      <div className='relative'>
        <img src={Testing} alt='Testing Service' className='w-full h-auto' loading="lazy" />
        <div className='absolute inset-0 flex justify-center items-center text-center text-white z-20 '>
               <h2 className='text-4xl font-bold'> Testing as a Service (TaaS) </h2>
        
        </div>
        <div>
          <p className='mt-4 px-11 leading-8'>
            QA Solucity stands as your strategic partner in navigating intricate project requirements and tight delivery constraints, facilitating the <br />
            seamless creation of enduring business value. With our accessible services, we collaborate closely with you, providing expert guidance at every <br />
            juncture. Our Testing-as-a-Service (TaaS) model empowers your journey by offering the necessary capacity and expertise exactly when <br /> needed. This approach accelerates the delivery of top-notch products to market,
            aligning perfectly with QA Solucity's commitment to driving <br />innovation and efficiency in software development.
          </p>
          <p className='mt-2 px-11'>
            Moreover, our TaaS offering extends beyond mere resource provision, incorporating robust testing methodologies, advanced tools, and <br />
            seasoned expertise with access to tailored testing services, ensuring your software meets the highest standards of quality.
          </p>
        </div>
        <hr className='border-b-2 mt-4 bg-gray-300 border-dotted absolute inset-x-0 top-[62%] mx-12' />
        <h2 className='text-2xl px-11 mt-5'> Our <span className=' text-contacte-colour'> Testing Services  Includes </span> </h2>
        <div className='flex flex-row gap-8'>
          <div>
            <div className='mt-3'>
              <h2 className='px-11'>Comprehensive Testing Suite</h2>
              {[
                "Manual Testing",
                "Automated Testing",
                "Mobile Testing",
                "Web Application Testing",
                "Performance Testing",
                "Regression Testing",
                "Compatibility Testing",
                "Security Testing",
                "Usability Testing",
                "API Testing"
              ].map(service => (
                <div className='flex gap-3 px-11 my-3' key={service}>
                  <img src={CheckBox} alt='' className='w-5' />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-3'>
            <h2 className=' ml-10'>Specialized Testing Services</h2>
            {[
              "Database Testing",
              "Stress Testing",
              "Penetration Testing",
              "Load Testing",
              "Accessibility Testing",
              "Localization Testing"
            ].map(service => (
              <div className='flex gap-3 px-11 mt-3' key={service}>
                <img src={CheckBox} alt='' className='w-5' />
                <p>{service}</p>
              </div>
            ))}
          </div>
          <div className='mt-3'>
            <h2 className='px-11'>Test Optimization Services</h2>
            {[
              "Test Strategy & Planning",
              "Test Case Design and Execution",
              "Test Environment Setup and Management",
              "Test Automation Framework Development",
              "Defect Management and Reporting",
              "Test Data Management",
              "QA Process Improvement"
            ].map(service => (
              <div className='flex gap-3 px-11 mt-3' key={service}>
                <img src={CheckBox} alt='' className='w-5' />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className='border-b-2 mt-4 bg-gray-300 border-dotted absolute inset-x-0 top-[37%] mx-8' />
        <div className='flex flex-row gap-5 my-5 '>
          {[
            {
              title: "Flexibility and Scalability",
              description: "TaaS offers flexibility and scalability in accessing testing resources and expertise, allowing clients to scale their testing efforts up or down based on project requirements, without the need for extensive infrastructure or long-term commitments."
            },
            {
              title: "Cost-Effectiveness",
              description: "TaaS eliminates the need for upfront investments in testing tools, infrastructure, and personnel, leading to cost savings for clients. They only pay for the testing services they use, reducing overall testing costs."
            },
            {
              title: "Rapid Deployment",
              description: "TaaS enables rapid deployment of testing resources, accelerating time-to-market for software products. Clients can quickly access testing services as needed, without the delays associated with setting up in-house testing environments."
            }
          ].map((item, index) => (
            <div className='rounded-md border w-96 mt-7 bg-slate-100' key={index}>
              <h2 className='font-bold px-11 mt-4'>{item.title}</h2>
              <p className='max-w-96 leading-7 px-11 mt-3'>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-64 mt-8 mb-8">
          <img src={Handshake} alt='' className="w-full h-auto" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 ">
            <h2 className="text-2xl">Push your product to next level.</h2>
            <p className="font-bold max-w-lg mt-4">
              Building a stellar product demands an outstanding team. Choose excellence — collaborate with QA Solucity today for unparalleled success.
            </p>
            <button className=" bg-orange-text text-white rounded-md py-3 px-4 mt-12">Contact Us</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TestingAsService;
