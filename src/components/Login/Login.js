import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signinUsingGithub, signinUsingGoogle, error, user, setUser, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        signinUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    const handleGithubSignIn = () => {
        signinUsingGithub()
            .then(result => {
                history.push(redirect_url);
            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <div>
            <div>
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className=" container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
                        <div className="bg-white border px-6 py-6 rounded shadow-md text-black w-full">
                            <h1 className="mb-4 text-3xl text-center">Welcome Back</h1>
                            <h3 className="text-center text-xl mb-6">We Are  <span className="text-purple-600">Happy</span> to See You Back</h3>
                            <div className="text-center space-x-12">
                                <button onClick={handleGithubSignIn} className="border rounded-md border-gray-400 px-4 py-2 mb-2"> <i class="fab fa-github"></i> Sign in with Github</button>
                                <button onClick={handleGoogleSignIn} className="border rounded-md border-gray-400 px-4 py-2 mb-2"> <i class="fab fa-google"></i> Sign in with Google</button>
                            </div>
                            <p className="text-center mb-6 mt-2 text-gray-600"><small>_____ Or use your email ____</small></p>
                            <p className="text-center mb-6 mt-2 text-red-600"><small>{error}</small></p>
                            <input
                                type="text"
                                className="block border border-gray-400 w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-gray-400 w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-purple-600 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>

                            <div className="text-center text-sm text-grey-dark mt-4">
                                <div className="text-grey-dark mt-6">
                                    new user?<Link className="no-underline border-b border-blue text-blue" to="/register"> create an account</Link>.
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;