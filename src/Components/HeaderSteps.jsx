import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'User Information',
  'Address Details',
  'Thank You',
];

function HeaderSteps({
  activeStep = 0,
}) {
  return (
    <Box className="mb-5">
      <Stepper activeStep={activeStep} alternativeLabel>
        {
          steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))
        }
      </Stepper>
    </Box>
  );
}

export default HeaderSteps;
