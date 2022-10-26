# react-native-boilerplate-guide
Guidelines for building the latest react native version

this reposetry will guide you to setup a new react antive app from scratch
you can run the below code to install the below dependencies

- React Native Navigation 
- Redux
- React Redux
- Redux thunk
- Dayjs
- Lottie Animation
- Push notification, [link](https://github.com/zo0r/react-native-push-notification)
- React native render HTML
- react native webView
- react native video
- react otp input
- react native picker
- react native image picker
- react native action sheet

```
yarn add redux react-redux dayjs redux-thunk realm react-native-render-html react-native-push-notification react-native-webview react-native-video react-native-navigation @react-native-community/push-notification-ios @twotalltotems/react-native-otp-input @react-native-picker/picker axios lottie-react-native lottie-ios@3.1.8 react-native-action-sheet react-native-image-picker
```

Once the following is done you will need to upgrade the iOS minimum version for XCode project to 13.0

Navigate to the iOS folder from your terminal by `cd ios/` and run `pod install`

fix the lottie bridgin by createing an empty swift file in Xcode with bridge linking

make sure to update update the native ios files.

for the push notification make sure you have the firebase and all the installation on android
# Eurisko_RN
