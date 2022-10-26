import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Navigation} from 'react-native-navigation';

const {height} = Dimensions.get('window');

// shared Components
import {AlertManager} from 'src/sharedComponents';

const LayoutView = (props, { componentId }) => {
  return (
    <View style={styles.root}>
      <AlertManager type={props.type} isVisible={props.visible} title={props.title} onBackdropPress={() => Navigation.dismissAllOverlays()} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default LayoutView;
