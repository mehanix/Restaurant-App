import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavigateFunction, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { UserContext } from "../../utils/providers/UserContextProvider";

const handleSubmit = async ({
  event,
  setIsLoading,
  login,
  navigate,
}: {
  event: any;
  setIsLoading: Function;
  login: Function;
  navigate: NavigateFunction;
}) => {
  event.preventDefault();
  const inputs = event?.target || [];
  if (!inputs) {
    return toast.error("Something went wrong!");
  }
  const email = inputs[0]?.value;
  const password = inputs[1]?.value;
  if (!email || !password) {
    return toast.warning("Provide a valid email and password!");
  }
  setIsLoading(true);
  const result = await login({ email, password });
  console.log(result);
  if (result?.error) {
    toast.error("Invalid credentials!");
  } else {
    toast.success("Welcome back!");
    navigate("../");
  }
  setIsLoading(false);
};

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useContext<any>(UserContext);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        width: "100%",
        height: "400px",
      }}
    >
      <Form
        className="p-4"
        style={{
          width: "400px",
          height: "300px",
          borderRadius: "10px",
          border: "1px solid #ced4da",
        }}
        onSubmit={(event: any) =>
          handleSubmit({ event, setIsLoading, login, navigate })
        }
      >
        <span
          style={{ fontSize: "30px", fontWeight: "500", paddingBottom: "20px" }}
        >
          Login
        </span>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>
        <Button disabled={isLoading} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
