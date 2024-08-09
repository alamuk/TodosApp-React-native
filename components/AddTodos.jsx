import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Button} from "react-native";

export default function AddTodos({submitHandler}) {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val);
    }


    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />

            <Button onPress={()=> submitHandler(text)} title='add todo' color='coral'/>

        </View>
    )

}


const styles = StyleSheet.create({
    input: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',


    }
})
