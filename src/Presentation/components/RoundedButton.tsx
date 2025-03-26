import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'
import { MyColors } from '../theme/AppTheme'
interface Props{
    text:string,
    onPress:()=> void
}
export const RoundedButton = ({text,onPress}:Props) => {
  return (
    <TouchableOpacity
        style={style.roundedButton}
        onPress={onPress} 
    >
        <Text style={style.textEnter}>{text}</Text>
        
    </TouchableOpacity>
    
  )
}
const style = StyleSheet.create({
    roundedButton:{
        width:'100%',
        backgroundColor:MyColors.primary,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15
    },
    textEnter:{
        fontSize:15
    }
})
