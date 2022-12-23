import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CheckOut = () => {
	// const { price, _id } = useLoaderData();
	// console.log(title);

	const { user } = useContext(AuthContext);

	const handlePlaceOrder = (event) => {
		event.preventDefault();

		const form = event.target;
		const name = `${form.firstName.value}`;

		const email = user?.email || "unregistered";

		const message = form.message.value;

		const order = {
			// service: _id,
			// serviceName: title,
			// price,
			customer: name,
			email,
			message,
		};
		fetch("https://assignment-11-server-omega.vercel.app/reviews", {
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
					toast.success("Review added");
					form.reset();
				}
			})
			.catch((err) => console.error(err));
	};
	return (
		<div className="w-2/3 mx-auto bg-slate-300 rounded-lg p-6 my-10">
			<form onSubmit={handlePlaceOrder}>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<input
						name="firstName"
						type="text"
						placeholder="First Name"
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
					className="textarea textarea-bordered h-24 w-full mt-5"
					placeholder="Your Message"
				></textarea>

				<input
					className="btn mt-4 mb-5 bg-orange-400"
					type="submit"
					value="Place your Review"
				/>
			</form>
		</div>
	);
};

export default CheckOut;
