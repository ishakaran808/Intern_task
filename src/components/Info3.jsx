import React from 'react';
import './Navbar.css';
const ThreeColumnSection = () => {
  return (
    <div className='info3-section'>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold'}}>Open vacancies</h1>
      {/* First column */}
      <div className="info-section">
        <div className="w-full p-5">
            <h2 className="text-lg font-bold mb-2">Senior Full-Stack Engineer</h2>
            <ol>
            <li>&bull; Full-time position</li>
            <li>&bull; Berlin or remote</li>
            <li>&bull; $65-85K, 0.5-1.5% equity share options</li>
            </ol>
        </div>
        
        {/* Second column */}
        <div className="w-full p-5">
        <h2 className="text-lg font-bold mb-2">Senior Designer</h2>
            <ol>
            <li>&bull; Full-time position</li>
            <li>&bull; Berlin or remote</li>
            <li>&bull; $40-55K, 0.2-0.25% equity share options</li>
            </ol>
        </div>
        
        {/* Third column */}
        <div className="w-full p-5">
        <h2 className="text-lg font-bold mb-2">Superstar Intern</h2>
        <ol>
            <li>&bull; Full-time position</li>
            <li>&bull; Berlin or remote</li>
            <li>&bull; $20-24K, 0.5-1.5% equity share options</li>
            </ol>      
            </div>

      </div>
    </div>
  );
};

export default ThreeColumnSection;
