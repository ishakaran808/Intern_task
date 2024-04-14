import React from 'react';

const Comp2 = () => {
  return (
    <div className="bg-orange-200 p-4 md:p-8 md:flex md:items-center">
      {/* Left Section */}
      <div className="md:w-1/2 md:pr-8">
        <p className="text-lg md:text-xl font-bold mb-2">Build out of frustration</p>
        <h1 className="text-3xl md:text-4xl mb-4">Meet the Ahead App</h1>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 mt-4 md:mt-0 md:pl-8">
        <p className="text-lg md:text-xl">
          A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence. <br />
          Think of it as a pocket cheerleader towards a better, more fulfilling life.
        </p>
      </div>
    </div>
  );
}

export default Comp2;
