import React from "react";
// import ReactDOM from "react-dom";
import { Form, Button } from "react-bootstrap";
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// import { useState } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';








function RegForm() {
  // const [FieldValue, setFieldValue] = useState('');
  const formik = useFormik({

    initialValues: {

      Email: '',
      Password: '',
      // file: '',

    },

    validationSchema: yup.object({
      Email: yup.string()

        .email('Invalid email address')

        .required('Please Enter Email Id'),

      Password: yup.string()

        .min(6, 'Password length must 6 Characters')

        .required('Please Enter  Password'),

      // file: yup.mixed().required('File is required')
      //   .test("fileSize", "The file is too large", (value) => {
      //     console.log(value)
      //   }),
        // file: Yup.mixed()
        // .test('fileType', 'Unsupported File Format', function (value) {
        //   console.log(value)
        //   const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
        //   return SUPPORTED_FORMATS.includes(value.type)
        // })
        // .test('fileSize', "File Size is too large", value => {
        //   const sizeInBytes = 500000;//0.5MB
        //   return value.size <= sizeInBytes;
        // })
      

      // file: yup.mixed()
      //   .test('fileSize', "File Size is too large", value => value.size <= 20000)
      //   .test('fileType', "Unsupported File Format", value => ['image/jpg'].includes(value.type))



    }),

    onSubmit: values => {

      alert(values.Email)
      // alert(JSON.stringify(values.Email));

    }

  });
  // const [Email, SetEmail] = useState('');
 


  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="Email" {...formik.getFieldProps("Email")} placeholder="Enter email" />
          {formik.touched.Email && formik.errors.Email ? <span style={{ color: 'red' }}>{formik.errors.Email}</span> : null}

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="Password" {...formik.getFieldProps("Password")} placeholder="Password" />
          {formik.touched.Password && formik.errors.Password ? <span style={{ color: 'red' }}>{formik.errors.Password}</span> : null}
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Control type="file" name="file" {...formik.getFieldProps("file")} onChange={(event) => {
  setFieldValue(event.currentTarget.files[0]);
}} />
          {formik.touched.file && formik.errors.file ? <span style={{ color: 'red' }}>{formik.errors.file}</span> : null}
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
export default RegForm;
