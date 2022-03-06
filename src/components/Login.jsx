import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
          <Form action="" onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <label htmlFor="email" className="form-label">
                Work Email
              </label>
            </div>
            <div className="field">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div style={{ color: "red" }}> {errorMessage && errorMessage}</div>
            <Button
              block="true"
              size="lg"
              className="btn-primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
