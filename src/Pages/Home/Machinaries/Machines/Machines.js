import React, { useEffect, useState } from 'react';
import Machine from '../Machine/Machine';
import './Machines.css'

const Machines = () => {
    const [machines , setMachines] = useState([])
    useEffect(()=>{
        fetch('./machines.json')
        .then(res => res.json())
        .then(data => setMachines(data))
    },[])
    return (
        <>
         <h1>Machines </h1>
         <div className='machines container pt-5'>
           
            {
                machines.map(machine => <Machine machine={machine} key={machine.name}></Machine>)
            }
        </div>
        </>
       
    );
};

export default Machines;