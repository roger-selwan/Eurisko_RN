import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from 'react-native';

import {TYPOGRAPHY, COLORS} from 'src/theme';

const Button = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.buttonContainer,
        {
          backgroundColor:
            props.theme === 'dark'
              ? COLORS.dark
              : COLORS.primary,
        },
      ]}
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.loading ? (
        <ActivityIndicator size={'small'} color="white" />
      ) : (
        <View style={styles.buttonContainer}>
          {props.image ? (
            <View style={styles.imageContainer}>{props.imageChild}</View>
          ) : null}
          <Text
            style={[
              styles.text,
              props.text
            ]}>
            {props.text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === 'ios' ? 10 : 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    ...TYPOGRAPHY.button,
    color: COLORS.white
  },
  imageContainer: {
    marginRight: 10,
  },
});

export default Button;
