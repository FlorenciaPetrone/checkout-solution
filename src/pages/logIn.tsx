import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const LogIn = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry, this is required")
        .email("Please enter a valid email"),
      password: Yup.string()
        .required("Sorry, this is required")
        .min(7, "Too Short! Minimum length is 7 characters"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="form-container-wrapper">
      <form onSubmit={formik.handleSubmit} className="form-container">
        <header className="form-header">
          <h1>Log In</h1>
        </header>
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
            type="text"
            className="input-element"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <span className="error-span">{formik.errors.password}</span>
          ) : null}
        </div>
        <Link to="/delivery-info" className="filled">
          <button type="submit">Log In</button>
        </Link>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
