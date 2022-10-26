import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {COLORS, TYPOGRAPHY} from 'src/theme';

const InputText = props => {
  const [value, setValue] = useState('' || props.defaultValue);

  const handleChange = text => {
    setValue(text);
    if (props.onChangeText) props.onChangeText(text);
  };

  const handleOnEndEditing = text => {
    setValue(text.nativeEvent.text);
    if (props.onEndEditing) props.onEndEditing(text.nativeEvent.text);
  };

  return (
    <View style={[styles.mainOuterContainer, props.mainOuterContainer]}>
      <TextInput
        ref={props.forwardRef}
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={COLORS.placeholder}
        onChangeText={handleChange}
        value={props.value}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        autoCorrect={false}
        autoComplete={'off'}
        autoCapitalize={'none'}
        secureTextEntry={props.secureTextEntry}
        underlineColorAndroid="transparent"
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        onFocus={props.onFocus}
        onEndEditing={handleOnEndEditing}
        editable={props.editable}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
      />
      {props.searchIcon ? (
        <TouchableOpacity onPress={props.onIconPress}>
          <Image
            source={require('src/assets/images/search.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainOuterContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLORS.primary,
    paddingLeft: 25,
    paddingRight: 5,
  },
  input: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    ...TYPOGRAPHY.textInput,
    color: COLORS.dark,
  },
  image: {
    height: 33,
    width: 33,
  },
});

export default InputText;
