import React, {useState}from 'react'
import { ApiDelivery } from '../../../Data/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { LogBox } from 'react-native';

const RegisterViewModel = () => {
    const [values, setValues] = useState({
        name:'',
        lastname:'',
        phone:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const onChange=(property:string,value:any)=>{
        setValues({...values,[property]:value})
    }

    const register = async()=>{
      const {result, error} = await RegisterAuthUseCase(values)
    }
  return {
    ...values,
    onChange,
    register
  }
}

export default RegisterViewModel
