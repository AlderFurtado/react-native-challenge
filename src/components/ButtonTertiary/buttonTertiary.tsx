import React from 'react';
import { StyleSheet, View,Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/styles';

interface ButtonTertiaryProps extends TouchableOpacityProps{
    text:string 
}

const ButtonTertiary = ({text, ...props}:ButtonTertiaryProps): JSX.Element => {
  return <TouchableOpacity style={styles.container} {...props}>
  <Text style={styles.text}>{text}</Text>
</TouchableOpacity>
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:theme.colors.green,
        alignItems: "center",
        height: 52,
        width: "100%",
        borderRadius:4,
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderColor:theme.colors.grey,
        borderWidth:1
    },

    text: {
        color:theme.colors.while,
        fontSize:16,
        fontWeight: "500",
        fontFamily: 'Sora'
    }
})
export default ButtonTertiary;