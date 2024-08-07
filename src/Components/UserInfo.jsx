import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Grid, FormControl, RadioGroup, FormControlLabel, Radio, Select, MenuItem, FormHelperText, InputLabel, FormLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import Footer from './Footer';


const validationSchema = Yup.object({
    firstName: Yup.string()
        .required('First Name is a required field'),
    middleName: Yup.string()
        .required('Middle Name is a required field'),
    lastName: Yup.string()
        .required('Last Name is a required field'),
    mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
        .required('Mobile Number is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email Name is a required field'),
    birthday: Yup.date()
        .nullable()
        .required(' Birth Day is Required'),
    age: Yup.number()
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .required('Age is required field'),
    bloodGroup: Yup.string()
        .required('Blood Gorup is a required field'),
    height: Yup.number()
        .positive('Height must be a positive number')
        .integer('Height must be an integer')
        .required('Height is required field'),
    weight: Yup.number()
        .positive('Weight must be a positive number')
        .integer('Weight must be an integer')
        .required('Weight is required field'),
    gender: Yup.string()
        .oneOf(['Male', 'Female'], 'Invalid gender')
        .required('Gender is required'),
    maratialStatus: Yup.string()
    .oneOf(['Single', 'Married', 'Divorced', 'Widowed'], 'Invalid Maratial Status')
    .required('Maratial Status is required'),
});

const UserInfo = ({
  handleNextStep = () => {},
  initialUserInfo = {},
  activeStep = 0,
}) => {

  const initialValues = initialUserInfo;

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
          setFieldValue,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="firstName">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="First Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(
                        form.errors.firstName && form.touched.firstName
                      )}
                      helperText={<ErrorMessage name="firstName" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="middleName">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="Middle Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.middleName && form.touched.middleName)}
                      helperText={<ErrorMessage name="middleName" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="lastName">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="Last Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.lastName && form.touched.lastName)}
                      helperText={<ErrorMessage name="lastName" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="mobileNumber">
                  {({ field, form}) => (
                    <TextField
                      {...field}
                      label="Mobile Number"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.mobileNumber && form.touched.mobileNumber)}
                      helperText={<ErrorMessage name="mobileNumber" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="email">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.email && form.touched.email)}
                      helperText={<ErrorMessage name="email" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name={"birthday"}>
                  {({ field }) => (
                    <FormControl
                      component="fieldset"
                      error={Boolean(errors.birthday && touched.birthday)}
                      fullWidth
                    >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          {...field}
                          className="w-100"
                          label="Birthday"
                          value={values.birthday}
                          onChange={(date) => {
                            setFieldValue("birthday", date);
                          }}
                        />
                      </LocalizationProvider>
                      <FormHelperText>
                        <ErrorMessage name={"birthday"} />
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="age">
                  {({ field , form}) => (
                    <TextField
                      {...field}
                      label="Age"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.age && form.touched.age)}
                      helperText={<ErrorMessage name="age" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={touched.bloodGroup && Boolean(errors.bloodGroup)}
                >
                  <InputLabel id="select-label">Blood Group</InputLabel>
                  <Field
                    name="bloodGroup"
                    as={Select}
                    labelId="select-label"
                    label="Select Option"
                    value={values.bloodGroup}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="0+">0+</MenuItem>
                    <MenuItem value="0-">0-</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                  </Field>
                  <FormHelperText>
                    {touched.bloodGroup && errors.bloodGroup}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="height">
                  {({ field, form }) => (
                    <TextField
                      {...field}
                      label="Height"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.height && form.touched.height)}
                      helperText={<ErrorMessage name="height" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="weight">
                  {({ field, form}) => (
                    <TextField
                      {...field}
                      label="Weight"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(form.errors.height && form.touched.height)}
                      helperText={<ErrorMessage name="weight" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="gender">
                  {({ field, form }) => (
                    <FormControl
                      component="fieldset"
                      error={Boolean(form.errors.gender && form.touched.gender)}
                      fullWidth
                    >
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        row
                      >
                        <FormControlLabel
                          value="Male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="Female"
                          control={<Radio />}
                          label="Female"
                        />
                      </RadioGroup>
                      <FormHelperText>
                        <ErrorMessage name="gender" />
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Grid className="pt-0" item xs={12} sm={6}>
                <Field name="maratialStatus">
                  {({ field, form }) => (
                    <FormControl
                      component="fieldset"
                      error={Boolean(
                        form.errors.maratialStatus &&
                          form.touched.maratialStatus
                      )}
                      fullWidth
                    >
                      <FormLabel component="legend">Maratial Status</FormLabel>
                      <RadioGroup
                        {...field}
                        aria-labelledby="maratialStatus-label"
                        name="maratialStatus"
                        row
                        onChange={(event) =>
                          form.setFieldValue(
                            "maratialStatus",
                            event.target.value
                          )
                        }
                      >
                        <FormControlLabel
                          value="Single"
                          control={<Radio />}
                          label="Single"
                        />
                        <FormControlLabel
                          value="Married"
                          control={<Radio />}
                          label="Married"
                        />
                        <FormControlLabel
                          value="Divorced"
                          control={<Radio />}
                          label="Divorced"
                        />
                        <FormControlLabel
                          value="Widowed"
                          control={<Radio />}
                          label="Widowed"
                        />
                      </RadioGroup>
                      <FormHelperText>
                        <ErrorMessage name="maratialStatus" />
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
              </Grid>
            </Grid>
            <Footer activeStep={activeStep} />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UserInfo;
