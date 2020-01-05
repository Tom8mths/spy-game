import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Login from "./pages/loginPage/login";
import ForgotPassword from "./pages/forgotPassword/forgot_password";
import SignUp from "./pages/signUp/signup";
import Home from "./pages/gamesSection/home";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
