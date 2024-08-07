import { useState } from 'react';
import './App.css'
import UserInfo from './Components/UserInfo.jsx'
import HeaderSteps from './Components/HeaderSteps.jsx';
import DataTable from './Components/DataTable.jsx';
import AddressInfo from './Components/AddressInfo.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif"
    },
    palette: {
      background: {
        default: '#f1f0f0',
      },
    },
  });

  const initialUserInfo = {
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    birthday: null,
    age: '',
    bloodGroup: '',
    height: '',
    weight: '',
    gender: '',
    maratialStatus: ''
  };

  const [activeStep, setActiveStep ] = useState(0)
  const [formData, setFormData] = useState({});
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleNextStep = (data) => {
    switch (activeStep) {
      case 0:
        setUserInfo(data);
        setActiveStep(activeStep + 1)
        break;
      case 1:
        // formatting of date due to MUI Date Picker was returning object
        userInfo.birthday = new Intl.DateTimeFormat('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
        }).format(userInfo.birthday.$d);
        setFormData({...userInfo, ...data})
        setActiveStep(activeStep + 1)
        break;
      default:
        break;
    }
  } 

  const handleBackStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <HeaderSteps activeStep={activeStep}/>
    {
      activeStep === 0 
        ? <UserInfo handleNextStep={handleNextStep} initialUserInfo={userInfo} activeStep={activeStep}/>
        : activeStep === 1
         ? <AddressInfo handleNextStep={handleNextStep} handleBackStep={handleBackStep} activeStep={activeStep}/>
          : <DataTable formData= {formData}/>
    }
    </ThemeProvider>
  )
}

export default App
