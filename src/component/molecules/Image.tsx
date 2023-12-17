import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlusIcon from 'react-native-vector-icons/AntDesign';
// import Search from 'react-native-vector-icons/EvilIcons';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.86;
const ITEM_HEIGHT = height * 0.47;

const Image = ({inputrange, scrollX, item}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Detail', (imageurl = {item}));
  };
  const translateX = scrollX.interpolate({
    inputRange: inputrange,
    outputRange: [-width * 0.7, 0, width * 0.7],
  });

  return (
    <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.imageMainView}>
        <Pressable style={styles.imagePresseble} onPress={handleNavigate}>
          <Animated.Image
            source={{uri: item}}
            resizeMode="cover"
            style={[
              styles.imageStyle,
              StyleSheet.create({transform: [{translateX}]}),
            ]}
          />
        </Pressable>
        <View style={styles.plusSignStyle}>
          <PlusIcon name="pluscircle" size={33} color={'lightblue'} />
        </View>
      </View>
    </View>
  );
};

export default Image;

const styles = StyleSheet.create({
  imageMainView: {
    // borderRadius: 10,
    // borderWidth: 5,
    borderColor: 'white',
    shadowColor: '#D5D8DC',
    shadowOpacity: 12,
    shadowRadius: 7,
    shadowOffset: {
      height: 1.5,
      width: 2.5,
    },
    elevation: 8,
  },
  plusSignStyle: {
    position: 'absolute',
    bottom: 35,
    right: 20,
  },
  imageStyle: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 17,
  },

  imagePresseble: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    overflow: 'hidden',
    alignItems: 'center',
  },
});
