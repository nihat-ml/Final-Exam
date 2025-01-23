import AddPage from "../pages/AddPage";
import Detail from "../pages/Detail";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Products from "../pages/Products";
import UserRoot from "../pages/UserRoot";

export let ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/:id",
                element:<Detail/>
            },
            {
                path:"/addpage",
                element:<AddPage/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"*",
                element:<NoPage/>
            }
        ]
    }
]