import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

import './Checkout.css'

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const selectedOne = booking.find((book) => book.id == id);
    const notify = (e) => {
      
        toast(`Thanks ${user?.displayName} for the booking  ${selectedOne?.name} service` );
          toast.success('You are redirecting to home.', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            
            });
        setInterval(function() {window.location = '/'}, 5000);
    }
    const { register,  formState: { errors } } = useForm();
  

  return (
    <div className="confirmbooking ">
     <div className="booking-content">
     <img src={selectedOne?.img} alt="" />
      <h1 className="text-danger mt-4">{selectedOne?.name}</h1>
      <h3>Fees : ${selectedOne?.price}</h3>
      <p>{selectedOne?.description}</p>
     </div>

      <div className="booking-form">
      <>
      {/* register your input into the hook by invoking the "register" function */}
     <label htmlFor="">Name  :  <input defaultValue={user?.displayName} {...register("Name")} /></label>
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="">Email : <input defaultValue={user?.email} {...register("exampleRequired", { required: true })} /></label>
      <br />

     <label htmlFor="">Phone :  <input type='number'  {...register("exampleRequired", { required: true })} /></label>
      <br />

     <label htmlFor="">Address :  <input type='text'  {...register("address", { required: true })} /></label>
      <br />

    
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <button className="ms-2" onClick={() => notify()}>Confirm Booking</button>
    </>
      </div>
     
      <ToastContainer  />
    </div>
  );
};

export default Checkout;
