import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Grid, FormControl, Select, MenuItem, FormHelperText, InputLabel, FormLabel } from '@mui/material';
import Footer from './Footer';


const validationSchema = Yup.object({
    addressLine1: Yup.string()
        .required('AddressLine1 is a required field'),
    addressLine2: Yup.string()
        .required('AddressLine2 is a required field'),
    city: Yup.string()
        .required('City is a required field'),
    state: Yup.string()
        .required('State is a required field'),
    country: Yup.string()
        .required('Country is a required field'),
    pincode: Yup.string()
        .required('Pincode is a required field'),
});

const AddressInfo = ({
  handleNextStep = () => {},
  handleBackStep = () => {},
  activeStep = 0
}) => {

    const initialValues = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    pincode: ''
  };

  const handleSubmit = (values) => {
    handleNextStep(values)
  };

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="addressLine1">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="Address Line 1"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.addressLine1 && form.touched.addressLine1)}
                      helperText={<ErrorMessage name="addressLine1" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="addressLine2">
                  {({ field, form}) => (
                    <TextField
                      {...field}
                      label="Address Line 2"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.addressLine2 && form.touched.addressLine2)}
                      helperText={<ErrorMessage name="addressLine2" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={touched.city && Boolean(errors.city)}>
                    <InputLabel id="select-label">City</InputLabel>
                    <Field
                    name="city"
                    as={Select}
                    labelId="select-label"
                    label="Select Option"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Ahemdabad">Ahemdabad</MenuItem>
                    </Field>
                    <FormHelperText>{touched.city && errors.city}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={touched.state && Boolean(errors.state)}>
                    <InputLabel id="select-label">State</InputLabel>
                    <Field
                    name="state"
                    as={Select}
                    labelId="select-label"
                    label="Select Option"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                    </Field>
                    <FormHelperText>{touched.state && errors.state}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={touched.country && Boolean(errors.country)}>
                    <InputLabel id="select-label">Country</InputLabel>
                    <Field
                    name="country"
                    as={Select}
                    labelId="select-label"
                    label="Select Option"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    </Field>
                    <FormHelperText>{touched.country && errors.country}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="pincode">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="Pincode"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.pincode && form.touched.pincode)}
                      helperText={<ErrorMessage name="pincode" />}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>
            <Footer activeStep={activeStep} handleBackStep={handleBackStep} />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddressInfo;