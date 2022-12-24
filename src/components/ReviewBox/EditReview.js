import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const EditReview = () => {
	const customerReviwe = useLoaderData();
	const { _id, message } = customerReviwe;
	// console.log(customerReviwe);

	const navigate = useNavigate();

	const handleUpdateReview = (event) => {
		event.preventDefault();
		const updatedReview = event.target.edit.value;

		fetch(` https://assignment-11-server-omega.vercel.app/edit/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ updatedReview }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.matchedCount > 0) {
					toast.success("Review updated");
					event.target.reset();
					navigate("/reviews");
				}
			});
	};

	return (
		<div className="hero bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card w-96 h-96 flex-shrink-0 shadow-2xl bg-base-100">
					<form onSubmit={handleUpdateReview} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Review {message}</span>
							</label>
							<textarea
								type="text"
								name="edit"
								className="textarea textarea-bordered p-11"
								placeholder="Msg"
							></textarea>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Save Change</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditReview;
