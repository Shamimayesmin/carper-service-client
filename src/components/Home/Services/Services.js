import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hook/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
	useTitle("Service");

	const [loading, setLoading] = useState(true);
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("https://assignment-11-server-omega.vercel.app/services")
			.then((res) => res.json())
			.then((data) => {
				setServices(data)
				setLoading(false)
			});
	}, [setLoading]);

	if (loading) {
        return <div className='h-[60vh] flex items-center'><div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-400"></div></div>
    }
	return (
		<div>
			<div className="text-center mt-5">
				<p className="text-2xl font-bold text-orange-600">Services</p>
				<h2 className="text-5xl font-semibold">Quality wooden products</h2>
				<p className="mt-5">
					There is a number of service I provide since a many years.
					<br />
					You will get quality wooden product service.
				</p>
			</div>

			<div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
				{services.map((service) => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>
			
		</div>
	);
};

export default Services;
