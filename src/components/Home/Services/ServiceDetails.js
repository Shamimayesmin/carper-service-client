import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hook/useTitle";
import CheckOut from "../../CheckOut/CheckOut";
import Review from "../../Review/Review";

const ServiceDetails = () => {
	useTitle("Details");

	const details = useLoaderData();

	// console.log(details);
	return (
		<div>
			{details.map((item) => (
				<div key={item._id}>
					<div className="card card-compact w-2/3 mx-auto bg-base-100 shadow-2xl mt-12">
						<figure>
							<img
								className="p-6 rounded-lg scale-100 hover:scale-110 ease-in duration-500"
								src={item.photo}
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{item.title}</h2>
							<p className="">{item.message}</p>
							<p className="text-2xl text-orange-600 font-semibold">
								Price : ${item.price}
							</p>
							<p className="text-lg text-orange-400">Rating : {4.5}</p>
						</div>
					</div>
				</div>
			))}

			
			<div>
				<Review></Review>
			</div>

			<div>
				<CheckOut></CheckOut>
			</div>
		</div>
	);
};

export default ServiceDetails;
