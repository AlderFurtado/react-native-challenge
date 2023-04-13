import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import HeaderAccount from '../components/HeaderAccount/headerAccount';
import CardTips from '../components/CardTips/cardTips';
import CardFund from '../components/CardFund/cardFund';
import { Feather } from '@expo/vector-icons';
import Title from '../components/Title/title';
import Space from '../components/Space/space';
import CardFaq from '../components/CardFaq/cardFaq';
import { FontAwesome } from '@expo/vector-icons';
import { mock } from '../../mock';

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
                data={mock.funds}
                renderItem={({item}) => {
                    const icon = () => {
                        if(item.name === "wind fund"){
                            return <Feather name="wind" size={12} color="blue" />
                        }else if(item.name === "solar fund"){
                            return <Feather name="sun" size={12} color="yellow" />
                        }else if(item.name === "natural fund"){
                            return <FontAwesome name="tree" size={12} color="green" />
                        }
                    }
                    return  <CardFund 
                                icon={icon()} 
                                name={item.name} 
                                value={item.price} 
                                increaseByPorcente={item.increaseByPorcent}
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
                data={mock.faq}
                renderItem={({item}) => {
                    return  <CardFaq title={item}/>
                }}
            />
        </ScrollView>
      </View>
  );
}

export default HomePage;