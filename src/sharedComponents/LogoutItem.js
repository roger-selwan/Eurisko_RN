import React from 'react';
import {Platform, Image, TouchableOpacity, StyleSheet} from 'react-native';

const LogoutItem = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={require('src/assets/images/logout.png')} style={styles.image} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 22,
        width: 22
    },
    container: {
        paddingRight: Platform.OS === 'ios' ? 20 : 35,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default LogoutItem;