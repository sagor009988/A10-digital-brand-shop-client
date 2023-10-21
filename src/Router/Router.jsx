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
import Details from "../Components/Details";
import PrivateRoute from "../Components/PrivateRoute";
import UpComingFeature from "../Components/UpComingFeature";


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
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
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
                loader:()=>fetch('https://brand-shop-server-five-mu.vercel.app/product')
            },
            {
                path:'/update/:id',
                element:<UpdateItems></UpdateItems>,
                loader:({params})=>fetch(`https://brand-shop-server-five-mu.vercel.app/product/${params.id}`)
            },
            {
                path:'details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute> ,
                loader:()=>fetch('https://brand-shop-server-five-mu.vercel.app/product')
            },
            {
                path:'/upComing',
                element:<UpComingFeature></UpComingFeature>,
                loader:()=>fetch('/upComing.json')
            }

        ]
        
    }
])

export default router