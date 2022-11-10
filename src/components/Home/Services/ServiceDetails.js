import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hook/useTitle';
import Review from '../../Review/Review';

const ServiceDetails = () => {
	useTitle('Details')
    const details = useLoaderData()
    const {img, title, description, price,_id} = details
    console.log(details);
	const [reviews, setReviews] = useState([])
	const [text, setText] = useState('')

	useEffect(() =>{

	},[])
    return (
        <div>
            <div className="card card-compact w-2/3 mx-auto bg-base-100 shadow-2xl mt-12">
				<figure>
					<img className="p-6 rounded-lg scale-100 hover:scale-110 ease-in duration-500" src={img} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p className="">{description}</p>
					<p className="text-2xl text-orange-600 font-semibold">Price : ${price}</p>
					<p className='text-lg text-orange-400'>Rating : {4.5}</p>
					
				</div>

				
			</div>
			<div>
				<Review></Review>

			</div>

    </div>
    );
};

export default ServiceDetails;