import React,{useState} from 'react'
import { LoginAuthCase } from '../../../Domain/useCases/auth/LoginAuth'
 const HomeViewModel = () => {
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const [message, setMessage] = useState('')
    const onChange=(property: string, value: any)=>{
        setValues({...values,[property]:value})
    }
    const login = async ()=>{
      if(isValidForm()){
        const response = await LoginAuthCase(values.email,values.password)
        console.log(response);
        
      }
    }
    const isValidForm = ():boolean=>{
      if (values.email === '') {
        setMessage('Ingresa tu email')
        return false
      }
      if (values.password === '') {
        setMessage('Ingresa tu contraseña')
        return false
      }
      return true
    }
  return {
    ...values,
    onChange,
    login,
    message
  }
}

export default HomeViewModel
