import React from 'react';
import phone from './phone.jpg'; // Import the logo image
import AppleIcon from '@mui/icons-material/Apple';

const About = () => {
  return (
    <div className="bg-purple-100 md:flex md:items-center md:justify-between p-8 md:p-16 rounded-lg">
      {/* Left Section */}
      <div className="md:w-1/2 md:pr-8">
        <p className="text-3xl md:text-4xl font-bold mb-4">Ahead App</p>
        <p className="text-lg md:text-xl leading-snug mb-8">
          Master your life <br /> by mastering <br /> emotions
        </p>
        <div className="flex-col md:flex-row items-start md:items-center">
          <button className="bg-black text-white py-2 px-4 md:py-3 md:px-6 rounded-lg mb-4 md:mb-0">
            {/* <img src={AppleIcon} alt="" className="w-6 h-6 mr-2" /> */}
            Download on the <br /> App Store
          </button>
          <div className="flex items-center">
            {/* <span className="text-xl mr-2">5.0</span> */}
            {/* <Rating name="read-only" value={5} readOnly /> */}
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
  <img src={phone} alt="Some Image" className="w-full2 h-auto md:h-full md:w-auto" />
</div>

    </div>
  );
};

export default About;
