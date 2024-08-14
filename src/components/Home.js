import React from 'react';
import { Link } from 'react-router-dom';
import {ReactTyped} from 'react-typed';

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-gray-200 overflow-hidden">
      {/* Image */}
      <img
        src="images/phone.PNG"
        alt="Background"
        className="w-full h-full object-cover opacity-50"
      />
      {/* Text above the image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <ReactTyped
            strings={[
              'Apply for Field Work',
              'Internships Remotely',
              'Jobs from Anywhere'
            ]}
            typeSpeed={50}
            backSpeed={25}
            backDelay={1000}
            startDelay={500}
            loop
          />
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover opportunities and start your journey today!
        </p>
        <div className='mt-20'>
            <Link to="/login">
        <button className="btn btn-wide btn-success">Get Started</button> 
        </Link>  
         </div>
      </div>
    </div>
  );
};

export default Home;
