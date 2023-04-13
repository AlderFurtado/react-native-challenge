import React from 'react';
import { View } from 'react-native';
import Title from '../Title/title';
import PlanText from '../PlanText/planText';
import { theme } from '../../styles/styles';
import Space from '../Space/space';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const CardInfoStats = (): JSX.Element => {
    const fundInfo = useSelector((state: RootState) => state.fundInfo)

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
        <RenderElement title='AUM' description={fundInfo.AUM}/>
        <RenderElement title='Issue Date' description={fundInfo.issueDate}/>
    </View>
    <Space distance={18}/>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <RenderElement title='Vintage Range' description={fundInfo.vintageRange}/>
        <RenderElement title='TER'description={fundInfo.TER}/>
    </View>
    <Space distance={18}/>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
        <RenderElement title='Price at Close' description={fundInfo.priceAtClose}/>
        <RenderElement title='Price at Open' description={fundInfo.priceAtOpen}/>
    </View>
  </View>;
}

export default CardInfoStats;