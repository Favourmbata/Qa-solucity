import { Outlet } from "react-router-dom";
import Navbar from "../component/reuseable/navbar/Navbar"
import Footer from "../component/reuseable/footer/Footer"
import Hero from "../feature/hero/Hero";
import Service from "../feature/services/Service";

const Layout = ()=>{
    return(
        <>
        <Outlet/>
       <Navbar/>
       <Hero/>
       <Service/>
       <Footer/>
        </>
    )
}
export default Layout;