import React from "react";
import { KeyboardType, StyleSheet, View, Image, TextInput } from "react-native";
interface Props {
  image: any;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}
export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
  return (
    <View style={styles.formInput}>
      <Image
        style={styles.formInputImageEmail}
        source={image}
      ></Image>
      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
