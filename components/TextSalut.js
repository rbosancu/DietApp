import React from 'react';
import { View, Text } from 'react-native';
import { personalizare } from '../theme/mainTheme';

export default function TextSalut ({mesaj, stil})
{
    return (
        <Text style={stil ? stil : personalizare.textPrezentare}>{mesaj}</Text>
    );
}