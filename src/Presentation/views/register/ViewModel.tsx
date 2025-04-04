import React, { useState } from "react";
import { ApiDelivery } from "../../../Data/sources/api/ApiDelivery";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";
import { Alert, LogBox } from "react-native";
import * as ImagePicker from 'expo-image-picker'

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    image:"",
    confirmPassword: "",
  });
  const [image, setImage] = useState<string |null>(null)
  const [message, setMessage] = useState('')
  const requestPermissions = async ():Promise<Boolean>=>{
    const {status: cameraStatus}= await ImagePicker.requestCameraPermissionsAsync()
    const {status: galleryStatus}= await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(cameraStatus !== 'granted' || galleryStatus !== 'granted'){
      Alert.alert('Permiso requerido', 'Se necesita permisos para acceder a la camara y a la galeria')
      return false;
    }
    return true
  }
  const takePhoto = async ()=>{
    const hasPermission = requestPermissions()
    if(!hasPermission) return
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect:[4,3],
        quality:1
      })
      if(!result.canceled){
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log('Error al utilizar la camara');
      
    }
    
  }
  const pickImage = async ()=>{
    const hasPermission = requestPermissions()
    if(!hasPermission) return
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing:true,
        aspect:[4,3],
        quality:1
      })
      if(!result.canceled){
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
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
    message,
    image,
    takePhoto,
    pickImage
  };
};

export default RegisterViewModel;
