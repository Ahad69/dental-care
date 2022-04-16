import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ConfirmBooking = () => {
    const {id} = useParams()
    const [booking , setBooking] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res =>  res.json())
        .then(data => setBooking(data))
    },[])

    const selectedOne = booking.find(book => book.id == id)
    console.log(selectedOne)

    return (
        <div>
            <Card>
        <Card.Img variant="top" src={selectedOne?.img} />
        <Card.Body>
          <Card.Title>{selectedOne?.name}</Card.Title>
          <h3>{selectedOne?.price}</h3>
          <Card.Text>
           {selectedOne?.description}
          </Card.Text>
          <Button variant="info">Go somewhere</Button>
        </Card.Body>
      </Card>
            
        </div>
    );
};

export default ConfirmBooking;