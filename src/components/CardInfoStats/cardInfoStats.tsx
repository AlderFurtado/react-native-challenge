import React from 'react';
import { View } from 'react-native';
import Title from '../Title/title';
import PlanText from '../PlanText/planText';
import { theme } from '../../styles/styles';
import Space from '../Space/space';
import { Ionicons } from '@expo/vector-icons';

const CardInfoStats = (): JSX.Element => {

    function RenderElement({title,description}:{title:string,description:string}){
        return <View style={{flex:1}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <PlanText style={{color:theme.colors.darkGrey}}>{title}</PlanText>
                <Space distance={3} horizontal/>
                <Ionicons name="information-circle-outline" size={12} color={theme.colors.darkGrey} />
            </View>
            <PlanText>{description}</PlanText>
        </View>

    }

  return <View>
    <Title>Info & Stats</Title>
    <Space distance={20}/>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <RenderElement title='AUM' description='$430.88m'/>
        <RenderElement title='Issue Date' description='18/04/2022'/>
    </View>
    <Space distance={18}/>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <RenderElement title='Vintage Range' description='2019 – 2022'/>
        <RenderElement title='TER' description='0.15%'/>
    </View>
    <Space distance={18}/>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
        <RenderElement title='Price at Close' description='$17.68'/>
        <RenderElement title='Price at Open' description='$17.74'/>
    </View>
  </View>;
}

export default CardInfoStats;