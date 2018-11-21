import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import "./styles/styles.scss";
import FormikApp from"../src/components/CancerFamilyReg.js"
// import MyDate from"./components/steps/MyDate.js"
import BootstrapDialog from "./components/dialog/BootstrapDialog";

const template = (
  // <MyDate/>
  // <BootstrapDialog/>
  <FormikApp/>
);

ReactDOM.render(template, document.getElementById("app"));
