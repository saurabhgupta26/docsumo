import React, { useState } from "react";
import axios from "axios";
import { get } from "lodash";
import { withRouter } from "react-router-dom";

import Footer from "./Footer";

function Login(props) {
  const { setUserData } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    return axios
      .post("https://apptesting.docsumo.com/api/v1/eevee/login/", {
        email,
        password,
      })
      .then(({ data }) => {
        if (data?.data) {
          setUserData(data.data);
          localStorage.setItem("token", data.data.token);
          props.history.push("/dashboard");
        }
      })
      .catch((error) =>
        setErrorMessage(
          get(error, "response.data.error", "Something went wrong!")
        )
      );
  };

  return (
    <div className="outer-container">
      <div className="container card">
        <img
          src="/assets/logo_docsumo.png"
          alt="logo"
          className="logo logo-position"
        />
        <h3 className="card-title">Login to Docsumo</h3>
        <div className="card-center">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control input-field rounded-0"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <label htmlFor="floatingInput" className="form-label">
                Work Email
              </label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control input-field rounded-0"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword" className="form-label">
                Password
              </label>
            </div>
            <div style={{ color: "red" }}> {errorMessage && errorMessage}</div>
            <button
              block="true"
              size="lg"
              className="btn-primary "
              type="submit"
            >
              Login
            </button>
          </form>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
