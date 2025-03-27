import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require("../../../../assets/chef.png")}
      />
      {/**CONTENEDOR DE LA IMAGEN DEL LOGO Y EL TEXTO */}
      {/**<View style={styles.logoContainer}>
        <Image 
          style={styles.logoImage}
          source={require('../../../../assets/logo.png')}
        />
        <Text style={styles.logoText}>
          Just Eat
        </Text>
      </View>**/}

      <View style={styles.form}>
        <Text style={styles.formText}>Log in to login</Text>

        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Correo electronico"
          keyboardType="email-address"
          value={email}
          property="email"
          onChangeText={onChange}
        />
        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={onChange}
          property="password"
        />
        
        <View style={{ marginTop: 30 }}>
          <RoundedButton text="Log up" onPress={print} />
        </View>
        <View style={styles.containerText}>
          <Text>Don't have account ?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  form: {
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  formText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    marginLeft: 15,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formInputImageEmail: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "15%",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },

  containerText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  signUpText: {
    marginLeft: 10,
    color: "orange",
    fontStyle: "italic",
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    fontWeight: "bold",
  },
});

export default HomeScreen;
