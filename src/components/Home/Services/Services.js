import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then((res) => res.json())
        .then((data) => setServices(data))
    },[]);
    

    return (
        <div>
			<div className="text-center mt-5">
				<p className="text-2xl font-bold text-orange-600">Services</p>
				<h2 className="text-5xl font-semibold">Quality wooden products</h2>
				<p className="mt-5">
					the majority have suffered alteration in some form, by injected
					humour, or randomised <br /> words which don't look even slightly
					believable.
				</p>
			</div>

			<div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
				{services.slice(0,3).map((service) => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>
            <div className='mb-20 flex justify-center'>
                <Link to='/services' className='rounded-lg bg-teal-400 py-5 px-6'><button className=''>See All</button></Link>
            </div>
		</div>
    );
};

export default Services;