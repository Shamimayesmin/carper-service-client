import React from "react";
import person from '../../assets/images/about/aboutpic.jpg'


const About = () => {
	return (
		<div>
			<div className="hero my-20">
			<div className="hero-content flex-col lg:flex-row">
				<div className="relative w-1/2">
					<img
						src={person} 
                        alt=''
						className="w-4/5 h-full rounded-lg shadow-2xl"
					/>
					{/* <img
						// src={parts} 
                        alt=''
						className="w-3/5 right-5 top-1/2 border-8 absolute rounded-lg shadow-2xl"
					/> */}
				</div>
				<div className="w-1/2">
                    <p className="text-xl text-amber-500 font-bold">About us</p>
					<h1 className="text-5xl my-5 font-bold">We are qualified <br />& of experience <br /> in this field</h1>
					<p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    
					</p>
					<p className="py-6">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
                    
					</p>

					<button className="btn btn-primary bg-teal-500">Get more info</button>
				</div>
			</div>
		</div>
		</div>
	);
};

export default About;
