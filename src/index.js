import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import "./styles/styles.scss";
import FormikApp from"../src/components/CancerFamilyReg.js"
import MyDate from"./components/steps/MyDate.js"

const template = (
  // <MyDate/>
  <FormikApp/>
);

ReactDOM.render(template, document.getElementById("app"));
