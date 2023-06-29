import React from 'react';
import { useFormik } from 'formik';
import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Radio, RadioGroup, Checkbox, Button, Container, Grid } from '@mui/material';

const initialValues = {
  name: '',
  address: '',
  country: '',
  gender: '',
  hobbies: [],
};

const countries = [
  { label: 'USA', value: 'usa' },
  { label: 'Canada', value: 'canada' },
  { label: 'UK', value: 'uk' },
];

const hobbiesOptions = [
  { label: 'Reading', value: 'reading' },
  { label: 'Sports', value: 'sports' },
  { label: 'Cooking', value: 'cooking' },
];

const App = () => {
  const formik = useFormik({
    initialValues,
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      }

      if (!values.address) {
        errors.address = 'Address is required';
      }

      if (!values.country) {
        errors.country = 'Country is required';
      }

      if (!values.gender) {
        errors.gender = 'Gender is required';
      }

      if (!values.hobbies || values.hobbies.length === 0) {
        errors.hobbies = 'Hobbies are required';
      }

      return errors;
    },
    onSubmit: (values) => {
      
      console.log(values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ marginTop: '16px' }}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              label="Address"
              multiline
              rows={4}
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && formik.errors.address}
              helperText={formik.touched.address && formik.errors.address}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && formik.errors.country}
              >
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.country && formik.errors.country && (
                <span style={{ color: 'red' }}>{formik.errors.country}</span>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              {formik.touched.gender && formik.errors.gender && (
                <span style={{ color: 'red' }}>{formik.errors.gender}</span>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
              <Select
                labelId="hobbies-label"
                id="hobbies"
                name="hobbies"
                multiple
                value={formik.values.hobbies}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.hobbies && formik.errors.hobbies}
                renderValue={(selected) => selected.join(', ')}
              >
                {hobbiesOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    <Checkbox checked={formik.values.hobbies.includes(option.value)} />
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.hobbies && formik.errors.hobbies && (
                <span style={{ color: 'red' }}>{formik.errors.hobbies}</span>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default App;
