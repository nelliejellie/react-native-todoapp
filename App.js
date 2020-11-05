import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import AddTodo from './components/addTodo';
import { AntDesign } from '@expo/vector-icons';


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

  // function to add new item to todo list
  const submitHandler = (text) =>{
    if(text.length > 4){
      setTodo((prevTodo) => {
        return [
          {day: text, key: Math.random().toString() },
          ...prevTodo
        ]
      })
    }else{
      Alert.alert('Error', 'add more chracters',[
        {text:'Close', onPress:()=> console.log('alert closed')}
      ])
    }
    
  }

  return (
    // wrapped with touchablewithoutfeedback to create a keyboard dismiss function
    // <TouchableWithoutFeedback onPress={()=>{
    //   console.log('someone touched me')
    //   Keyboard.dismiss()
    // }}>
      <View style={styles.container}>
          <Header />
        <View style={styles.list}>
          <AddTodo submithandler={submitHandler}/>
          <View style={styles.content}>
            {/* flatlist for creating functional list items */}
            <FlatList
              data = {todo}
              renderItem = {({item})=>(
              <TouchableOpacity >  
                <View style={styles.text}>
                  <AntDesign name="delete" size={24} color="black" onPress={() => deleteTodo(item.key)} />
                  <Text >{item.day}</Text>
                </View>
              </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    // </TouchableWithoutFeedback>
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
    flexDirection:'row',
    justifyContent:'space-between',
  }
});
