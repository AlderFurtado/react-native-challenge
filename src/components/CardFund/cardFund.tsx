import React from 'react';
import { StyleSheet, Text, TouchableOpacityProps, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { theme } from '../../styles/styles';
import Space from '../Space/space';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface CardFundProps extends TouchableOpacityProps{
    icon: React.ReactNode,
    name: string,
    value: string,
    increaseByPorcente: string
}

const CardFund = ({icon,name,value,increaseByPorcente}:CardFundProps) => {
  return <View style={styles.container}>
    {icon}
    <Space distance={7}/>
    <Text style={styles.title}>{name}</Text>
    <Space distance={14}/>
    <Entypo name="line-graph" size={50} color="black" />
    <Space distance={14}/>
    <View style={{flexDirection:"row"}}>
        <Text style={styles.subtitle}>${value}</Text>
        <Space distance={5} horizontal/>
        <MaterialCommunityIcons name="arrow-top-right" size={14} color={theme.colors.green} />
        <Text style={[styles.subtitle,{color: theme.colors.green}]}>{increaseByPorcente}%</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
    container: {
        width:140,
        borderWidth:2,
        borderColor: theme.colors.grey,
        borderRadius:4,
        padding:12
    },

    title:{
        fontFamily: "Sora-Medium"
    },

    subtitle: {
        fontFamily: "Sora-Regular"
    }
})

export default CardFund;