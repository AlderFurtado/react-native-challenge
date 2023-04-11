import React from 'react';
import { StyleSheet, TextProps, Text } from 'react-native';


interface PlanTextProps extends TextProps {}

const PlanText = ({children,style}: PlanTextProps): JSX.Element => {
  return <Text style={[styles.planText,style]}>{children}</Text>
}
const styles = StyleSheet.create({
    planText: {
        fontSize:12,
        fontWeight:"600",
        fontFamily: 'Sora'
    }
})


export default PlanText;