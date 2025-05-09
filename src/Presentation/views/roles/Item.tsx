import React from "react";
import { Rol } from "../../../Domain/entity/Rol";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import { MyColors } from "../../theme/AppTheme";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../App';
interface Props {
  rol: Rol;
  height: number;
  widht: number;
  navigation:StackNavigationProp<RootStackParamList, "RolesScreen", undefined>
}
export const RolesItem = ({ rol, height, widht,navigation }: Props) => {
  return (
    <TouchableOpacity 
      onPress={()=>{
        if (rol.name == 'ADMIN') {
          navigation.replace('AdminTabsNavigatorScreen')
        }else if(rol.name =='CLIENTE'){
          navigation.replace('ClientTabsNavigatorScreen')
        }
      }}
      style={{...styles.container,height:height,width:widht}}>
      <View style={styles.imageContainer}>
        <Image
            style={styles.image}
            source={{uri:rol.image}}
        />
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{rol.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer:{
    flex:1,
    backgroundColor:'white',
    borderRadius:18
  },
  image: {
    flex: 1,
    resizeMode:'contain'
  },
  titleContainer:{
    height:50,
    backgroundColor:MyColors.primary,
    borderBottomLeftRadius:18,
    borderBottomRightRadius:18,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'white'
  }
});
