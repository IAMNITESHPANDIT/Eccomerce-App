import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';

function PopUp({ modalVisible, setModalVisible, onUpdate, name }) {
  const [inputValue, setInputValue] = useState(name);

  const handleUpdate = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Input cannot be empty.');
      return;
    }
    onUpdate(inputValue);
    setInputValue('');
    setModalVisible(false);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Update Item</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new value"
              onChangeText={setInputValue}
              value={inputValue}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>handleUpdate(name)}
            >
              <Text style={styles.textStyle}>Update</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    zIndex: 100
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonCancel: {
    backgroundColor: '#f44336',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default PopUp;
