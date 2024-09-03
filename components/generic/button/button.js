import React from 'react';

import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './style';

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


export default Button;
