import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const HomePageServiceCard = ({serv}) => {
    // console.log(serv);

    const {serviceName, price, phone, customer, service, _id, status,description} = serv;
    const [addCard , setAddCard] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res =>res.json())
	    .then(data => setAddCard(data))
    },[service])

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl mt-12">
        <figure>
            <PhotoProvider>
				<PhotoView src={addCard.img}>
					<img className="p-6 rounded-lg" src={addCard.img} alt="" />
				</PhotoView>
			</PhotoProvider>

            {/* <img className="p-6 rounded-lg scale-100 hover:scale-110 ease-in duration-500" src={img} alt="Shoes" /> */}
            
        </figure>
        <div className="card-body">
            <h2 className="card-title">{addCard.title}</h2>
            {/* <p className="">{addCard?.description?.length> 100 ? <>{description.slice(0,100) +'...'}</> : <>{description} </>}</p> */}
            <p className="text-2xl text-orange-600 font-semibold">Price : ${price}</p>
            <p className='text-lg text-orange-400'>Rating : {4.5}</p>
            <div className="card-actions justify-end">
                <Link
                     to={`/details/${_id}`}>
                    <button className="btn btn-primary">View Detaills</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default HomePageServiceCard;