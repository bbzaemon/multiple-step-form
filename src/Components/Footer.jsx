import { Button, Grid } from "@mui/material";

function Footer({
  activeStep = 0,
  handleBackStep = () => {}
}) {
    return (
      <Grid container className='m-2'>
        <Button disabled={activeStep === 0} onClick={handleBackStep} className="m-2" variant="contained" color="primary">
          Back
        </Button>
        <Button className="m-2" type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Grid>
    );
  }
  
  export default Footer;
  