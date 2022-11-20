import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { authService } from "../services/AuthService";
import { useHistory } from "react-router-dom";

export default function AppLogin() {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();

  // const token = authService.getToken();
  // console.log(token);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const response = await authService.login(user);
    if(response.status === 200) {
      alert(response.data.status);
      history.push("/cars");
    }
  };
  return <LoginForm handleOnLogin={handleSubmitForm} user={user} setUser={setUser} />;
}
