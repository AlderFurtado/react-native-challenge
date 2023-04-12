import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../styles/styles';
import { AntDesign } from '@expo/vector-icons';
import PlanText from '../PlanText/planText';
import Space from '../Space/space';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderAccount = (): JSX.Element => {
  return <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.firstContainer}>
                    <AntDesign name="user" size={24} color="black" />
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text  style={styles.accountText}>Account: $1,457.23</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </View>
                    <AntDesign name="bells" size={24} color="black" />
                </View>
                <Space distance={16}/>
                <PlanText style={{fontSize:14}}>Portifolio</PlanText>
                <View style={styles.secondContaienr}>
                    <View style={{flexDirection:"row", alignItems:"flex-end"}}>
                        <Text style={styles.portifolioText}>$1,245.23</Text>
                        <Space distance={4} horizontal/>
                        <MaterialCommunityIcons name="arrow-top-right" size={14} color={theme.colors.green} />
                        <PlanText style={{color:theme.colors.green}}>31.82%</PlanText>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name="coins" size={12} color={theme.colors.colorPrimary} />
                        <Space distance={4} horizontal/>
                        <Text style={styles.iconText}>Earn Rewards</Text>
                    </View>
                </View> 
            </View>
        </SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        borderBottomColor: theme.colors.grey,
        borderBottomWidth: 1,
        paddingBottom:30,
    },

    firstContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    accountText: {
        fontSize: 14,
        fontFamily: 'Sora-Medium',

    },

    secondContaienr:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    portifolioText: {
        fontFamily: 'Sora-Bold',
        fontSize:24,
    },

    iconContainer: {
        flexDirection:"row",
        backgroundColor:"#F7EFFF",
        alignItems:"center",
        padding: 10,
        borderRadius:4,
    },

    iconText: {
        color:theme.colors.colorPrimary,
        fontFamily: 'Sora-Medium',
        fontSize:12
    }
})

export default HeaderAccount;