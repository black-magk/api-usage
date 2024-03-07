import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import CharactersPage from "./pages/Character/CharactersPage";

import NotFound from "./pages/NotFound/NotFound";
const router = createBrowserRouter([

    {
        // This is the route, and whe the URl in the browser matches this
        path: "/",
        // render this component
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>

            },
            {
                path: "characters/",
                element: <CharactersPage />,
                children: [

                    {  
                        path: "child/",
                        element: <NotFound/>


                    }
                ]

            },
            {
                path: "about/",
                element: <AboutPage/>,
        

            }


        ],
         errorElement: <NotFound/>
      }

]);


export default router;