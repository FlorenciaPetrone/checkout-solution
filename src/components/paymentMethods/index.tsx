import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { paymentMethods } from "../../utils/paymentMethods";
import { useCheckoutState } from "../../utils/checkoutState.original";

import { makeStyles } from "@material-ui/core/styles";
import { Radio, InputLabel, Popover, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import "./styles.css";

type SelectedMethod = "PayPal" | "Visa" | "Mastercard";
type PopoverId = null | number;
type Method = {
  id: number;
  name: string;
  src?: string;
  hoverText: string;
};

const useStyles = makeStyles((theme) => ({
  radioClass: {
    marginLeft: 6,
    marginRight: 6,
    transform: "scale(1.5)",
  },
  label: {
    marginTop: 10,
    fontSize: 18,
  },
}));

const PaymentMethods = () => {
  const [selectedValue, setSelectedValue] = useState<SelectedMethod>("PayPal");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState<PopoverId>(null);

  const { setPayment, setCurrentStep } = useCheckoutState();
  const history = useHistory();
  const classes = useStyles();

  //Radio-button related
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  //Popover's related
  const handlePopoverOpen = (event: any, id: PopoverId) => {
    setOpenedPopoverId(id);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setOpenedPopoverId(null);
    setAnchorEl(null);
  };

  //Button related
  const handleClick = () => {
    setPayment(selectedValue);
    setCurrentStep("confirmation");
    history.push("/confirmation");
  };

  return (
    <div className="payment-methods-container">
      <div className="methods-container">
        <h2 className="method-title">Payment methods</h2>
        {paymentMethods.map((m: Method) => (
          <div className="method" key={m.id}>
            <div className="radio-label">
              <Radio
                checked={selectedValue === m.name}
                onChange={handleChange}
                value={m.name}
                className={classes.radioClass}
              />
              <img src={m.src} className="icon" alt={`${m.name} icon`} />
              <InputLabel className={classes.label}>{m.name}</InputLabel>
            </div>
            <div
              className="info"
              onMouseEnter={(e) => handlePopoverOpen(e, m.id)}
              onMouseLeave={handlePopoverClose}
            >
              <InfoIcon />
              <Popover
                open={openedPopoverId === m.id}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                PaperProps={{
                  style: {
                    width: "180px",
                    height: "130px",
                    padding: "5px",
                    textDecoration: "justify",
                    backgroundColor: "#c7c7c8",
                  },
                }}
              >
                <Typography variant="caption">{m.hoverText}</Typography>
              </Popover>
            </div>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={() => handleClick()}>
        Order overview
      </button>
    </div>
  );
};

export default PaymentMethods;
