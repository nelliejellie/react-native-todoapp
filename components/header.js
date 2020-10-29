import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'yellow',
      height:80,
      
    },
    text:{
        textAlign:'center',
        lineHeight:80,
    }
  });