import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hook/useTitle";
import ReviewBox from "../ReviewBox/ReviewBox";

const Review = () => {
    // const { _id} = useLoaderData()
	const [reviews, setReviews] = useState([])
	const { user } = useContext(AuthContext);

    useTitle('MyReview')


    // review delete 
    const handleDelete = id =>{
        const procced = window.confirm('Do you want to delete this review')
        if(procced){
            fetch(`http://localhost:5000/reviews/${id}` ,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success('deleted successfully')
                    const remaining = reviews.filter((rev)=>rev._id !== id)
                    setReviews(remaining)
                }
            })
        }

    }

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])
	return (
		<div>
            <div className="grid grid-cols-1">
            <h2 className="text-xl mt-4">You have {reviews.length} reviews</h2>
			{
               reviews.map((review) =><ReviewBox 
               key={review._id}
                review={review}
                handleDelete={handleDelete}
               ></ReviewBox>) 
            }
		</div>
        <>
        {
            user?.email?
            <>
                <div className='mb-20 flex justify-center mt-4'>
            <Link to='/checkout'className='rounded-lg bg-teal-400 py-5 px-6'><button className=''> Add Review</button></Link>
                </div>
            </>
            :
            <div className='mb-20 flex justify-center mt-4'>
            <Link to='/login'className='rounded-lg bg-teal-400 py-5 px-6'><button className=''>Please login to add review</button></Link>
            </div>
        }
        </>
        </div>
	);
};

export default Review;
