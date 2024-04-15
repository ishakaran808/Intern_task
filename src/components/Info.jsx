import React from 'react';

const ThreeColumnSection = () => {
  return (
    <div className='info-section'>
      {/* First column */}
      <div className="info-section">
        <div className="w-full p-4">
          <h2 className="text-lg font-bold mb-2">EQ beats IQ</h2>
        </div>
        
        {/* Second column */}
        <div className="w-full p-4">
          <p>People with high emotional Intelligence(EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
        </div>
        
        {/* Third column */}
        <div className="w-full p-4">
          <p>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29K a year.</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnSection;
