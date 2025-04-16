import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import useViewModel from "./ViewModel";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { useNavigation } from "@react-navigation/native";
type NavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProfileInfoScreen"
>;
export const ProfileInfoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { removeSession } = useViewModel();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.imageHeader}
          source={{
            uri: "https://st2.depositphotos.com/2105065/9422/i/450/depositphotos_94228438-stock-photo-dark-blue-background.jpg",
          }}
        />
        <View style={styles.headerProfileContainer}>
          <Image
            style={styles.imageProfile}
            source={{
              uri: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
            }}
          />
          <Text style={styles.countText}>Tu cuenta</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui
          debitis, cum provident quis voluptatibus ipsam mollitia, voluptate
          adipisci culpa eveniet nemo, ad quo ipsum ullam nihil reiciendis alias
          earum.
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Informacion</Text>
        <View style={styles.infoItem}>
            <Text style={styles.valueDesign}>Biografia</Text>
            <Text>I'm user that like the comunities</Text>
        </View>
        <View style={styles.infoItem}>
            <Text style={styles.valueDesign}>Año</Text>
            <Text>25 years old</Text>
        </View>
        <View style={styles.infoItem}>
            <Text style={styles.valueDesign}>Genero</Text>
            <Text>Male</Text>
        </View>
        <View style={styles.infoItem}>
            <Text style={styles.valueDesign}>Se unio</Text>
            <Text>March, 4 2023</Text>
        </View>
        <View style={styles.infoItem}>
            <Text style={styles.valueDesign}>Direccion</Text>
            <Text>California</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
  headerContainer: {
    alignItems: "center",
  },
  imageHeader: {
    width: "100%",
    height: 150,
  },
  headerProfileContainer: {
    alignItems: "center",
    marginTop: -50,
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },
  countText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  bioContainer: {
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    margin:20,
    backgroundColor: "#f2f2f2",
    borderRadius:10,
    marginTop:10
  },
  infoText:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:10
  },
  infoItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  valueDesign:{
    color:'#A0A0A0',
    fontSize:15
  },

});
