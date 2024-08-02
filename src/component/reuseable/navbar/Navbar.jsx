
// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { RiArrowDropDownLine } from 'react-icons/ri';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
  
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
//   const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
//   const [isWorksDropdownOpen, setIsWorksDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = (setDropdownState) => {
//     setDropdownState(prevState => !prevState);
//   };

//   return (
//     <nav className="mt-5 bg-white shadow-md relative z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 py-3">
//         <div className="text-black text-xl font-bold">QA SOLUCITY</div>
//         <div className="hidden md:flex space-x-6 items-center">
//           <ul className="flex space-x-6 items-center">
//             <li>
//               <Link to="/" className="text-blue-500 underline hover:text-gray-400">
//                 Home
//               </Link>
//             </li>
//             <li
//               className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
//               onClick={() => toggleDropdown(setIsCompanyDropdownOpen)}
//             >
//               Company <RiArrowDropDownLine size={24} className="ml-1" />
//               {isCompanyDropdownOpen && (
//                 <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
//                   <li>
//                     <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">
//                       About Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/methodology" className="block px-4 py-2 hover:bg-gray-100">
//                       Methodology
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/engagement-model" className="block px-4 py-2 hover:bg-gray-100">
//                       Engagement Model
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
//               onClick={() => toggleDropdown(setIsServicesDropdownOpen)}
//             >
//               Services <RiArrowDropDownLine size={24} className="ml-1" />
//               {isServicesDropdownOpen && (
//                 <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
//                   <li>
//                     <Link to="/qa-testingsolutions" className="block px-4 py-2 hover:bg-gray-100">
//                       QA & Testing Solutions
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/testing-as-service" className="block px-4 py-2 hover:bg-gray-100">
//                       Testing as a Service (TaaS)
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/professional-qa-training-programs" className="block px-4 py-2 hover:bg-gray-100">
//                       Professional QA Training Programs
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/accredited-qa-certification" className="block px-4 py-2 hover:bg-gray-100">
//                       Accredited QA Certification
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/cyber-security" className="block px-4 py-2 hover:bg-gray-100">
//                       Cyber Security
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/staff-augmentation" className="block px-4 py-2 hover:bg-gray-100">
//                       Staff Augmentation
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/tool-proficiency-training" className="block px-4 py-2 hover:bg-gray-100">
//                       Tool Proficiency Training for Testing
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/devops-as-a-service" className="block px-4 py-2 hover:bg-gray-100">
//                       DevOps as a Service
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/ai-powered-automation-tools" className="block px-4 py-2 hover:bg-gray-100">
//                       AI-powered Automation Tools
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
//               onClick={() => toggleDropdown(setIsResourcesDropdownOpen)}
//             >
//               Resources <RiArrowDropDownLine size={24} className="ml-1" />
//               {isResourcesDropdownOpen && (
//                 <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
//                   <li>
//                     <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
//                       Blog
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/events" className="block px-4 py-2 hover:bg-gray-100">
//                       Events
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/free-ebook" className="block px-4 py-2 hover:bg-gray-100">
//                       Free E-book
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
//               onClick={() => toggleDropdown(setIsWorksDropdownOpen)}
//             >
//               Works <RiArrowDropDownLine size={24} className="ml-1" />
//               {isWorksDropdownOpen && (
//                 <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
//                   <li>
//                     <Link to="/casa-arch" className="block px-4 py-2 hover:bg-gray-100">
//                       Casa Arch
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/hummcare" className="block px-4 py-2 hover:bg-gray-100">
//                       HummCare
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/watchout" className="block px-4 py-2 hover:bg-gray-100">
//                       Watchout
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//           </ul>
//           <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//             Let's Talk
//           </button>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <ul className="flex flex-col space-y-4 px-4 py-2">
//             <li>
//               <Link to="/" className="text-blue-500 underline hover:text-gray-400">
//                 Home
//               </Link>
//             </li>
//             <li
//               className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
//               onClick={() => toggleDropdown(setIsCompanyDropdownOpen)}
//             >
//               <div className="flex items-center justify-between w-full">
//                 Company <RiArrowDropDownLine size={24} className="ml-1" />
//               </div>
//               {isCompanyDropdownOpen && (
//                 <ul className="mt-2 bg-white shadow-md rounded-md w-full">
//                   <li>
//                     <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">
//                       About Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/methodology" className="block px-4 py-2 hover:bg-gray-100">
//                       Methodology
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/engagement-model" className="block px-4 py-2 hover:bg-gray-100">
//                       Engagement Model
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
//               onClick={() => toggleDropdown(setIsServicesDropdownOpen)}
//             >
//               Services <RiArrowDropDownLine size={24} className="ml-1" />
//               {isServicesDropdownOpen && (
//                 <ul className="mt-2 bg-white shadow-md rounded-md w-full">
//                   <li>
//                     <Link to="/qa-testingsolutions" className="block px-4 py-2 hover:bg-gray-100">
//                       QA & Testing Solutions
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/testing-as-service" className="block px-4 py-2 hover:bg-gray-100">
//                       Testing as a Service (TaaS)
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/professional-qa-training-programs" className="block px-4 py-2 hover:bg-gray-100">
//                       Professional QA Training Programs
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/accredited-qa-certification" className="block px-4 py-2 hover:bg-gray-100">
//                       Accredited QA Certification
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/cyber-security" className="block px-4 py-2 hover:bg-gray-100">
//                       Cyber Security
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/staff-augmentation" className="block px-4 py-2 hover:bg-gray-100">
//                       Staff Augmentation
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/tool-proficiency-training" className="block px-4 py-2 hover:bg-gray-100">
//                       Tool Proficiency Training for Testing
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/devops-as-a-service" className="block px-4 py-2 hover:bg-gray-100">
//                       DevOps as a Service
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/ai-powered-automation-tools" className="block px-4 py-2 hover:bg-gray-100">
//                       AI-powered Automation Tools
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
//               onClick={() => toggleDropdown(setIsResourcesDropdownOpen)}
//             >
//               Resources <RiArrowDropDownLine size={24} className="ml-1" />
//               {isResourcesDropdownOpen && (
//                 <ul className="mt-2 bg-white shadow-md rounded-md w-full">
//                   <li>
//                     <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
//                       Blog
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/events" className="block px-4 py-2 hover:bg-gray-100">
//                       Events
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/free-ebook" className="block px-4 py-2 hover:bg-gray-100">
//                       Free E-book
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li
//               className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
//               onClick={() => toggleDropdown(setIsWorksDropdownOpen)}
//             >
//               Works <RiArrowDropDownLine size={24} className="ml-1" />
//               {isWorksDropdownOpen && (
//                 <ul className="mt-2 bg-white shadow-md rounded-md w-full">
//                   <li>
//                     <Link to="/casa-arch" className="block px-4 py-2 hover:bg-gray-100">
//                       Casa Arch
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/hummcare" className="block px-4 py-2 hover:bg-gray-100">
//                       HummCare
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/watchout" className="block px-4 py-2 hover:bg-gray-100">
//                       Watchout
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <button className=" bg-contacte-colour text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//               Let's Talk
//             </button>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isWorksDropdownOpen, setIsWorksDropdownOpen] = useState(false);

  const companyRef = useRef(null);
  const servicesRef = useRef(null);
  const resourcesRef = useRef(null);
  const worksRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (setDropdownState) => {
    setDropdownState((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      companyRef.current &&
      !companyRef.current.contains(event.target) &&
      servicesRef.current &&
      !servicesRef.current.contains(event.target) &&
      resourcesRef.current &&
      !resourcesRef.current.contains(event.target) &&
      worksRef.current &&
      !worksRef.current.contains(event.target)
    ) {
      setIsCompanyDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsResourcesDropdownOpen(false);
      setIsWorksDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="mt-5 bg-white shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-black text-xl font-bold">QA SOLUCITY</div>
        <div className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="text-blue-500 underline hover:text-gray-400">
                Home
              </Link>
            </li>
            <li
              ref={companyRef}
              className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
              onClick={() => toggleDropdown(setIsCompanyDropdownOpen)}
            >
              Company <RiArrowDropDownLine size={24} className="ml-1" />
              {isCompanyDropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
                  <li>
                    <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/methodology" className="block px-4 py-2 hover:bg-gray-100">
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link to="/engagement-model" className="block px-4 py-2 hover:bg-gray-100">
                      Engagement Model
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              ref={servicesRef}
              className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
              onClick={() => toggleDropdown(setIsServicesDropdownOpen)}
            >
              Services <RiArrowDropDownLine size={24} className="ml-1" />
              {isServicesDropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
                  <li>
                    <Link to="/qa-testingsolutions" className="block px-4 py-2 hover:bg-gray-100">
                      QA & Testing Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/testing-as-service" className="block px-4 py-2 hover:bg-gray-100">
                      Testing as a Service (TaaS)
                    </Link>
                  </li>
                  <li>
                    <Link to="/professional-qa-training-programs" className="block px-4 py-2 hover:bg-gray-100">
                      Professional QA Training Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/accredited-qa-certification" className="block px-4 py-2 hover:bg-gray-100">
                      Accredited QA Certification
                    </Link>
                  </li>
                  <li>
                    <Link to="/cyber-security" className="block px-4 py-2 hover:bg-gray-100">
                      Cyber Security
                    </Link>
                  </li>
                  <li>
                    <Link to="/staff-augmentation" className="block px-4 py-2 hover:bg-gray-100">
                      Staff Augmentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/tool-proficiency-training" className="block px-4 py-2 hover:bg-gray-100">
                      Tool Proficiency Training for Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/devops-as-a-service" className="block px-4 py-2 hover:bg-gray-100">
                      DevOps as a Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-powered-automation-tools" className="block px-4 py-2 hover:bg-gray-100">
                      AI-powered Automation Tools
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              ref={resourcesRef}
              className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
              onClick={() => toggleDropdown(setIsResourcesDropdownOpen)}
            >
              Resources <RiArrowDropDownLine size={24} className="ml-1" />
              {isResourcesDropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
                  <li>
                    <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="block px-4 py-2 hover:bg-gray-100">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/free-ebook" className="block px-4 py-2 hover:bg-gray-100">
                      Free E-book
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              ref={worksRef}
              className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
              onClick={() => toggleDropdown(setIsWorksDropdownOpen)}
            >
              Works <RiArrowDropDownLine size={24} className="ml-1" />
              {isWorksDropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md">
                  <li>
                    <Link to="/casa-arch" className="block px-4 py-2 hover:bg-gray-100">
                      Casa Arch
                    </Link>
                  </li>
                  <li>
                    <Link to="/hummcare" className="block px-4 py-2 hover:bg-gray-100">
                      HummCare
                    </Link>
                  </li>
                  <li>
                    <Link to="/watchout" className="block px-4 py-2 hover:bg-gray-100">
                      Watchout
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <button className=" bg-contacte-colour text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Let's Talk
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 px-4 py-2">
            <li>
              <Link to="/" className="text-blue-500 underline hover:text-gray-400">
                Home
              </Link>
            </li>
            <li
              className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
              onClick={() => toggleDropdown(setIsCompanyDropdownOpen)}
            >
              <div className="flex items-center justify-between w-full">
                Company <RiArrowDropDownLine size={24} className="ml-1" />
              </div>
              {isCompanyDropdownOpen && (
                <ul className="mt-2 bg-white shadow-md rounded-md w-full">
                  <li>
                    <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/methodology" className="block px-4 py-2 hover:bg-gray-100">
                      Methodology
                    </Link>
                  </li>
                  <li>
                    <Link to="/engagement-model" className="block px-4 py-2 hover:bg-gray-100">
                      Engagement Model
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
              onClick={() => toggleDropdown(setIsServicesDropdownOpen)}
            >
              <div className="flex items-center justify-between w-full">
                Services <RiArrowDropDownLine size={24} className="ml-1" />
              </div>
              {isServicesDropdownOpen && (
                <ul className="mt-2 bg-white shadow-md rounded-md w-full">
                  <li>
                    <Link to="/qa-testingsolutions" className="block px-4 py-2 hover:bg-gray-100">
                      QA & Testing Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/testing-as-service" className="block px-4 py-2 hover:bg-gray-100">
                      Testing as a Service (TaaS)
                    </Link>
                  </li>
                  <li>
                    <Link to="/professional-qa-training-programs" className="block px-4 py-2 hover:bg-gray-100">
                      Professional QA Training Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/accredited-qa-certification" className="block px-4 py-2 hover:bg-gray-100">
                      Accredited QA Certification
                    </Link>
                  </li>
                  <li>
                    <Link to="/cyber-security" className="block px-4 py-2 hover:bg-gray-100">
                      Cyber Security
                    </Link>
                  </li>
                  <li>
                    <Link to="/staff-augmentation" className="block px-4 py-2 hover:bg-gray-100">
                      Staff Augmentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/tool-proficiency-training" className="block px-4 py-2 hover:bg-gray-100">
                      Tool Proficiency Training for Testing
                    </Link>
                  </li>
                  <li>
                    <Link to="/devops-as-a-service" className="block px-4 py-2 hover:bg-gray-100">
                      DevOps as a Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai-powered-automation-tools" className="block px-4 py-2 hover:bg-gray-100">
                      AI-powered Automation Tools
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
              onClick={() => toggleDropdown(setIsResourcesDropdownOpen)}
            >
              <div className="flex items-center justify-between w-full">
                Resources <RiArrowDropDownLine size={24} className="ml-1" />
              </div>
              {isResourcesDropdownOpen && (
                <ul className="mt-2 bg-white shadow-md rounded-md w-full">
                  <li>
                    <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="block px-4 py-2 hover:bg-gray-100">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/free-ebook" className="block px-4 py-2 hover:bg-gray-100">
                      Free E-book
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative text-black hover:text-gray-400 cursor-pointer flex items-center"
              onClick={() => toggleDropdown(setIsWorksDropdownOpen)}
            >
              <div className="flex items-center justify-between w-full">
                Works <RiArrowDropDownLine size={24} className="ml-1" />
              </div>
              {isWorksDropdownOpen && (
                <ul className="mt-2 bg-white shadow-md rounded-md w-full">
                  <li>
                    <Link to="/casa-arch" className="block px-4 py-2 hover:bg-gray-100">
                      Casa Arch
                    </Link>
                  </li>
                  <li>
                    <Link to="/hummcare" className="block px-4 py-2 hover:bg-gray-100">
                      HummCare
                    </Link>
                  </li>
                  <li>
                    <Link to="/watchout" className="block px-4 py-2 hover:bg-gray-100">
                      Watchout
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

