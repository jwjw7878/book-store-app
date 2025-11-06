import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.style.css";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) alert("폼 양식을 올바르게 채워주세요");
    setAuth(true);
    navigate("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <div className="form">
        <p>
          <label>아이디</label>{" "}
          <input
            type="text"
            name="email"
            onChange={onChangeHandler}
            value={form.email}
          />
        </p>
        <p>
          <label>비밀번호</label>{" "}
          <input
            type="text"
            name="password"
            onChange={onChangeHandler}
            value={form.password}
          />
        </p>
        <button onClick={submitHandler}>로그인</button>
      </div>
    </div>
  );
};

export default Login;
