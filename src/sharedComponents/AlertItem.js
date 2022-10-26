import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

const AlertItem = props => {
  return (
    <Modal
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      animationType={'fade'}
      isVisible={props.isVisible}
      hasBackdrop={true}
      backdropColor="rgba(0,0,0,0.2)"
      onBackdropPress={props.onBackdropPress}
      transparent={true}>
      {props.children}
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default AlertItem;
