import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import Title from '../components/Title/title';
import TextField from '../components/TextField/textField';
import Button from '../components/ButtonPrimary/buttonPrimary';
import ButtonPrimary from '../components/ButtonPrimary/buttonPrimary';
import PlanText from '../components/PlanText/planText';
import Space from '../components/Space/space';
import { theme } from '../styles/styles';
import Checkbox from '../components/Checkbox/checkbox';
import { useDispatch } from 'react-redux';
import { getInfo } from '../features/userInfo/userInfo';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const RegisterPage = (): JSX.Element => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isOver18, setIsOver18] = useState(false)

    const dispatch = useDispatch()

    const navigation = useNavigation()

    function handleRegister(){
        if(validateForm()){
            dispatch(getInfo({email,firstName,lastName,isOver18,password}))
            Alert.alert("Register has succeeded")
            navigation.navigate("Login" as never)
        }
    }

    function validateForm(){
        if(!isOver18){
            return Alert.alert("Something wrong","You need been over 18 years")
        }
        if(email.trim().length === 0 || password.trim().length === 0 || firstName.trim().length === 0 || lastName.trim().length === 0){
            return Alert.alert("Something wrong","All fields are required")
        }
        if(password.trim().length < 8){
            return Alert.alert("Something wrong","Password has must than 7 characters")
        }
        return true
    }
  return <View style={styles.container}>
    <Space distance={20}/>
    <Title>Create your account</Title>
    <Space distance={34}/>
    <TextField 
        label='First Name' 
        onChangeText={setFirstName} 
        value={firstName}
    />
    <Space distance={20}/>
    <TextField 
        label='Last Name'
        onChangeText={setLastName} 
        value={lastName}
    />
    <Space distance={20}/>
    <TextField 
      label='Email' 
      keyboardType='email-address' 
      autoCapitalize='none'
      value={email}
      onChangeText={setEmail}
    />
    <Space distance={20}/>
    <TextField 
      label='Password' 
      isPassword placeholder='Minimum 8 characters'
      value={password}
      onChangeText={setPassword}
    />
    <Space distance={20}/>
    <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => setIsOver18(!isOver18)}>
            <Checkbox isChecked={isOver18}/>
        </TouchableOpacity>
        <Space distance={10} horizontal/>
        <PlanText style={{color:theme.colors.darkGrey, flexShrink:1}}>I am over 18 years of age and I have read and agree to the 
        <PlanText style={{color:theme.colors.black}}> Terms of Service </PlanText> 
        and<PlanText style={{color:theme.colors.black}}> Privacy policy</PlanText>.
    </PlanText>

    </View>
 
    <Space distance={37}/>
    <ButtonPrimary text='Login' onPress={handleRegister} disabled={!isOver18} />
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