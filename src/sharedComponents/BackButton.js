import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';

const BackButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={require('src/assets/images/Back_button.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: Platform.OS === 'ios' ? 20 : 35
  },

  image: {
    height: 21,
    width: 21,
  },
});

export default BackButton;
