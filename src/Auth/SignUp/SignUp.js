import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [displayName , setdisplayName] =  useState('')
    const [photoURL , setPhotoURL] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate()
    
    const handledisplayName = (e) =>{
        setdisplayName(e.target.value)
    }
    const handlePhotoUrl = (e) =>{
        setPhotoURL(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification : true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName : displayName , photoURL : photoURL });
        navigate('/')
    }

    if(user){
        console.log(user)
    }
    

    return (
        <div className="signin">
        <h1 className="text-center fw-bold pb-5">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name </Form.Label>
          <Form.Control onBlur={handledisplayName} type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicavater">
          <Form.Label>Avater Link </Form.Label>
          <Form.Control onBlur={handlePhotoUrl} type="text" placeholder="Enter Avater Link" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
        </Form.Group>
        <div className='d-flex justify-content-between'>
        <button className="btn text-primary">Forgot Password ?</button> <br />
        <button className='btn'><Link to='/signin'>Already Registered  ?</Link></button>
        </div>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <br />
        {
             error ? 'error?.message' : ''
        }
        <br />
        <Button className="registerBtn" type="submit">
          {
              updating ? 'Creating User' : 'Register'
          }
        </Button>
      </Form>
      
      </div>
    );
};

export default SignUp;