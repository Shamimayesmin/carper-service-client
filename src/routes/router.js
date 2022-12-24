import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddCheckOut from "../components/Home/AddCheckOut/AddCheckOut";

import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/Home/Services/ServiceDetails";
import Services from "../components/Home/Services/Services";

import Login from "../components/Login/Login";
import Review from "../components/Review/Review";
import ReviewBox from "../components/ReviewBox/ReviewCard";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";
import AddService from "../components/Home/AddService/AddService";
import EditReview from "../components/ReviewBox/EditReview";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/services",
				element: <Services></Services>,
			},
			{
				path: "/details/:id",
				element: <ServiceDetails></ServiceDetails>,
				loader: ({ params }) =>
					fetch(
						`http://localhost:5000/services/${params.id}`
					),
			},
			{
				path: "/reviewbox/:id",
				element: <ReviewBox></ReviewBox>,
				loader: ({ params }) =>
					fetch(
						`https://assignment-11-server-omega.vercel.app/services/${params.id}`
					),
			},
			
			{
				path: "/checkout/:id",
				element: <CheckOut></CheckOut>,
				loader: ({ params }) =>
					fetch(
						`https://assignment-11-server-omega.vercel.app/services/${params.id}`
					),
			},
			{
				path: "/checkout",
				element: <CheckOut></CheckOut>,
				loader: () =>
					fetch("https://assignment-11-server-omega.vercel.app/services"),
			},
			{
				path: "/myreview",
				element: <Review></Review>,
			},

			{
				path: "/edit/:id",
				loader: ({ params }) =>
					fetch(
						` https://assignment-11-server-omega.vercel.app/edit/${params.id}`
					),
				element: <EditReview></EditReview>,
			},
			{
				path: "/addService",
				
				element: <AddCheckOut></AddCheckOut>,
				
			},
		],
	},
]);

export default router;
