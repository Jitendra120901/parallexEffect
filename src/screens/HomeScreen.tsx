import {
  Animated,
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native';
import Search from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import CoustomHeader from '../component/header/CoustomHeader';
import images from '../component/constant/Constant';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.86;
const ITEM_HEIGHT = height * 0.47;
const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [viewSearch, setViewSearch] = useState(false);
  const navigation = useNavigation();
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cardItem, setCardItem] = useState<any[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleToCard = item => {
    const isItemInCard = cardItem.some(data => data === item);

    if (!isItemInCard) {
      setCardItem(prevCardItem => [...prevCardItem, item]);

      setNumberOfItems(prevNumberOfItems => prevNumberOfItems + 1);
    } else {
      const errorTitleWithIcon = `⚠️ Error`;
      Alert.alert(
        errorTitleWithIcon,
        'You have already added',
        // [{text: 'OK', onPress: () => {}}],
      );
    }
  };
  useEffect(() => {
    // Your useEffect logic here
  }, [cardItem]);

  const _handleRenderItems = ({item, index}) => {
    // handle navigate to the detail screen
    const handleNavigate = () => {
      navigation.navigate('detail', {item: item});
    };

    const inputrange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const translateX = scrollX.interpolate({
      inputRange: inputrange,
      outputRange: [-width * 0.7, 0, width * 0.7],
    });

    return (
      <View style={[StyleSheet.create({width: width}), styles.imageContainer]}>
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
          <Pressable
            style={styles.plusSignStyle}
            onPress={() => handleToCard(item)}>
            <PlusIcon name="pluscircle" size={33} color={'lightblue'} />
          </Pressable>
        </View>
      </View>
    );
  };

  const handleSearch = () => {
    setViewSearch(!viewSearch);
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={false} />
      <CoustomHeader
        name={'Home'}
        iconName={'menu'}
        handleSearch={handleSearch}
        numberOfItems={numberOfItems}
      />
      {viewSearch && (
        <View style={styles.searchContainer}>
          <TextInput style={{flex: 1}} />
          <Search name="search" size={32} color={'blue'} />
        </View>
      )}
      <Animated.FlatList
        data={images}
        renderItem={_handleRenderItems}
        pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

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
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    width: '70%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    // alignContent:"center",
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  imagePresseble: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    overflow: 'hidden',
    alignItems: 'center',
  },
  imageStyle: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 17,
  },
  imageContainer: {justifyContent: 'center', alignItems: 'center'},
});
