import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/loginimage.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
	const {login} = useContext(AuthContext)


	const handleLogin = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		login(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset()

				// const currentUser = {
				// 	email: user.email,
				// };

				// console.log(currentUser);
				// //get jwt token
				// fetch("https://genius-car-server-rust.vercel.app/jwt", {
				// 	method: "POST",
				// 	headers: {
				// 		"content-type": "application/json",
				// 	},
				// 	body: JSON.stringify(currentUser),
				// })
				// 	.then((res) => res.json())
				// 	.then((data) => {
				// 		console.log(data);

				// 		// local storage is the easiest but not the best place to store jwt token
				// 		localStorage.setItem("genius-token", data.token);
				// 		// navigate(from, { replace: true });
				// 	});

				// navigate before create token
				// navigate(from,{replace: true})
			})
			.catch((error) => console.log(error));
	};
    return (
        <div>
            <div className="hero w-full my-20">
			<div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
				<div className="text-center lg:text-left">
					<img className="w-3/4" src={img} alt="" />
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
					<h1 className="text-5xl font-bold text-center">Login now!</h1>
					<form onSubmit={handleLogin}  className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="text"
								name="email"
								placeholder="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
							/>
							<label className="label">
								<a href="/" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<input className="btn btn-primary" type="submit" value="login" />
						</div>
					</form>
					<p className="text-center">
						New to genius car ?{" "}
						<Link className="text-orange-600 font-bold" to="/signup">
							{" "}
							Sign Up
						</Link>
					</p>
					<SocialLogin></SocialLogin>
				</div>
			</div>
		    </div>
        </div>
    );
};

export default Login;