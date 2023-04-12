import React from 'react';
import { StyleSheet, View,Text, TouchableOpacityProps } from 'react-native';
import { theme } from '../../styles/styles';

interface ButtonPrimaryProps extends TouchableOpacityProps{
    text:string 
}

const ButtonPrimary = ({text}:ButtonPrimaryProps): JSX.Element => {
  return <View style={[styles.container,]}>
    <Text style={styles.text}>{text}</Text>
  </View>;
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