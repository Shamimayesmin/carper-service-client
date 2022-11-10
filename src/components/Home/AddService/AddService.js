import React, { useEffect, useState } from "react";
import useTitle from "../../../hook/useTitle";
import AddServiceCard from "./AddServiceCard";

const AddService = () => {
	const [addService, setAddService] = useState([]);

	useTitle("AddService");
	useEffect(() => {
		fetch("https://assignment-11-server-omega.vercel.app/services")
			.then((res) => res.json())
			.then((data) => setAddService(data));
	}, []);


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
				{addService.map((service) => (
					<AddServiceCard key={service._id}
					 service={service}
					 
					></AddServiceCard>
				))}
			</div>
			{/* <div className='mb-20 flex justify-center'>
                <Link to='/services' className='rounded-lg bg-teal-400 py-5 px-6'><button className=''>See All</button></Link>
            </div> */}
		</div>
	);
};

export default AddService;
