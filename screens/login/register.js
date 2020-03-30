import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default RegisterPage = () => {
    return (
        <View style={style.container}>
            <Text>Resgiter Page!</Text>
            <Text>Username: </Text>
            <TextInput 
            style={{height: 40}}
            placeholder="Type here Username"
            ></TextInput>
            <Text>Password: </Text>
            <TextInput 
            style={{height: 40}}
            placeholder="Type here Password"
            ></TextInput>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        fontSize: 20,
        padding: 10,
    }
})