import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { theme } from '../../styles/styles';

interface CardFaqProps {
    title:string
}

const CardFaq = ({title}:CardFaqProps) => {
  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>;
}

const styles = StyleSheet.create({
    container: {
        width:150,
        height:215,
        backgroundColor: theme.colors.grey,
        borderRadius:4,
        paddingHorizontal:12,
        paddingVertical:21,
    },

    title: {
        fontSize:12,
        fontFamily: "Sora-Medium"
    }
})

export default CardFaq;