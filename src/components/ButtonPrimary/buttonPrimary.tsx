import React from 'react';
import { StyleSheet, View,Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/styles';

interface ButtonPrimaryProps extends TouchableOpacityProps{
    text:string 
}

const ButtonPrimary = ({text, ...props}:ButtonPrimaryProps): JSX.Element => {
  return <TouchableOpacity style={styles.container} {...props}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>;
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:theme.colors.colorPrimary,
        alignItems: "center",
        height: 52,
        width: "100%",
        borderRadius:4,
        paddingVertical: 16,
        paddingHorizontal: 32,
    },

    text: {
        color:"#FFFFFF",
        fontSize:16,
        fontWeight: "500",
        fontFamily: 'Sora'
    }
})
export default ButtonPrimary;