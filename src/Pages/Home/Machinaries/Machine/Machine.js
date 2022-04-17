import React from 'react';

const Machine = ({machine}) => {
    const {img , height } = machine
    return (
        <div className='machine container'>
        <img src={img} height={height}  alt="" />
        

    </div>
            
        
    );
};

export default Machine;