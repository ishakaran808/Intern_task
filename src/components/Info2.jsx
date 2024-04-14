import React from 'react';
import './Navbar.css';
const ThreeColumnSection = () => {
  return (
    <div className='info-section'>
      {/* First column */}
      <div className="w-full p-5">
        <h2 className="text-lg font-bold mb-2">Be the best you with EQ</h2>
      </div>
      
      {/* Second column */}
      <div className="w-full p-4">
        <p>Not having your own emotions under control might be holding you back.</p>
      </div>
      
      {/* Third column */}
      <div className="w-full p-4">
        <p>Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
      </div>
    </div>
  );
};

export default ThreeColumnSection;
