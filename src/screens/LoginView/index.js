import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Button, InputText, Header, AlertManager} from 'src/sharedComponents';

import {COLORS, SCREEN_PADDING, TYPOGRAPHY} from 'src/theme';

// action
import {loginChangeValue, login} from './actions';

const LoginView = props => {
  // get the reducers
  const {loading, username, password} = useSelector(({loginReducer}) => loginReducer);

  const [isFocused, setIsFocused] = useState(false);

  let inputEmail = useRef();
  let inputPassword = useRef();

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView>
        <View>
          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Log in</Text>
            <Text style={styles.description}>Enter your username</Text>
            <Text style={styles.description}>and password to log in on</Text>
            <Text style={styles.description}>your Eurisko account</Text>
          </View>

          {/* Inputs */}
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <InputText
                forwardRef={inputEmail}
                placeholder="Username"
                value={username}
                defaultValue={username}
                returnKeyType={'next'}
                onChangeText={text =>
                  props.loginChangeValue({
                    username: text,
                  })
                }
                onFocus={() => {
                  setIsFocused(true);
                }}
                onSubmitEditing={() => {
                  inputPassword.current.focus();
                  setIsFocused(false);
                }}
              />
            </View>
            <View style={styles.input}>
              <InputText
                forwardRef={inputPassword}
                placeholder="Password"
                value={password}
                defaultValue={password}
                secureTextEntry={true}
                onChangeText={text => {
                  props.loginChangeValue({
                    password: text,
                  });
                }}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onSubmitEditing={() => {
                  setIsFocused(false);
                }}
              />
            </View>
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <Button
              loading={loading}
              disabled={username === '' || password === '' || loading ? true : false}
              theme={username === '' || password === '' ? 'dark' : 'light'}
              text="LOGIN"
              onPress={() =>
                props.login(username, password)
              }
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
  },
  title: {
    ...TYPOGRAPHY.titleBold,
    marginBottom: 10,
  },
  description: {
    ...TYPOGRAPHY.description,
  },
  inputContainer: {
    paddingVertical: 45,
    paddingHorizontal: 36,
  },
  input: {
    marginBottom: 10,
  },
  question: {
    ...TYPOGRAPHY.captions,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    paddingHorizontal: 36,
    paddingBottom: 45,
  }
});

export default connect(null, {
  loginChangeValue,
  login
})(LoginView);
