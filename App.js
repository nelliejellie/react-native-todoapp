import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './components/header';
import AddTodo from './components/addTodo';


export default function App() {
  // data passed to the useState hook
  const [todo, setTodo] = useState([
    {day: 'Watch tottenham win', key: '1' },
    {day: 'Watch chelsea and realmadrid win', key: '2'},
    {day: 'Watch psg and man utd win', key:'3'},

  ])

  // function that deletes an item using the key as parameter
  const deleteTodo = (key) => {
    setTodo((prevTodo)=>{
      return prevTodo.filter((item)=>item.key != key)
    })
  }

  const submitHandler = (text) =>{
    setTodo((prevTodo) => {
      return [
        {day: text, key: Math.random().toString() },
        ...prevTodo
      ]
    })
  }

  return (
    <View style={styles.container}>
        <Header />
      <View style={styles.list}>
        <AddTodo submithandler={submitHandler}/>
        <View style={styles.content}>
          {/* flatlist for creating functional list items */}
          <FlatList
            data = {todo}
            renderItem = {({item})=>(
            <TouchableOpacity onPress={() => deleteTodo(item.key)}>  
              <Text style={styles.text}>{item.day}</Text>
            </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:50,
  },
  text:{
    padding:10,
    borderStyle:'dotted',
    borderColor:'red',
    borderWidth:2,
    marginTop:10,
  }
});
