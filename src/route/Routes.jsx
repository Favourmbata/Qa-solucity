
import Layout from "../layout/Layout";
import AboutUs from "../component/company/AboutUs"
import { Methodology } from "../component/company/Methodology";
import EngagementModel from "../component/company/EngagementModel";
import QaAndTesting from "../feature/services/QaAndTesting";
import TestingAsService from "../feature/services/TestingAsService";
import ProfessionalQa from "../feature/services/ProfessionalQa";
export const Routes = [
    {
        path:"/",
        element:<Layout/>,
      
    },

    {
        path:"/about-us",
        element:<AboutUs/>
    },
    {
        path:"/methodology",
        element:<Methodology/>
    },
    {
        path:"/engagement-model",
        element:<EngagementModel/>
    },
    {
        path:"/qa-testingsolutions",
        element:<QaAndTesting/>
    },
    {
        path:"/testing-as-service",
        element:<TestingAsService/>
    },
    {
        path:"/professional-qa-training-programs",
        element:<ProfessionalQa/>
    }

]