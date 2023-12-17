import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Pressable,
  View,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import CoustomHeader from '../component/header/CoustomHeader';
import {TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.86;
const ITEM_HEIGHT = height * 0.47;
const DetailScreen = () => {
  const navigation = useNavigation();

  const {item} = useRoute().params;
  const sayNothing = () => {};
  console.log(item);

  return (
    <View>
      <StatusBar hidden={false} />
      <CoustomHeader
        name={'Home'}
        iconName={'menu'}
        handleSearch={sayNothing}
        nuberOfItem={0}
      />
      <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.imageMainView}>
          <View
            style={{
              height: ITEM_HEIGHT,
              width: ITEM_WIDTH,
              overflow: 'hidden',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: item}}
              resizeMode="cover"
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                borderRadius: 17,
              }}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          StyleSheet.create({backgroundColor: '#28B463'}),
        ]}>
        <Text style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
          Play Now
        </Text>
      </TouchableOpacity>
      <Pressable style={styles.buttonStyle} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonTextStyle}>Cancel</Text>
      </Pressable>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageMainView: {
    // borderRadius: 10,
    // borderWidth: 5,
    borderColor: 'white',
    shadowColor: 'brown',
    shadowOpacity: 32,
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
  buttonStyle: {
    backgroundColor: 'red',
    width: '50%',
    alignSelf: 'center',
    height: width / 8,
    justifyContent: 'center',
    marginVertical: '2.5%',
    borderRadius: height,
    borderColor: 'white',
    shadowColor: 'brown',
    shadowOpacity: 32,
    shadowRadius: 7,
    shadowOffset: {
      height: 1.5,
      width: 2.5,
    },
    elevation: 8,
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
});
