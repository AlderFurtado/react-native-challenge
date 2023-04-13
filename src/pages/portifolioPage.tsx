import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../components/Title/title';
import PlanText from '../components/PlanText/planText';

const PortfolioPage = ():JSX.Element => {
  return <SafeAreaView style={{alignItems:"center",justifyContent:"center",flex:1,padding:20}}>
    <Title>Portfolio</Title>
    <PlanText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum distinctio et itaque reiciendis illum sit impedit minima accusantium aspernatur eaque fugiat saepe velit ipsum eligendi nostrum enim, incidunt delectus!</PlanText>
  </SafeAreaView>;
}

export default PortfolioPage;