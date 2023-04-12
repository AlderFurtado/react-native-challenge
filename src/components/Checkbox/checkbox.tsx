import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface CheckboxProps {
    isChecked: boolean
}

const Checkbox = ({isChecked}:CheckboxProps):JSX.Element => {
  return <>
    {isChecked ? 
    <Feather name="x-square" size={24} color="black" />
    : <Feather name="square" size={24} color="black" />
    }
  </>;
}

export default Checkbox;