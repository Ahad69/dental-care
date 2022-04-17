import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <h1 className="top-tilte">
        Difference between authorization and authentication.
      </h1>
      <div className="blogs-first container">
        <div className="authorization">
          <h1 className="text-center">Authorization</h1>
          <br />
          <ul>
            <li>Authorization determines what resources a user can access.</li>
            <li>
              Authorization works through settings that are implemented and
              maintained by the organization.
            </li>
            <li>Authorization always takes place after authentication.</li>
            <li>Authorization isn’t visible to or changeable by the user.</li>
            <li>
              Example: Once their level of access is authorized, employees and
              HR managers can access different levels of data based on the
              permissions set by the organization.
            </li>
          </ul>
        </div>
        <div className="authentication">
          <h1 className="text-center">Authentication</h1>
          <br />
          <ul>
            <li>Authentication verifies who the user is.</li>
            <li>
              Authentication works through passwords, one-time pins, biometric
              information, and other information provided or entered by the
              user.
            </li>
            <li>
              Authentication is the first step of a good identity and access
              management process.
            </li>
            <li>
              Authentication is visible to and partially changeable by the user.
            </li>
            <li>
              Example: By verifying their identity, employees can gain access to
              an HR application that includes their personal pay information,
              vacation time, and 401K data.
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="blogs-second container">
        <h1>Why I am using Firebase </h1>
        <div className="firebase-content mt-5">
        <p>
          Firebase concept is simple. When you build a client-side app with
          JavaScript or any of its frameworks, for instance, Google Firebase can
          turn this into a serverless app in no time. It also removes the need
          to manage databases yourself, as it does that for you. <br /> Therefore,
          implementing Firebase means plugging a ready-made backend into your
          client code to make it dynamic. Ultimately, it eliminates the need to
          write backend code from scratch and gives you a fully functional one
          instead. Security-wise, it also has explicitly built-in security rules
          that make it a trusted data and server handler. Plus, you get a
          protected backend when you use these rules. <br /> You might also want to
          consider leveraging this tool if you eventually wish to host and
          manage your app in the cloud. Being serverless, Firebase removes the
          need to worry about the technicalities of cloud server configuration. <br />
          As a Google Cloud service, it also gives you access to other Google
          products and features, like Google Drive and Sheets. For instance, you
          can import dummy data from Google Sheets and use it temporarily to
          serve your app.
        </p>
        <img src="https://www.kindpng.com/picc/m/673-6738887_google-firebase-hd-png-download.png" alt="" />
        </div>

        <h1 className="mt-5"> There is some other Authentication Websites :</h1>
           <ul className="options">
           <li>1. Okta </li>

           <li>2. Auth0</li>
           <li>3. Authy</li>
            
            <li>4. SuperAuth</li>
            <li>5. 2FA Directory</li>
           </ul>
        
      </div>
      <hr />
      <div className="third-blogs container">
          <h1>There are many services which Firebase provides, Most useful of them are:</h1>
          <ul>
              <li>Cloud Firestore</li>
              <li>Cloud Functions</li>
              <li>Hosting</li>
              <li>Cloud Storage</li>
              <li>Google Analytics</li>
              <li>Predictions</li>
              <li>Cloud Messaging</li>
              <li>Dynamic Links</li>
              <li>Remote Config</li>
          </ul>
      </div>
    </>
  );
};

export default Blogs;
