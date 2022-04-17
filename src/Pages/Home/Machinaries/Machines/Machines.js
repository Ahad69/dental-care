import React, { useEffect, useState } from 'react';

const Machines = () => {
    const [machines , setMachines] = useState([])
    useEffect(()=>{
        fetch('./machines.json')
        .then(res => res.json())
        .then(data => setMachines(data))
    },[])
    return (
        <div>
            <h1>{machines.length}</h1>
            {

            }
        </div>
    );
};

export default Machines;