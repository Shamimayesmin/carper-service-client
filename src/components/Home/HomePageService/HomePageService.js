import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import HomePageServiceCard from "./HomePageServiceCard";

const HomePageService = () => {
	const { user } = useContext(AuthContext);
	const [addservices, setAddServices] = useState([]);

	useEffect(() => {
		fetch(
			`https://assignment-11-server-omega.vercel.app/addService?email=${user?.email}`
		)
			.then((res) => res.json())
			.then((data) => setAddServices(data));
	}, [user?.email]);

	return (
		<div>
			<div className="text-center mt-5">
				<p className="text-2xl font-bold text-orange-600">Services</p>
				<h2 className="text-5xl font-semibold">Quality wooden products</h2>
				<p className="mt-5">
					There is a number of service I provide since a many years.
					<br />
					You will get quality servive
				</p>
			</div>

			<div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
				{addservices
					.slice(-3)
					.reverse()
					.map((serv) => (
						<HomePageServiceCard
							key={serv._id}
							serv={serv}
						></HomePageServiceCard>
					))}
			</div>
			<div className="mb-20 flex justify-center">
				<Link to="/services" className="rounded-lg bg-teal-400 py-5 px-6">
					<button className="">See All</button>
				</Link>
			</div>
		</div>
	);
};

export default HomePageService;
