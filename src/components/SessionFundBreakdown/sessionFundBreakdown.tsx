import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../Title/title';
import Space from '../Space/space';
import { theme } from '../../styles/styles';
import PlanText from '../PlanText/planText';

enum Catogories {
    Highlighted ="Highlighted",
    Value="Value",
    Vintage="Vintage",
    Registry="Registry"
}

const SessionFundBreakdown = (): JSX.Element => {

   const [selectedCategory,setSelectedCategory] = useState<Catogories>(Catogories.Highlighted)

   function handleSelectCategory(category: Catogories){
        setSelectedCategory(category)
   }

  return <View>
    <Title>Fund Breakdown</Title>
    <Space distance={20} />
    <View style={{flexDirection:"row"}}>
        <TouchableOpacity 
            onPress={() => handleSelectCategory(Catogories.Highlighted)}
            style={{borderBottomColor: selectedCategory == Catogories.Highlighted ? theme.colors.colorPrimary :  theme.colors.while ,borderBottomWidth:2,paddingBottom:6}}
        >
            <Text style={[styles.textItem, {color: selectedCategory == Catogories.Highlighted ? theme.colors.black : theme.colors.darkGrey}]}>Highlighted</Text>
        </TouchableOpacity>
        <Space distance={20} horizontal/>
        <TouchableOpacity 
            onPress={() => handleSelectCategory(Catogories.Value)}
            style={{borderBottomColor: selectedCategory == Catogories.Value ? theme.colors.colorPrimary :  theme.colors.while ,borderBottomWidth:2,paddingBottom:6}}
        >
            <Text style={[styles.textItem, {color: selectedCategory == Catogories.Value ? theme.colors.black : theme.colors.darkGrey}]}>Value</Text>
        </TouchableOpacity>
        <Space distance={20} horizontal/>
        <TouchableOpacity 
            onPress={() => handleSelectCategory(Catogories.Vintage)}
            style={{borderBottomColor: selectedCategory == Catogories.Vintage ? theme.colors.colorPrimary :  theme.colors.while ,borderBottomWidth:2,paddingBottom:6}}
        >
            <Text style={[styles.textItem, {color: selectedCategory == Catogories.Vintage ? theme.colors.black : theme.colors.darkGrey}]}>Vintage</Text>
        </TouchableOpacity>
        <Space distance={20} horizontal/>
        <TouchableOpacity 
            onPress={() => handleSelectCategory(Catogories.Registry)}
            style={{borderBottomColor: selectedCategory == Catogories.Registry ? theme.colors.colorPrimary :  theme.colors.while ,borderBottomWidth:2,paddingBottom:6}}
        >
            <Text style={[styles.textItem, {color: selectedCategory == Catogories.Registry ? theme.colors.black : theme.colors.darkGrey}]}>Registry</Text>
        </TouchableOpacity>
    </View>
    <Space distance={20} />
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.containerCard}>
        <Image source={require("../../../assets/image2.png")} style={{resizeMode:'cover'}}/>
        <View style={styles.containerInfo}>
            <Image source={require("../../../assets/logo1.png")} style={{resizeMode:'cover'}}/>
            <Space distance={10} />
            <PlanText>Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.</PlanText>
            <Space distance={5} />
            <PlanText style={{textDecorationLine:"underline"}}>Read more</PlanText>
        </View>
    </View>
    <Space distance={15} horizontal/>
    <View style={styles.containerCard}>
        <Image source={require("../../../assets/image1.png")} style={{resizeMode:'cover',width:"100%"}}/>
        <View style={styles.containerInfo}>
            <Image source={require("../../../assets/logo2.png")} style={{resizeMode:'cover'}}/>
            <Space distance={10} />
            <PlanText>uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.</PlanText>
            <Space distance={5} />
            <PlanText style={{textDecorationLine:"underline"}}>Read more</PlanText>
        </View>
    </View>
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
    textItem: {
      fontFamily: "Sora-Medium" ,
      fontSize:14, 
    },

    containerCard:{
        width:220,
        borderColor:theme.colors.grey,
        borderWidth:1,
    },
    containerInfo:{
        padding:14,
    }
})

export default SessionFundBreakdown;