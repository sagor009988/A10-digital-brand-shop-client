import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Error from "../Pages/Error";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addProducts',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/myCart',
                element:<MyCart></MyCart>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
        
    }
])

export default router