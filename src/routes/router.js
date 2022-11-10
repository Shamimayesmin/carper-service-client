import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddCheckOut from "../components/Home/AddCheckOut/AddCheckOut";
import AddService from "../components/Home/AddService/AddService";
import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/Home/Services/ServiceDetails";
import Services from "../components/Home/Services/Services";

import Login from "../components/Login/Login";
import Review from "../components/Review/Review";
import ReviewBox from "../components/ReviewBox/ReviewBox";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/services',
                element : <Services></Services>
            },
            {
                path : '/details/:id',
                element : <ServiceDetails></ServiceDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviewbox/:id',
                element : <ReviewBox></ReviewBox>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
                

            },
            {
                path : '/reviews',
                element : <Review></Review>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`) 

            },
            {
                path : '/checkout/:id',
                element : <CheckOut></CheckOut>,
                loader :({params}) => fetch(`http://localhost:5000/services/${params.id}`)  
            },
            {
                path : '/checkout',
                element : <CheckOut></CheckOut>,
                loader :() => fetch('http://localhost:5000/services')  
            },
            {
                path : '/myreview',
                element : <Review></Review>
            },
            {
                path : '/allservice',
                element : <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path : '/servicecheck/:id',
                element : <AddCheckOut></AddCheckOut>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)  
            }
            



        ]
    }
])

export default router;