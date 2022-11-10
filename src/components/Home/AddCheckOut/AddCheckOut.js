import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hook/useTitle";

const AddCheckOut = () => {
	const { title, price, _id } = useLoaderData();
	const { user } = useContext(AuthContext);
	useTitle("Checkout");

	const handlePlaceOrder = (event) => {
		event.preventDefault();

		const form = event.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || "unregistered";
		const phone = form.phone.value;
		const message = form.message.value;

		const order = {
			service: _id,
			serviceName: title,
			price,
			customer: name,
			email,
			phone,
			message,
		
		};

		

		fetch("https://assignment-11-server-omega.vercel.app/addService", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					toast.success("Service added successfully");
					form.reset();
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<form onSubmit={handlePlaceOrder}>
				<h2 className="text-3xl">Add your service : {title}</h2>
				<h4 className="text-2xl">price: {price}</h4>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-7">
					<input
						name="firstName"
						type="text"
						placeholder="First Name"
						className="input input-bordered w-full"
					/>
					<input
						name="lastName"
						type="text"
						placeholder="Last Name"
						className="input input-bordered w-full"
					/>
					<input
						name="phone"
						type="text"
						placeholder="phone"
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
					className="textarea textarea-bordered h-24 w-full"
					placeholder="Your Message"
				></textarea>

				<input
					className="btn mt-4 mb-7"
					type="submit"
					value="Place your order"
				/>
			</form>
		</div>
	);
};

export default AddCheckOut;
