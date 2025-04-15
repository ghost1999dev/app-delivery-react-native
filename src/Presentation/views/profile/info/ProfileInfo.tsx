import React from 'react'
import { View,Text, Button } from 'react-native'
import useViewModel from "./ViewModel";
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { useNavigation } from '@react-navigation/native';
type NavigationProp = StackNavigationProp<RootStackParamList, 'ProfileInfoScreen'>
export const ProfileInfoScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const {removeSession}=useViewModel()
  return (
    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
        <Button
          title='Cerrar sesion'
          onPress={()=>{
            removeSession()
            navigation.navigate('HomeScreen')
          }}
        />
    </View>
  )
}
