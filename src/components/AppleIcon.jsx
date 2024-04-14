import React from 'react';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';

const MyComponent = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AppleIcon />}
    >
      Download on the <br /> App Store
    </Button>
  );
}

export default MyComponent;
