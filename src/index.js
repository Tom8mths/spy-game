import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import LoginPage from "./pages/loginPage/loginPage";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import SignUp from "./pages/signUp/signUp";
import GamesSection from "./pages/gamesSection/gamesSection";

ReactDOM.render(<GamesSection />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
