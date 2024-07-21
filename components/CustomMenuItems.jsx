import React from 'react'
import { Text, View } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from "react-native-popup-menu";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const MenuItem = ({text, action, value, icon}) => {
  return (
    <MenuOption>
        <View className='px-4 py-1 flex-row justify-between items-center'>
            <Text style={{fontSize: hp(1.7)}} className='font-semibold text-neutral-600'>Text</Text>
            {icon}
        </View>
    </MenuOption>
  )
}

export default MenuItem