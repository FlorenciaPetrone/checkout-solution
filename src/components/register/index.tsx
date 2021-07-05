import React from "react";
import { useHistory } from "react-router-dom";
import { useCheckoutState } from "../../utils/checkoutState.original";

import { useFormik } from "formik";
import * as Yup from "yup";

import "./styles.css";

const Register = () => {
  const { setCustomer, setCurrentStep } = useCheckoutState();
  const history = useHistory();

  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", password: "" },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string()
        .required("Sorry, this is required")
        .email("Please enter a valid email"),
      password: Yup.string()
        .required("Sorry, this is required")
        .min(7, "Too Short! Minimum length is 7 characters"),
    }),
    onSubmit: (values) => {
      setCustomer(values);
      setCurrentStep("delivery");
      history.push("/delivery");
    },
  });

  return (
    <div className="form-container-wrapper">
      <form onSubmit={formik.handleSubmit} className="form-container">
        <header className="form-header">
          <h1>Register</h1>
        </header>
        <div className="form-field-wrap">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            className="input-element"
            {...formik.getFieldProps("firstname")}
          />
          {formik.errors.firstname && formik.touched.firstname ? (
            <span className="error-span">{formik.errors.firstname}</span>
          ) : null}
        </div>
        <div className="form-field-wrap">
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            className="input-element"
            {...formik.getFieldProps("lastname")}
          />
          {formik.errors.lastname && formik.touched.lastname ? (
            <span className="error-span">{formik.errors.lastname}</span>
          ) : null}
        </div>
        <div className="form-field-wrap">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            className="input-element"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="error-span">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="form-field-wrap">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            className="input-element"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <span className="error-span">{formik.errors.password}</span>
          ) : null}
        </div>
        <button type="submit" className="filled">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
