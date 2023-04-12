import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from '../components/Title/title';
import TextField from '../components/TextField/textField';
import Button from '../components/ButtonPrimary/buttonPrimary';
import ButtonPrimary from '../components/ButtonPrimary/buttonPrimary';
import PlanText from '../components/PlanText/planText';
import Space from '../components/Space/space';
import { theme } from '../styles/styles';
import Checkbox from '../components/Checkbox/checkbox';

// import { Container } from './styles';

const RegisterPage = (): JSX.Element => {
  return <View style={styles.container}>
    <Space distance={20}/>
    <Title>Create your account</Title>
    <Space distance={34}/>
    <TextField label='First Name'/>
    <Space distance={20}/>
    <TextField label='Last Name'/>
    <Space distance={20}/>
    <TextField label='Email' keyboardType='email-address'/>
    <Space distance={20}/>
    <TextField label='Password' isPassword/>
    <Space distance={20}/>
    <View style={{flexDirection:"row"}}>
        <Checkbox isChecked={false}/>
        <Space distance={10} horizontal/>
        <PlanText style={{color:theme.colors.darkGrey, flexShrink:1}}>I am over 18 years of age and I have read and agree to the 
        <PlanText style={{color:theme.colors.black}}> Terms of Service </PlanText> 
        and<PlanText style={{color:theme.colors.black}}> Privacy policy</PlanText>.
    </PlanText>

    </View>
 
    <Space distance={37}/>
    <ButtonPrimary text='Login'/>
    <Space distance={13}/>
  </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        alignItems:"center"
    }
})

export default RegisterPage;