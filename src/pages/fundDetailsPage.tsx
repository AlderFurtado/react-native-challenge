import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PlanText from '../components/PlanText/planText';
import { theme } from '../styles/styles';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import SelectSquare from '../components/SelectSquare/selectSquare';
import Space from '../components/Space/space';
import CardInfoStats from '../components/CardInfoStats/cardInfoStats';
import SessionFundBreakdown from '../components/SessionFundBreakdown/sessionFundBreakdown';
import SessionPortifolio from '../components/SessionPortifolio/sessionPortfolio';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
const screenWidth = Dimensions.get("window").width;

enum Period {
    hour="1h",
    day="1d",
    week="1w",
    month="1m",
    year="1y",
    all="All"
}

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false // optional
  };

const FundDetailsPage = () => {
    const fundInfo = useSelector((state: RootState) => state.fundInfo)

    const [periodSelected,setPeriodSelected] = useState<Period>(Period.hour)

    function handlePeriod(period: Period){
        setPeriodSelected(period)
    }

    

    const data = fundInfo.charts as any
  return <SafeAreaView>
     <ScrollView>
            <View>
                <View style={{flexDirection: "row",justifyContent:"space-between",paddingHorizontal:20}}>
                    <View>
                        <Text style={styles.portifolioText}>${fundInfo.price}</Text>
                        <PlanText style={{color:theme.colors.green}}>{fundInfo.increaseByPorcent}%($1.21)</PlanText>
                    </View>
                    <Text style={styles.portifolioText}>{fundInfo.year}</Text>
                </View>
                <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                />
            </View>
            <FlatList
                contentContainerStyle={{
                    paddingLeft:20
                }}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <Space distance={25} horizontal/>}
                horizontal
                data={["1h","1d","1w","1m","1y","All"]}
                keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return <SelectSquare title={item} isSelected={item == periodSelected} onPress={() => handlePeriod(item as Period)}/>
                }}
            />
            <Space distance={40}/>
            <View style={{paddingHorizontal:20}}>
                <CardInfoStats/>
            </View>
            <Space distance={40}/>
            <View style={{paddingHorizontal:20}}>
                <SessionFundBreakdown/>
            </View>
            <Space distance={60}/>
            <View style={{paddingHorizontal:20}}>
                <SessionPortifolio/>
            </View>
           </ScrollView>
        </SafeAreaView> 
}

const styles = StyleSheet.create({
    portifolioText: {
        fontFamily: 'Sora-Bold',
        fontSize:24,
    },
})

export default FundDetailsPage;