import React from 'react';
import CountUp from 'react-countup';
import './Countdown.css'


const Countdown = () => {
    return (
        <div className='mt-5 pt-5 pb-5'>
            <h1>In 2022 </h1>
            <div className='counts container pb-5'>

           <div className='count'>
               <h6>Veneers </h6>
           <CountUp className='fs-1' end={1250} />
           </div>
           <div className='count'>
               <h6>Root Canal</h6>
           <CountUp className='fs-1' end={960} />
           </div>
           <div className='count'>
            <h6>Oparations</h6>
           <CountUp className='fs-1' end={130} />
           </div>
           <div className='count'>
           <h6>Patient Visited</h6>
           <CountUp className='fs-1' end={3265} />
           </div>
       </div>
        </div>
    );
};

export default Countdown;