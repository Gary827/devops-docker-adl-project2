import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './1_UploadData';
import WaitProcess from './2_WaitProcess';
import GetSecret from './3_GetSecret';







const steps = ['上傳檔案', '萃取密文中', '取得密文 '];


const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [retData, setRetData] = React.useState({});
  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <AddressForm setActiveStep={setActiveStep} setRetData={setRetData}/>;
      case 1:
        return <WaitProcess />;
      case 2:
        return <GetSecret retData={retData}/>;
      default:
        throw new Error('Unknown step');
    }
  }
  const handleNext = () => {
    // setActiveStep(activeStep + 1);
    console.log(activeStep);
  };

  const handleBack = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Typography component="h1" variant="h4" align="center">
            Extraction Secret
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, setActiveStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep !== 0 && (
                  <Button href='/EmbeddingImage' sx={{ mt: 3, ml: 1 }}>
                    To Embedding Image
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        
      </Container>
    </ThemeProvider>
  );
}