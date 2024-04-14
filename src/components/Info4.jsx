import { Margin } from '@mui/icons-material';
import React from 'react';
import "./Navbar.css"
class MyComponent extends React.Component {
  render() {
    const buttonStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    };

    return (
      <div>
        <p>We take privacy seriously</p>
        <h1 style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>Before you get started</h1>

        <p>We won't share your answer with anyone (and won't ever tell you which friends said what about you)</p>
        <button className='button-info'>
          Start a test
        </button>
        <p style={{ fontSize: '0.9rem' }}>Take only 5 minutes</p>
      </div>
    );
  }
}

export default MyComponent;
