import React from 'react';
import { StyleSheet, View } from 'react-native';

interface SpaceProps {
    horizontal?: boolean,
    distance: number
}

const Space = ({horizontal,distance}:SpaceProps):JSX.Element => {
    if(horizontal){
        return  <View style={{width:distance}} />
    }

    return <View style={{height:distance}}/>;
}


export default Space;