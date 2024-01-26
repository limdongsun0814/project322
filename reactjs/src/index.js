import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Test from "./test/Test";
import HooksTest from "./hooks/HooksTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>안뇽</h1>
    <HooksTest></HooksTest>
    <hr></hr>
    {/* <Test /> */}
  </>
);

//이것은 지워니 작성 구간
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
