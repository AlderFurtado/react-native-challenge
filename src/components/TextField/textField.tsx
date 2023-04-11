import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { theme } from '../../styles/styles';
import { Feather } from '@expo/vector-icons';

interface TextFieldProps extends TextInputProps{
    label?:string,
    isPassword?: boolean
}


const TextField = ({label, isPassword ,...props}: TextFieldProps): JSX.Element => {
    const [isSecret, setIsSecret] = useState(isPassword)
    return <View style={styles.container}>
    <Text style={styles.label}>
        Password
    </Text>
    <TextInput 
        style={styles.containerTextInput}
        {...props}
        secureTextEntry={isSecret}
    />
    {isPassword && <>
        <TouchableOpacity style={styles.icon} onPress={() => setIsSecret(!isSecret)}>
            {isSecret ? <Feather name="eye" size={24} color={theme.colors.darkGrey}  />  : <Feather name="eye-off" size={24} color={theme.colors.darkGrey}  /> }
        </TouchableOpacity>
    </>}
   
    </View>;
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
    },
    containerTextInput: {
        height: 48,
        width:"100%",
        borderRadius: 4,
        backgroundColor: "#F4F4F4",
        paddingHorizontal:10,
        paddingVertical: 15,
        fontWeight: "500",
        fontFamily: 'Sora'
    },
    label: {
        color: theme.colors.labelColor,
        fontSize:11,
        marginBottom:4,
        fontFamily: 'Sora'
    },
    icon: {
        color: theme.colors.darkGrey,
        position: "absolute",
        right:10,
        top:30
    }
})

export default TextField;