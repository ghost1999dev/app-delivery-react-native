import React, { useState } from "react";
import { ApiDelivery } from "../../../Data/sources/api/ApiDelivery";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";
import { LogBox } from "react-native";

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState('')
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      const response = await RegisterAuthUseCase(values);  
    }
    
  };

  const isValidForm = ():boolean=>{
    if(values.name === ''){
      setMessage('Ingresa tu nombre')
      return false
    }
    if(values.lastname === ''){
      setMessage('Ingresa tu apellido')
      return false
    }
    if(values.email === ''){
      setMessage('Ingresa tu correo electronico')
      return false
    }
    if(values.phone === ''){
      setMessage('Ingresa tu numero de telefono')
      return false
    }
    if(values.password === ''){
      setMessage('Ingresa la contraseña')
      return false
    }

    if(values.confirmPassword == ''){
      setMessage('Ingresa la confirmacion de tu contraseña')
      return false
    }
    if(values.password !== values.confirmPassword){
      setMessage('Las contraseñas no coinciden')
      return false
    }
    return true
  }
  return {
    ...values,
    onChange,
    register,
    message
  };
};

export default RegisterViewModel;
