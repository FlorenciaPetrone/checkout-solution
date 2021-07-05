import React, { useState } from "react";

import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { useCheckoutState } from "../../utils/checkoutState.original";

import { useFormik } from "formik";
import * as Yup from "yup";

import "./styles.css";

type AddressType = {
  kind: "billing" | "delivery";
};

const AddressForm = (kind: AddressType) => {
  const [isMrActive, setIsMrActive] = useState(false);
  const [isMrsActive, setIsMrsActive] = useState(false);

  const { setAddress, setCurrentStep, currentStep } = useCheckoutState();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      gender: "",
      firstname: "",
      lastname: "",
      street: "",
      additional: "",
      zipcode: "",
      city: "",
      country: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      zipcode: Yup.number().required("Required"),
      city: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setAddress(values, kind.kind);
      if (currentStep === "delivery") {
        setCurrentStep("order");
        history.push("/order");
      } else {
        setCurrentStep("payment");
        history.push("/payment");
      }
    },
  });

  return (
    <div className="address-container">
      <h2 className="address-type">{`Your ${kind.kind} address`}</h2>
      <form className="address-form" onSubmit={formik.handleSubmit}>
        <div className="user-info-container">
          <div className="user-gender">
            <ul className="gender-options">
              <li
                className={classNames("gender-option-1", {
                  "gender-option-active": isMrsActive,
                })}
                onClick={() => setIsMrsActive(!isMrsActive)}
              >
                Mrs
              </li>
              <li
                className={classNames("gender-option-2", {
                  "gender-option-active": isMrActive,
                })}
                onClick={() => setIsMrActive(!isMrActive)}
              >
                Mr
              </li>
            </ul>
          </div>
          <div className="user-name">
            <div className="user-firstname">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="input-element"
                {...formik.getFieldProps("firstname")}
              />
              {formik.errors.firstname && formik.touched.firstname ? (
                <span className="error-span">{formik.errors.firstname}</span>
              ) : null}
            </div>
            <div className="user-lastname">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="input-element"
                {...formik.getFieldProps("lastname")}
              />
              {formik.errors.lastname && formik.touched.lastname ? (
                <span className="error-span">{formik.errors.lastname}</span>
              ) : null}
            </div>
          </div>
          <div className="user-address">
            <div className="address-info">
              <label htmlFor="street">Street and number</label>
              <input
                type="text"
                className="input-element"
                {...formik.getFieldProps("street")}
              />
              {formik.errors.street && formik.touched.street ? (
                <span className="error-span">{formik.errors.street}</span>
              ) : null}
            </div>
            <div className="address-info">
              <label htmlFor="additional">Additional address (optional)</label>
              <input
                type="text"
                className="input-element"
                {...formik.getFieldProps("additional")}
              />
            </div>
          </div>
          <div className="user-city-info">
            <div className="address-info">
              <label htmlFor="zipcode">Postcode</label>
              <input
                type="text"
                className="input-element"
                {...formik.getFieldProps("zipcode")}
              />
              {formik.errors.zipcode && formik.touched.zipcode ? (
                <span className="error-span">{formik.errors.zipcode}</span>
              ) : null}
            </div>
            <div className="address-info">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="input-element"
                {...formik.getFieldProps("city")}
              />
              {formik.errors.city && formik.touched.city ? (
                <span className="error-span">{formik.errors.city}</span>
              ) : null}
            </div>
            <div className="address-info">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="input-element"
                {...formik.getFieldProps("country")}
              />
              {formik.errors.country && formik.touched.country ? (
                <span className="error-span">{formik.errors.country}</span>
              ) : null}
            </div>
          </div>
        </div>
        <button type="submit" className="button">
          Next
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
