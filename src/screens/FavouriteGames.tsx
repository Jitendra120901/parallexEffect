import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CoustomHeader from '../component/header/CoustomHeader';

const FavouriteGames = () => {
  return (
    <View>
      <CoustomHeader
        name={''}
        iconName={'menu'}
        handleSearch={function (): void {
          throw new Error('Function not implemented.');
        }}
        numberOfItems={0}
      />
      <Text>FavouriteGames</Text>
    </View>
  );
};

export default FavouriteGames;

const styles = StyleSheet.create({});
