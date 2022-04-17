import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./Signin.css";

const SignIn = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);

  
            // react firebase hooks 


  const [sendPasswordResetEmail, sending, PasswordError] =
    useSendPasswordResetEmail(auth);

  const [signInWithEmailAndPassword, SignInuser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGithub, githubuser, githubloading, githuberror] =
    useSignInWithGithub(auth);
  const [signInWithGoogle, googleUser, gooogleLoading, googleError] =
    useSignInWithGoogle(auth);


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

  const notify = () => {
    
      toast.success('Password sent to your email !. Please check your email.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
        });
    
}


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
          <button
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Forgot Password ?
          </button>{" "}
          <br />
          <button className="btn">
            {" "}
            <Link to="/signup">Are you new in here ?</Link>
          </button>
        </div>

       {/* errors  */}

        {error || PasswordError
          ? `${error?.message}${PasswordError?.message}`
          : ""}

        <br />
        <Button className="loginBtn" type="submit">
          Login
        </Button>
      </Form>

        {/* modal  */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Reset Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handleEmail}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                
                className="btn btn-primary"

                onClick={async () => {
                  sendPasswordResetEmail(email)
                  notify()
                  
                }}
              >
                Send Password
              </button>
              <ToastContainer  />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <button onClick={() => signInWithGoogle()} className="btn google">
          google
        </button>

        <button
          onClick={() => signInWithGithub()}
          className="btn github text-white"
        >
          GitHub
        </button>

        {/* facebook wont work  */}
        <button className="btn bg-primary facebook text-white">Facebook</button>
      </div>
    </div>
  );
};

export default SignIn;
