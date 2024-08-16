import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from '../../../utils/color/color';

const Button = ({ label, onPress, style, textStyle, ...props }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TouchableOpacity 
                style={[styles.button, style]} 
                onPress={onPress} 
                {...props}
            >
                <Text style={[styles.buttonText, textStyle]}>
                    {props.children || 'Button'}
                </Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default Button;
