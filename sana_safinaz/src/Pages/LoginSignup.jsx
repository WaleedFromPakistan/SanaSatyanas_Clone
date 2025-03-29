import React from 'react';
import '../Pages/CSS/LoginSignup.css';
import { auth, googleProvider, facebookProvider } from '../../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginSignup = () => {

    const location = useLocation();
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log('User info: ', result.user)
        }
        catch (error) {
            console.log("Error occured during sign in", error);
        }
    }

    const handleFacebookSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            console.log('User info: ', result.user)
        }
        catch (error) {
            console.log("Error occured during sign in", error);
        }
    }

    return (
        <div className='loginSignUp'>
            <div className='heading'>
                {location.pathname === '/Login' ? <h1>CUSTOMER LOGIN </h1> : <h1> CREATE NEW CUSTOMER ACCOUNT</h1>}
            </div>
            <hr />
            {location.pathname === '/Login' ? (<div>
                <div className='Login_through_Links'>
                    <div className='Login_through_Google'>
                        <a onClick={handleGoogleSignIn} href="#!" class="btn btn-lg btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fa fa-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                            <span class="ms-2 fs-6">Sign in with Google</span>
                        </a>
                    </div>
                    <div className='Login_through_Facebook'>
                        <a onClick={handleFacebookSignIn} href="#!" class="btn btn-lg btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fa fa-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            <span class="ms-2 fs-6">Sign in with Facebook</span>
                        </a>
                    </div>
                </div>
                <div className='login_container'>
                    <div className='login_container_heading'>
                        <h1>REGISTERED CUSTOMERS</h1>
                        <p>If you have an account, sign in with your email address.</p>
                    </div>
                    <div className='login_container_form'>
                        <form>
                            <div class="mb-3">
                                <input type="email" placeholder='Email Address' class="form-control" id="userEmail" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <input type="password" placeholder='Password' class="form-control" id="userPassword" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="showPassword" />
                                <label class="form-check-label" for="showPassword">Show Password</label>
                            </div>
                            <div className='login_container_signin'>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                                <p><a href='#'>Forgot password?</a></p>
                            </div>

                        </form>
                    </div>
                    <div className='create_new_account'>
                        <h2>NEW CUSTOMERS</h2>
                        <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                        <div className='btn btn-primary'><Link to='/createaccount' style={{"textDecoration":"none" , "color":"white"}} > Create an account</Link></div>
                    </div>
                </div>
            </div>
            ) : (
                <div>
                    <div className='Login_through_Links'>
                        <div className='Login_through_Google'>
                            <a onClick={handleGoogleSignIn} href="#!" class="btn btn-lg btn-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fa fa-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                                <span class="ms-2 fs-6">Sign in with Google</span>
                            </a>
                        </div>
                        <div className='Login_through_Facebook'>
                            <a onClick={handleFacebookSignIn} href="#!" class="btn btn-lg btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="fa fa-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <span class="ms-2 fs-6">Sign in with Facebook</span>
                            </a>
                        </div>
                    </div>
                    <div className='login_container'>
                        <div className='signup_container_heading'>
                            <h1>PERSONAL INFORMATION</h1>
                        </div>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-6">
                                    <input type="text" class="form-control" id="inputEmail4" placeholder='First Name' />
                                </div>
                                <div class="form-group col-6">
                                    <input type="text" class="form-control" id="inputPassword4" placeholder='Last Name' />
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Sign Up for NewsLetter
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Allow remote shopping assistance
                                </label>
                            </div>
                            <div className='signup_container_heading'>
                                <h1>SIGN-IN INFORMATION</h1>
                            </div>
                            <div class="form-group "    >
                                <input type="email" class="form-control" id="inputAddress" placeholder="Email" />
                            </div>
                            <div class="form-group">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="password" class="form-control" id="inputAddress2" placeholder="Password" />
                                </div>
                                <div className='form-group col-md-6'>
                                    <input type="password" class="form-control" id="inputCity" placeholder='Confirm Password' />
                                </div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="showPassword" />
                                <label class="form-check-label" for="showPassword">Show Password</label>
                            </div>
                            <div className='create_new_account'>
                                <div className='btn btn-primary'>Create an account</div>
                            </div>
                        </form>
                    </div>
                </div>
            )}




        </div>
    );
}

export default LoginSignup;