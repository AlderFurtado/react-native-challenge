import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import HeaderAccount from '../components/HeaderAccount/headerAccount';
import CardTips from '../components/CardTips/cardTips';
import CardFund from '../components/CardFund/cardFund';
import { Feather } from '@expo/vector-icons';
import Title from '../components/Title/title';
import Space from '../components/Space/space';
import CardFaq from '../components/CardFaq/cardFaq';

const HomePage = ():JSX.Element => {
  return (
    <View>
        <HeaderAccount/>
        <ScrollView>
            <Space distance={20}/>
            <View style={{paddingHorizontal:20}}>
                <Title>Fund</Title>
            </View>
            <Space distance={20}/>
            <FlatList
                contentContainerStyle={{
                    paddingLeft:20
                }}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <Space distance={15} horizontal/>}
                horizontal
                data={[1,2,3,4]}
                renderItem={({item}) => {
                    return <CardFund 
                    icon={<Feather name="wind" size={12} color="blue" />} 
                    name={"WindFund"} 
                    value={1032.23} 
                    increaseByPorcente={3.51}
                />
                }}
            />
            <Space distance={20}/>
            <View style={{paddingHorizontal:20}}>
                <CardTips/> 
            </View>
            <Space distance={20}/>
            <FlatList
                contentContainerStyle={{
                    paddingLeft:20
                }}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <Space distance={15} horizontal/>}
                horizontal
                data={[1,2,3,4]}
                renderItem={({item}) => {
                    return  <CardFaq title='Why should you invest here?'/>
                }}
            />
        </ScrollView>
      </View>
  );
}

export default HomePage;