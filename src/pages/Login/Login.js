import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup } from "react-bootstrap";
import { LoginAction } from "../../redux/actions/LoginAction";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navicate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispacth = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispacth(LoginAction({ email, password }));
    setEmail("");
    setPassword("");
  };
  // data va eaduka use pannurom
  const data = useSelector((state) => state.Loginstore.LoginModel);
  // console.log(data);
  useEffect(() => {
    if (data && data.data) {
      if (data.data) {
        localStorage.setItem("token", data.data.token);
        navicate("/dashboard-page");
      }
    }
  }, [data]);
  return (
    <div className="d-flex justify-content-center">
      <div className="card m-5 p-5">
        <div>
          <h2>Login</h2>
          <FormGroup>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </Form.Group>
            <Button
              variant="primary"
              className="mt-3"
              onClick={handleLogin}
              disabled={email.length <= 0 || password.length <= 0}
            >
              Login
            </Button>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default Login;
