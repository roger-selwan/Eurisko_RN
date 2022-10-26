import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import AlertSvg from 'src/assets/SVG/AlertSvg';

import {AlertItem} from 'src/sharedComponents';

var {width, height} = Dimensions.get('window');

const AlertManager = props => {
  const renderAlert = type => {
    switch (type) {
      // case 400: {
      //   return (
      //     <View style={styles.root}>
      //       <View style={styles.container}>
      //         <AlertSvg style={undefined} />
      //         <Subtitle
      //           style={{paddingTop: 10, paddingBottom: 0}}
      //           title={props.title}
      //         />
      //       </View>
      //     </View>
      //   );
      // }
      case 401: {
        return (
          <View style={styles.root}>
            <View style={styles.container}>
              <AlertSvg style={undefined} />
              <Text style={styles.title}>{props.title}</Text>
            </View>
          </View>
        );
      }
      default:
        return <View />;
    }
  };

  return (
    <AlertItem
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}>
      {renderAlert(props.type)}
    </AlertItem>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
    maxWidth: '75%',
    minWidth: '55%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 10,
    paddingBottom: 0,
    textAlign: 'center'
  },
});

export default AlertManager;
