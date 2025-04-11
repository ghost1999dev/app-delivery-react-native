import React, { useState, useEffect } from "react";
import { LoginAuthCase } from "../../../Domain/useCases/auth/LoginAuth";
import { SaveUserUseCase } from "../../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserUseCase } from "../../../Domain/useCases/userLocal/GetUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";
const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { user,getSession } = useUserLocal();
  console.log("USER FROM CUSTOM HOOK " + JSON.stringify(user));

  const [message, setMessage] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = await GetUserUseCase();
  };
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthCase(values.email, values.password);
      console.log(response);
      if (!response.success) {
        setMessage(response.message);
      } else {
        await SaveUserUseCase(response.data);
        getSession()
      }
    }
  };
  const isValidForm = (): boolean => {
    if (values.email === "") {
      setMessage("Ingresa tu email");
      return false;
    }
    if (values.password === "") {
      setMessage("Ingresa tu contraseña");
      return false;
    }
    return true;
  };
  return {
    ...values,
    onChange,
    login,
    message,
    user,
  };
};

export default HomeViewModel;
