import { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const HorizontalStepper = styled(Stepper)(({ }) => ({
  overflowX: 'auto',
  display: 'flex',
  flexWrap: 'nowrap',
  '& .MuiStep-root': {
    flex: '0 0 auto',  // Prevent wrapping, steps stay in a line
    transition: 'transform 0.3s ease-in-out',  // Animation for scrolling
  },
}));

const StepNavigation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7'];

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div>
      <HorizontalStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </HorizontalStepper>

      <Box>
        {activeStep === steps.length ? (
          <Typography>All steps completed</Typography>
        ) : (
          <>
            <div>
              <Typography>{`You are on ${steps[activeStep]}`}</Typography>
            </div>
            <div>
              <Button onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
              <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
                Next
              </Button>
            </div>
          </>
        )}
      </Box>
    </div>
  );
};

export default StepNavigation;

