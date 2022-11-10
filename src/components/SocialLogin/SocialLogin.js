import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)

            const currentUser = {
                email: user.email,
            };

            fetch("https://assignment-11-server-omega.vercel.app/jwt", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(currentUser),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);

						
						localStorage.setItem("carper-token", data.token);
						navigate(from, { replace: true });
					});
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
        <p className="text-center"><small>Social Login</small></p>
        <p className="text-center">
            <button onClick={handleGoogleSignIn} className='btn btn-ghost bg-cyan-400'>Google</button>
        </p>
    </div>
    );
};

export default SocialLogin;