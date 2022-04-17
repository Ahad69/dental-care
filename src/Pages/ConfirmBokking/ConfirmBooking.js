import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

import "./ConfirmBooking.css";

const ConfirmBooking = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  const selectedOne = booking.find((book) => book.id == id);


    const notify = () => {
        toast(`Thanks ${user?.displayName} for selecting  ${selectedOne?.name} service` );
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



  return (
    <div className="confirmbooking  pt-5">
      <img src={selectedOne?.img} alt="" />
      <h1 className="text-danger mt-4">{selectedOne?.name}</h1>
      <h3>Fees : ${selectedOne?.price}</h3>
      <p>{selectedOne?.description}</p>

      <button onClick={() => notify()}>Confirm Booking</button>
      <ToastContainer  />
    </div>
  );
};

export default ConfirmBooking;
