import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signin.css";

const SignIn = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);

  const [updatePassword, updating, updateerror] = useUpdatePassword(auth);

  const [signInWithEmailAndPassword, SignInuser, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [signInWithGithub, githubuser, githubloading, githuberror] = useSignInWithGithub(auth);
    const [signInWithGoogle, googleUser, gooogleLoading, googleError] = useSignInWithGoogle(auth);
  if (user) {
    let from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  }
  if (loading) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  if(error || updateerror){
    console.log(updateerror?.message)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="signin">
      <h1 className="text-center fw-bold pb-5">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <button  className="btn text-primary" onClick={()=>updatePassword(email)} >Forgot Password ?</button> <br />
          <button className="btn">
            {" "}
            <Link to="/signup">Are you new in here ?</Link>
          </button>
        </div>

       
        <br />
        <Button className="loginBtn" type="submit">
          Login
        </Button>
      </Form>
      <div className=''>
            <button onClick={()=>signInWithGoogle()} className='btn google'>google</button>

           <button onClick={()=>signInWithGithub()} className='btn github text-white'>GitHub</button>

           {/* facebook wont work  */}
            <button className='btn bg-primary facebook text-white'>Facebook</button> 
            </div>
      </div>
    
  );
};

export default SignIn;
