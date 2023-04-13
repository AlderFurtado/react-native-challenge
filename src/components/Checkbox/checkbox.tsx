import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../styles/styles';

interface CheckboxProps {
    isChecked: boolean
}

const Checkbox = ({isChecked}:CheckboxProps):JSX.Element => {
  return <>
    {isChecked ? 
    <Feather name="x-square" size={24} color={theme.colors.darkGrey} />
    : <Feather name="square" size={24} color={theme.colors.darkGrey} />
    }
  </>;
}

export default Checkbox;