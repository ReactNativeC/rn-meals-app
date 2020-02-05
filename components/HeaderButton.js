import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { Platform } from 'react-native';


const CustomHeaderButton = props => {
  return (
    <HeaderButton       
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'ios' ? COLORS.primaryColor : 'white' }      
      {...props}
    />
  );
}

export default CustomHeaderButton;