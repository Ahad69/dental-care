import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about container'>
           <img src="https://www.applewaydental.ca/uploads/oicftMCE/707x0_488x0/dentist.jpg" alt="" />

           <div className="about-content m-5">
                <h1>Name : Ahad Hossain</h1>
                <h4>Profession : Web Developer jr.</h4>
                <p>
                    <strong>Education</strong>
                    <br />
                    Accoungting Hons 3rd year <br />
                    Sirajgonj Govt. Collage <br />
                    
                </p>
                <p>
                    <strong>Achievements</strong>
                    <br />
                    HSC - Golden A+  <br />
                    SSC - Golden A+  <br />
                    JSC - Golden A+  <br />
                </p>
                <p>
                    <strong>My goal in 2022</strong> <br />
                    I always want to be one of the best web developer in Banglasesh.
                    I know it's too hard, but I will get it at any cost. I have already started my journey with my favourite web developer <a href="https://www.facebook.com/groups/1037755250105291/user/686386890" className='a'>Jhankar Mahbub</a> sir . I am a hard working person. I am working to fulfil my dream. <br />
                    <br />
                    I want a job in USA 😀. Also sattle in that country. It's all my dream. 
                </p>
           </div>
        </div>
    );
};

export default AboutMe;