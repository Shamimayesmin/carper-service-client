import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/logo/logo1a (1).jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {

	const {user,logOut} = useContext(AuthContext)

	const handleLogOut = ()=>{
		logOut()
		.then()
		.catch()
	}

    const menuItems = <>
                <li className="font-semibold"><Link to='/'>Home</Link></li>
        
		
				<li className="font-semibold"><Link to='/services'>Services</Link></li>
				<li className="font-semibold"><Link to='/myservice'>My Services</Link></li>
				<li className="font-semibold"><Link to='/addreview'>Add Review</Link></li>
				<li className="font-semibold"><Link to='/blog'>Blog</Link></li>
                 
				<li className="font-semibold">
					<button onClick={handleLogOut} className="btn-ghost">Sign Out</button>
				</li>
			
			
			    <li className="font-semibold"><Link to='/login'>Login</Link></li>
		
            </>
    return (
        <div>
            <div>
			<div className="navbar bg-base-100 h-20 mb-12 pt-12">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{menuItems}
						</ul>
					</div>
					<Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='w-16 h-16 mb-5' src={headerLogo} alt="" />
                    </Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						{menuItems}
						
					</ul>
				</div>
				<div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
				</div>
			</div>
		</div>
        </div>
    );
};

export default Header;