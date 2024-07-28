

import Layout from "../layout/Layout";
import AboutUs from "../component/company/AboutUs"
import { Methodology } from "../component/company/Methodology";
import EngagementModel from "../component/company/EngagementModel";
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
    }
]
