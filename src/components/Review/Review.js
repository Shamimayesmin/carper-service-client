import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hook/useTitle";
import ReviewBox from "../ReviewBox/ReviewBox";

const Review = () => {
	// const { _id} = useLoaderData()
	const [reviews, setReviews] = useState([]);
	const { user, logOut } = useContext(AuthContext);

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

	useEffect(() => {
		fetch(
			`https://assignment-11-server-omega.vercel.app/reviews?email=${user?.email}`,
			{
				// jwt token access
				headers: {
					authorization: `Bearer ${localStorage.getItem("carper-token")}`,
				},
			}
		)
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					return logOut();
				}
				return res.json();
			})

			.then((data) => {
				console.log("recive", data);
				setReviews(data);
			});
	}, [user?.email, logOut]);

	return (
		<div>
			<div className="grid grid-cols-1">
				{reviews.length > 0 ? (
					reviews.map((review) => (
						<ReviewBox
							key={review._id}
							review={review}
							handleDelete={handleDelete}
						></ReviewBox>
					))
				) : (
					<p className="text-3xl flex justify-center max-auto">No reviews</p>
				)}
			</div>
			<>
				{user?.email ? (
					<>
						<div className="mb-20 flex justify-center mt-4">
							<Link to="/checkout" className="rounded-lg bg-teal-400 py-5 px-6">
								<button className=""> Add Review</button>
							</Link>
						</div>
					</>
				) : (
					<div className="mb-20 flex justify-center mt-4">
						<Link to="/login" className="rounded-lg bg-teal-400 py-5 px-6">
							<button className="">Please login to add review</button>
						</Link>
					</div>
				)}
			</>
		</div>
	);
};

export default Review;
