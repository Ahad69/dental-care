import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, description, price , id } = service;
  const navigate = useNavigate()

  const handleButton = (event) =>{
   
    navigate(`/confirmbooking/${id}`)
  }
  return (
    <div className="service">

        <img src={img} alt="" />
        <h1>{name}</h1>
        <h3>{price}</h3>
        <p>{description}</p>
        <button onClick={()=>handleButton(id)}>Book Now</button>
      
    </div>
  );
};

export default Service;
