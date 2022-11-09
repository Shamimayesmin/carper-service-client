import React from 'react';
import { Link } from 'react-router-dom';

const HomePageServiceCard = ({service}) => {
    const {img,price, title,_id ,description} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl mt-12">
        <figure>
            {/* <PhotoView src={img}>
              <img className="p-6 rounded-lg" src={img} style={{ objectFit: 'cover' }} alt="" />
            </PhotoView> */}

            <img className="p-6 rounded-lg scale-100 hover:scale-110 ease-in duration-500" src={img} alt="Shoes" />
            
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="">{description.slice(0, 100) + '...'}</p>
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