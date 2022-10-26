import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {COLORS, TYPOGRAPHY} from '../theme';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const window = Dimensions.get('window');

const Swiper = props => {
  const [activeSlide, setActiveSlide] = useState(0);

  let sliderWidth = window.width;
  let itemWidth = window.width;

  const getPagination = () => {
    return (
      <Pagination
        dotsLength={props.data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: -10,
          backgroundColor: COLORS.grey,
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
          borderWidth: 1,
          borderColor: COLORS.grey,
          backgroundColor: '#f0f0f0',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          style={[styles.image, props.imageContainer]}
          source={{uri: `https://static01.nyt.com/${item.url}`}}
          resizeMode={'cover'}
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Carousel
        data={props.data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={index => setActiveSlide(index)}
        loop={true}
        autoplay={true}
      />
      <View>{getPagination()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '74%',
      },
      container: {
          height: 130
      }
});

export default Swiper;
