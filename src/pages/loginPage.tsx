import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../components/Title/title';
import TextField from '../components/TextField/textField';
import Button from '../components/ButtonPrimary/buttonPrimary';
import ButtonPrimary from '../components/ButtonPrimary/buttonPrimary';
import PlanText from '../components/PlanText/planText';
import Space from '../components/Space/space';
import { theme } from '../styles/styles';

// import { Container } from './styles';

const LoginPage = (): JSX.Element => {
  return <View style={styles.container}>
    <Space distance={20}/>
    <Title>Login</Title>
    <Space distance={34}/>
    <TextField label='Email' keyboardType='email-address'/>
    <Space distance={20}/>
    <TextField label='Password' isPassword/>
    <Space distance={37}/>
    <ButtonPrimary text='Login'/>
    <Space distance={13}/>
    <PlanText style={{color:theme.colors.darkGrey}}>Don’t have an account? Sign up here</PlanText>
  </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        alignItems:"center"
    }
})

export default LoginPage;