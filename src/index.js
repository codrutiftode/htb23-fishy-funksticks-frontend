import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Layout/Header";
import LoginScreen from "./components/Login/LoginScreen";
import SimpleButton from "./components/UI/SimpleButton";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);