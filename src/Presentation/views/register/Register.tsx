import React from 'react'
import { View,Text,StyleSheet,Image,TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
export const RegisterScreen = () => {
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
          <Text style ={styles.formText}>Registrarse</Text>
            <View style={styles.formInput}>
              <Image
                style={styles.formInputImageEmail}
                source={require('../../../../assets/user.png')}
              >
              </Image>
              <TextInput
                style={styles.formTextInput}
                placeholder="Nombres"
                keyboardType="default"
              >
              </TextInput>
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formInputImageEmail}
                source={require('../../../../assets/my_user.png')}
              >
              </Image>
              <TextInput
                style={styles.formTextInput}
                placeholder="Apellidos"
                keyboardType="default"
                
              >
              </TextInput>
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formInputImageEmail}
                source={require('../../../../assets/email.png')}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder='Correo electronico'
                keyboardType='email-address'
              >
              </TextInput>
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formInputImageEmail}
                source={require('../../../../assets/phone.png')}
              />
              <TextInput
                placeholder='Telefono'
                style={styles.formTextInput}
                keyboardType='phone-pad'
              ></TextInput>
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formInputImageEmail}
                source={require('../../../../assets/password.png')}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder='Contraseña'
                keyboardType='default'
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View style={styles.formInput}>
              <Image
                style={styles.formInputImageEmail}
                source={require('../../../../assets/confirm_password.png')}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder='Confirmar Contraseña'
                keyboardType='default'
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View style={{marginTop:30}}> 
              <RoundedButton 
                text='Confirmar'
                onPress={()=> ToastAndroid.show('Hola',50)}
              />
            </View>
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
    height:'70%',
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