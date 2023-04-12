import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import Title from '../components/Title/title';
import TextField from '../components/TextField/textField';
import Button from '../components/ButtonPrimary/buttonPrimary';
import ButtonPrimary from '../components/ButtonPrimary/buttonPrimary';
import PlanText from '../components/PlanText/planText';
import Space from '../components/Space/space';
import { theme } from '../styles/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mock } from '../../mock';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../features/userInfo/userInfo';
import { RootState } from '../../store';

const LoginPage = (): JSX.Element => {
  const userInfo = useSelector((state: RootState) => state.userInfo)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigation = useNavigation()

  const dispatch = useDispatch()

  function handleLogin(){
    if(email === mock.login.email && password === mock.login.password){
      dispatch(getInfo(mock.userInfo))
      setTimeout(() => {
        console.log(userInfo)
      },2000)
    
      return
    }
    return Alert.alert("Something Wrong","Credentials invalid")
  }
  
  return <View style={styles.container}>
    <Space distance={20}/>
    <Title>Login</Title>
    <Space distance={34}/>
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
    <Space distance={37}/>
    <ButtonPrimary text='Login' onPress={handleLogin}/>
    <Space distance={13}/>
    <PlanText style={{color:theme.colors.darkGrey}}>Don’t have an account? 
        <PlanText onPress={() => {navigation.navigate("Register" as never)}} style={{textDecorationLine:"underline",color:theme.colors.darkGrey}}> Sign up </PlanText> 
    here</PlanText>
  </View>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        alignItems:"center"
    }
})

export default LoginPage;