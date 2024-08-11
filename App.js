import { StatusBar } from 'expo-status-bar';
import { useState , useEffect  } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView, FlatList } from 'react-native';
import Item from './components/Item';
import PopUp from './components/popUp';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [listOfItems, setListOfItems] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const addItem = () => {
    if (inputText.trim() === '') return;
    setListOfItems((prev) => [...prev, { id: Date.now().toString(), name: inputText.trim() }]);
    setInputText('');
  }

  const onOpenModel = (id) => {
    const {name} = listOfItems.find(item => item.id === id);
    setName(name);
    setActiveId(id);
    setModalVisible(true)
  }

  const onUpdate = (text) => {
    setListOfItems(item=> item.map(newItem=> newItem.id===activeId ? {id: newItem.id, name:text} : newItem))
  }

  const onDelete = (id) => {
    setListOfItems((item)=> item.filter(it=> it.id !== id))
  }

  useEffect(() =>{
    console.log(listOfItems)
  },[listOfItems])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter item"
          onChangeText={newText => setInputText(newText)}
          value={inputText}
        />
        <Pressable
          onPress={addItem}
          style={({ pressed }) => [
            styles.addButton,
            pressed ? styles.buttonPressed : null
          ]}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      
      <FlatList
        data={listOfItems}
        renderItem={({ item }) => <Item key={item.id} id={item.id} title={item.name} onDelete={onDelete} onOpenModel={onOpenModel} />}
        keyExtractor={({id}) =>id}
        contentContainerStyle={styles.listContainer}
      />
      <StatusBar style="auto" />
      {modalVisible && 
      <PopUp modalVisible={modalVisible} setModalVisible={setModalVisible} onUpdate={onUpdate} name={name}/>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop:25
  },
  inputText: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    height: 40,
    backgroundColor: '#0f4c75',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#083a5e',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'sans-serif-light',
  },
  listContainer: {
    paddingTop: 10,
  },
});
