import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";


export default function Todos({item, pressHandler}) {
    return (
        <TouchableOpacity style={styles.item} onPress={()=>pressHandler(item.key)}>
            <Text>{item.text}</Text>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
        item: {
            padding: 16,
            marginTop: 16,
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#bbb'
        }

    })
;