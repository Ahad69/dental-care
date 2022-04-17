import React from 'react';
import './Footer.css'

const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <div className='mt-5'>
            <footer>
                <h1>Sirajganj Dental Care</h1>
                &copy; Copyright  {yearNow}
            </footer>
        </div>
    );
};

export default Footer;