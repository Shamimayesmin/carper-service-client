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
					
				</div>
				<div className="w-1/2">
                    <p className="text-xl text-amber-500 font-bold">About us</p>
					<h1 className="text-5xl my-5 font-bold">I am qualified <br />& of experience <br /> in this field</h1>
					<p className="py-6">
                    I pride itself on working with leading local designers, subcontractors, architects and decorators to bring the clients visions to life. I strive to make the renovation process as low impact and seamless as possible, using pre-planning and heavy-duty site protection to keep sites clean and organized and our clients happy throughout the process 
                    
					</p>
					<p className="py-6">
                    I work with My clients to improve the quality of their homes and commercial spaces, incorporating old world style craftsmanship with new world technology and green building knowledge. By using the latest, up-to-date building techniques and materials, we build and renovate for the long term, using construction methods that ensure the clients space will look amazing and live well for years to come.  
                    
					</p>

					<button className="btn btn-primary bg-teal-500">Get more info</button>
				</div>
			</div>
		</div>
		</div>
	);
};

export default About;
