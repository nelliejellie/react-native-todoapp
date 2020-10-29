import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

export default function AddTodo({submithandler}){
    const [text, setText] = useState('')

    const changeHandler = (val) =>{
        setText(val)
    }
    return(
        <View>
            <TextInput
                placeholder = 'add todo...'
                onChangeText = {changeHandler}
                style = {styles.input}
            />
            <Button title='add todo' color='#7c5151' onPress={()=>{submithandler(text)}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      borderBottomWidth: 2,
      margin: 10,
      padding:10,
    }
  });
