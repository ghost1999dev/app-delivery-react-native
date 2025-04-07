import React,{useState} from "react"
import { Alert,Modal,StyleSheet,Text,Pressable, View } from "react-native"
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { RoundedButton } from "./RoundedButton";


interface Props{
    onPickCamera:()=> void
    onPickGallery:()=> void,
    modalUseState:boolean,
    setModalUseState:React.Dispatch<React.SetStateAction<boolean>>
}
 export const ModalPickImage = ({onPickCamera,onPickGallery,modalUseState,setModalUseState}:Props) => {
  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalUseState}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalUseState(!modalUseState);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Escoge una una opcion</Text>
          <View style={styles.buttonContainer}>
            <RoundedButton
              text="Take a photo"
              onPress={()=>{
                onPickCamera()
                setModalUseState(false)
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <RoundedButton
              text="Choose a image"
              onPress={()=>{
                onPickGallery()
                setModalUseState(false)
              }}
            />
          </View>
          
        </View>
      </View>
    </Modal>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalUseState(true)}>
      <Text style={styles.textStyle}>Show Modal</Text>
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width:250,
    height:250,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop:35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer:{
    width:200,
    marginTop:15
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
