import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import PlanText from '../PlanText/planText';
import { theme } from '../../styles/styles';

interface SelectSquareProps extends TouchableOpacityProps{
    title:string,
    isSelected: boolean
}

const SelectSquare = ({title,isSelected, ...props}:SelectSquareProps):JSX.Element => {
  return <TouchableOpacity style={[styles.container,{backgroundColor: isSelected ? "#F7EFFF": theme.colors.while}]} {...props}>
    <PlanText style={{color: isSelected ?  theme.colors.colorPrimary : theme.colors.darkGrey  }}>{title}</PlanText>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
    container: {
        width:35,
        height:35,
        justifyContent:"center",
        alignItems:"center",
        padding:4
    }
})

export default SelectSquare;