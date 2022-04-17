import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about container'>
           <img src="https://www.applewaydental.ca/uploads/oicftMCE/707x0_488x0/dentist.jpg" alt="" />

           <div className="about-content m-5">
                <h1>Name : Ahad Hossain</h1>
                <h4>Profession : Dentist.</h4>
                <p>
                    <strong>Education</strong>
                    <br />
                    -4 years education from collage. <br />
                    -3 years of dental school training. <br />
                    
                </p>
                <p>
                    <strong>Degrees</strong>
                    <br />
                    - Doctor of dental surgery (DDS) <br />
                    - Doctor of medical dentesty (DMD)
                </p>
                <p>A dentist, also known as a dental surgeon, is a health care professional who specializes in dentistry. The dentist's supporting team aids in providing oral health services. The dental team includes dental assistants, dental hygienists, dental technicians, and sometimes dental therapists.</p>
           </div>
        </div>
    );
};

export default AboutMe;