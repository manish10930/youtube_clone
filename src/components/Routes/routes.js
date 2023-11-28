import { createBrowserRouter } from "react-router-dom";
import WatchPage from "../WatchPage";
import HomePage from "../HomePage";
import Error from "../Error";
import MainContainer from "../MainContainer";

export const appRoutes=createBrowserRouter([
    
    {
       path:"/",
       element:<HomePage/>,
       children:[
            {
                path:"/",
                element:<MainContainer/>
            },
            {
                path:"watch",
                element:<WatchPage/>
            }
       ]
    },
{
    path:"*",
    element:<Error/>
}])