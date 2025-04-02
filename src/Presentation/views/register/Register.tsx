import React,{useEffect} from 'react'
import { View,Text,StyleSheet,Image,TextInput, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import registerViewModel from "./ViewModel"
import { CustomTextInput } from '../../components/CustomTextInput';
export const RegisterScreen = () => {
  const {
    name,
    lastname,
    phone,
    email,
    password,
    confirmPassword,
    onChange,
    register,
    message
  }=registerViewModel()
  useEffect(() => {
    if(message !=''){
      ToastAndroid.show(message,ToastAndroid.LONG)
    }
    
  }, [message])
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
      <View style={styles.container}>
        <Image
          style={styles.imageBackground}
          source={require('../../../../assets/chef.png')}
        />
        {/**CONTENEDOR DE LA IMAGEN DEL LOGO Y EL TEXTO */}
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logoImage}
            source={require('../../../../assets/user_image.png')}
          />
          <Text style={styles.logoText}>
            SELECCIONA UNA IMAGEN
          </Text>
        </View>
        
        <View style={styles.form}>
          <ScrollView>
          <Text style ={styles.formText}>Registrarse</Text>

            <CustomTextInput
              image={require('../../../../assets/user.png')}
              placeholder='Nombres'
              keyboardType='default'
              value={name}
              property='name'
              onChangeText={onChange}

            />
            <CustomTextInput
              image={require('../../../../assets/my_user.png')}
              placeholder='Apellidos'
              keyboardType='default'
              value={lastname}
              property='lastname'
              onChangeText={onChange}

            />
            <CustomTextInput
              image={require('../../../../assets/email.png')}
              placeholder='Correo electronico'
              keyboardType='email-address'
              value={email}
              property='email'
              onChangeText={onChange}

            />
            <CustomTextInput
              image={require('../../../../assets/phone.png')}
              placeholder='Telefono'
              keyboardType='phone-pad'
              value={phone}
              property='phone'
              onChangeText={onChange}

            />
             <CustomTextInput
              image={require('../../../../assets/password.png')}
              placeholder='Contraseña'
              keyboardType='default'
              value={password}
              property='password'
              secureTextEntry={true}
              onChangeText={onChange}

            />
            <CustomTextInput
              image={require('../../../../assets/confirm_password.png')}
              placeholder='Confirmar contraseña'
              keyboardType='default'
              value={confirmPassword}
              property='confirmPassword'
              secureTextEntry={true}
              onChangeText={onChange}

            />
            <View style={{marginTop:30}}> 
              <RoundedButton 
                text='Confirmar'
                onPress={()=> register()}
              />
            </View>
            </ScrollView>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground:{
    width:'100%',
    height:'100%',
    opacity:0.8
  },
  form:{
    width:'100%',
    height:'75%',
    backgroundColor:'white',
    position:'absolute',
    bottom:0,
    padding:20,
    borderTopLeftRadius:40,
    borderTopRightRadius:40
  },
  formText:{
    fontWeight:'bold',
    color:'black',
    fontSize:16
  },
  formTextInput:{
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'#EBEBEB',
    marginLeft:15
  },
  formInput:{
    flexDirection:'row',
    marginTop:30
  },
  formInputImageEmail:{
    width:25,
    height:25,
    marginTop:5
  },
  logoContainer:{
    position:'absolute',
    alignSelf:'center',
    top:'5%',
    alignItems:'center'
  },
  logoImage:{
    width:100,
    height:100
  },
  logoText:{
    color:'white',
    textAlign:'center',
    fontSize:20,
    marginTop:10,
    fontWeight:'bold'
  },
  containerText:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:30
  },
  signUpText:{
    marginLeft:10,
    color:'orange',
    fontStyle:'italic',
    borderBottomWidth:1,
    borderBottomColor:'orange',
    fontWeight:'bold'
  }  
  });