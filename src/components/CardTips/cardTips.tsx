import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/styles';
import Space from '../Space/space';

const CardTips = ():JSX.Element => {
  return <View style={styles.container}>
    <View style={{flex:2, paddingRight:100}}>
        <Text style={styles.title}>
        Learn more about carbon credits
        </Text>
        <Space distance={10}/>
        <Text style={styles.subtitle}>
        Check out our top tips!
        </Text>
    </View>
    <View style={{flex:1, alignItems:"flex-end"}}>
        <Image source={require("../../../assets/business-statistics.png")}/>
    </View>
  </View>;
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor: theme.colors.colorPrimary,
        borderRadius:4,
        flexDirection:'row',
        padding:20,
        alignItems:"center"
    },

    title:{
        fontSize:16,
        color:theme.colors.while,
        fontFamily:"Sora-Bold"
    },

    subtitle:{
        fontSize:12,
        color:theme.colors.while,
        fontFamily:"Sora-Regular"
    }
})

export default CardTips;