import React from 'react';
import { View } from 'react-native';

export default function Separator ({height = 15}) {
    return (
        <View style={{height: height}} />
    );
}

