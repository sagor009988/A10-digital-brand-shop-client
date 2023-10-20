import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import Register from "../Components/Register";
import BrandItems from "../Components/brandItems";
import UpdateItems from "../Components/UpdateItems";


const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/brands.json')
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
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/brandItems/:id',
                element:<BrandItems></BrandItems>,
                loader:()=>fetch('http://localhost:5000/product')
            },
            {
                path:'/update/:id',
                element:<UpdateItems></UpdateItems>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            }
        ]
        
    }
])

export default router