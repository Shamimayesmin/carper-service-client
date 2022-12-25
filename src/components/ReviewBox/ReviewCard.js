import React, {} from "react";
import { Link } from "react-router-dom";


const ReviewCard = ({ review, handleDelete }) => {
	const { customer, _id, message} = review;

	// console.log(review);

	return (
		<div>
			<div className="mt-20">
				<div className="container bg-red-200 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
					<div className="flex justify-between p-4">
						<div className="flex space-x-4">
							<div>
								<img
									src="https://i.ibb.co/hs7ckYg/photourl.jpg"
									alt=""
									className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
								/>
							</div>
							<div>
								<h4 className="font-bold">{customer}</h4>
								<span className="text-xs dark:text-gray-400">2 days ago</span>
							</div>
						</div>
						<div className="flex items-center space-x-2 dark:text-yellow-500">
							<Link to={`/edit/${_id}`} className="btn">Edit</Link>
							
							<span onClick={() => handleDelete(_id)} className="btn">
								Delete
							</span>
						</div>
					</div>
					<div className="p-4 space-y-2 text-sm dark:text-gray-400">
						<p>{message}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
