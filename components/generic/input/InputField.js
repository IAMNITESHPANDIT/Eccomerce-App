import React from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = ({ label, ...props }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label, props?.labelStyle]}>{label}</Text>}
            <TextInput 
                style={[styles.input, props.style]} 
                placeholderTextColor={props.style.placeholderTextColor ? props.style.placeholderTextColor : styles.placeholderTextColor}
                {...props} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    placeholderTextColor: 'black',
});

export default InputField;
``