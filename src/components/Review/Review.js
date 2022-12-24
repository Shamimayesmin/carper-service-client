import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hook/useTitle";
import CheckOut from "../CheckOut/CheckOut";
import ReviewCard from "../ReviewBox/ReviewCard";


const Review = () => {
	// const { _id} = useLoaderData()
	const [reviews, setReviews] = useState([]);
	const { user, logOut } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);

	useTitle("MyReview");

	// review delete
	const handleDelete = (id) => {
		const procced = window.confirm("Do you want to delete this review");
		if (procced) {
			fetch(`https://assignment-11-server-omega.vercel.app/reviews/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						toast.success("deleted successfully");
						const remaining = reviews.filter((rev) => rev._id !== id);
						setReviews(remaining);
					}
				});
		}
	};

	console.log(reviews);
	// useEffect(() => {
	// 	fetch(
	// 		`https://assignment-11-server-omega.vercel.app/reviews?email=${user?.email}`,
	// 		{
	// 			// jwt token access
	// 			headers: {
	// 				authorization: `Bearer ${localStorage.getItem("carper-token")}`,
	// 			},
	// 		}
	// 	)
		
	// 		.then((res) => {
	// 			if (res.status === 401 || res.status === 403) {
	// 				return logOut();
	// 			}
	// 			return res.json();
	// 		})
			
	// 		.then((data) => {
	// 			console.log("recive", data);
	// 			setReviews(data);
	// 			setLoading(false)
	// 		});
	// }, [user?.email, logOut]);

	
    if (loading) {
        return <div className='flex items-center'><div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-400"></div></div>
    }
	return (
		<div>
			<div className="grid grid-cols-1">
				{reviews?.length >0 ? (
					<h2 className="text-3xl flex justify-center max-auto">Reviews</h2>
					
				) : (
					<p className="text-3xl flex justify-center max-auto">No Reviews</p>
				)}
			</div>

			{
				reviews?.map((review) => (
					<ReviewCard
						key={review._id}
						review={review}
						setReviews={setReviews}
						handleDelete={handleDelete}
					></ReviewCard>
				))
			}
			
		</div>
	);
};

export default Review;
