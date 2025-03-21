import React from 'react'
import { Image, Text, View, TextInput,StyleSheet, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

 const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../assets/chef.png')}
      />
      {/**CONTENEDOR DE LA IMAGEN DEL LOGO Y EL TEXTO */}
      {/*<View style={styles.logoContainer}>
        <Image 
          style={styles.logoImage}
          source={require('./assets/logo.png')}
        />
        <Text style={styles.logoText}>
          Just Eat
        </Text>
      </View>
      {/**CONTENEDOR DEL FORMULARIO */}
      <View style={styles.form}>

      <Text style ={styles.formText}>Log in to login</Text>
      {/**CONTENEDOR DEL ICONO Y DEL INPUTTEXT */}
        <View style={styles.formInput}>
          <Image
            style={styles.formInputImageEmail}
            source={require('../../../assets/email.png')}
          >
          </Image>
          <TextInput
            style={styles.formTextInput}
            placeholder="Correo electronico"
            keyboardType="email-address"
          >
          </TextInput>
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formInputImageEmail}
            source={require('../../../assets/email.png')}
          >
          </Image>
          <TextInput
            style={styles.formTextInput}
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry={true}
          >
          </TextInput>
        </View>
        <View style={{marginTop:30}}> 
          <RoundedButton text='Log up'onPress={()=> ToastAndroid.show('Hola',50)}/>
        </View>
        <View style={styles.containerText}>
          <Text>Don't have account ?</Text>
          <Text style={styles.signUpText}>Sign up</Text>
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
    height:'40%',
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
    top:'15%'
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

export default HomeScreen