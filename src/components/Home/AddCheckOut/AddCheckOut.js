import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hook/useTitle";

const AddCheckOut = () => {
	// const { title, price, _id } = useLoaderData();
	const { user } = useContext(AuthContext);
	useTitle("Checkout");

	// const navigate = useNavigate();

	const handlePlaceOrder = (event) => {
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const price = form.price.value;
		const email = user?.email || "unregistered";
		const photo = form.photo.value;
		const message = form.message.value;
		const date = new Date();
		// console.log(name,price, email, photo, message);

		const orderService = {
			name,
			price,

			email,
			photo,
			message,
			date,
		};

		console.log(orderService);

		fetch(" https://assignment-11-server-omega.vercel.app/addService", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(orderService),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					toast.success("Service added successfully");
					form.reset();
					// navigate('/services')
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="w-2/3 mx-auto bg-slate-300 rounded-lg p-6 my-10">
			<form onSubmit={handlePlaceOrder}>
				<h2 className="text-3xl">Add your service</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-7">
					<input
						name="name"
						type="text"
						placeholder="Service Name"
						className="input input-bordered w-full"
					/>
					<input
						name="price"
						type="text"
						placeholder="Price"
						className="input input-bordered w-full"
					/>
					<input
						name="photo"
						type="text"
						placeholder="photoURL"
						className="input input-bordered w-full"
					/>

					<input
						name="email"
						type="text"
						placeholder="Your Email"
						defaultValue={user?.email}
						className="input input-bordered w-full"
						readOnly
					/>
				</div>

				<textarea
					name="message"
					className="textarea textarea-bordered h-24 w-full mt-4"
					placeholder="Your Message"
				></textarea>

				<input
					className="btn mt-4 mb-7 bg-pink-400"
					type="submit"
					value="Place your order"
				/>
			</form>
		</div>
	);
};

export default AddCheckOut;
