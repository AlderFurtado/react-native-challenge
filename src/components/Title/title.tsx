import React from 'react';
import { TextProps, Text, StyleSheet } from 'react-native';

interface TitleProps extends TextProps {}

const Title = ({children}: TitleProps): JSX.Element => {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize:18,
        fontFamily: 'Sora-Medium'
    }
})

export default Title;