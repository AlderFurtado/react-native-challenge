import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../Title/title';
import { Feather } from '@expo/vector-icons';
import PlanText from '../PlanText/planText';
import { theme } from '../../styles/styles';
import ButtonSecondary from '../ButtonSecondary/buttonSecondary';
import ButtonTertiary from '../ButtonTertiary/buttonTertiary';
import Space from '../Space/space';
import ButtonPrimary from '../ButtonPrimary/buttonPrimary';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SessionPortifolio = (): JSX.Element => {
  return <View>
    <View style={{flexDirection:"row"}}>
        <Feather name="pie-chart" size={20} color="black" />
        <Title>Your Portfolio</Title>
    </View>
    <Space distance={20}/>
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={styles.portifolioText}>18 credits</Text>
        <Text style={styles.portifolioText}>$328.14</Text>
    </View>
    <Space distance={4}/>
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{flexDirection:"row", }}>
            <MaterialCommunityIcons name="arrow-top-right" size={14} color={theme.colors.green} />
            <PlanText style={{color:theme.colors.green}}>8.41%</PlanText>
        </View>
        <PlanText style={{color:theme.colors.darkGrey}}>Last purchase 28d ago</PlanText>
    </View>
    <Space distance={18}/>
    <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
            <ButtonSecondary text='Sell'/>
        </View>
        <Space distance={10} horizontal/>
        <View style={{flex:1}}>
            <ButtonTertiary text='Retire credits'/>
        </View>
    </View>
    <Space distance={15}/>
    <PlanText style={{color:theme.colors.darkGrey,fontSize:11}}>You've previously retired 28 credits of this asset</PlanText>
    <Space distance={40}/>
    <View style={{backgroundColor:"#F4F4F4",padding:10}}>
        <PlanText style={{color:theme.colors.darkGrey}}>Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order.{"\n\n"} 
        The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.</PlanText>
    </View>
    <Space distance={30}/>
    <ButtonPrimary text='Buy'/>
  </View>;
}

const styles = StyleSheet.create({
    portifolioText: {
        fontFamily: 'Sora-Bold',
        fontSize:24,
    },
})


export default SessionPortifolio;