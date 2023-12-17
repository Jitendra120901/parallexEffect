/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Search from 'react-native-vector-icons/EvilIcons';
import GameIcon from 'react-native-vector-icons/FontAwesome';
// import TextExtended from '../../components/atoms/texts/AppText';

type SettingHeaderProps = {
  name: string;
  iconName: string;
  handleSearch: () => void;
  numberOfItems: number;
};

const CoustomHeader: React.FC<SettingHeaderProps> = ({
  name,
  iconName,
  handleSearch,
  numberOfItems,
}) => {
  return (
    <View style={styles.setting_menu_top}>
      <View style={styles.setting_icon}>
        <Pressable style={styles.menuAndGameIcon}>
          <FeatherIcon name={iconName} size={27} color="blue" />
          <GameIcon name={'gitlab'} size={23} color="blue" />
        </Pressable>
      </View>
      <View style={styles.searchAndshop}>
        <FeatherIcon name={'shopping-cart'} size={23} color="blue" />
        {numberOfItems > 0 && (
          <View
            style={styles.budgeContainer}>
            <Text style={styles.budgeText}>
              {numberOfItems}
            </Text>
          </View>
        )}
        <Pressable onPress={() => handleSearch()}>
          <Search name="search" size={32} color={'blue'} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setting_menu_top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 30,
  },
  setting_icon: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 17,
  },
  setting_text: {
    color: 'black',
    fontSize: 20,
  },
  searchAndshop: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuAndGameIcon: {
    width: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  budgeContainer:{
    backgroundColor: 'red',
    height: 17,
    width: 17,
    borderRadius: 8.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  budgeText:{
    color: 'white', 
  textAlign: 'center',alignItems:"center",
  
}
});

export default CoustomHeader;
