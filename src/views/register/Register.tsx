import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
     <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../../assets/user_image.png')}
      />
     </View>
     <Text style={styles.logoText}>
        Selecciona una imagen
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black'
  },
  logoContainer:{
    position:'absolute',
    alignSelf:'center',
    top:'5%'
  },
  logoImage:{
    width:100,
    height:100
  },
  logoText:{
    color:'white',
    textAlign:'center',
  }
})
