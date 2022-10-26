import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card, Swiper} from 'src/sharedComponents';
import {COLORS, TYPOGRAPHY} from '../theme';


const ArticleItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card>
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
        </View>
        {props.data.length > 0 ? (
        <View style={styles.imageContainer}>
          <Swiper data={props.data} />
        </View>
        ) : <View style={{marginVertical: 5}} />}
        <View style={styles.abstractContainer}>
          <Text style={styles.abstract}>{props.abstract}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 130,
    marginVertical: 10,
  },
  headline: {
    ...TYPOGRAPHY.titleBold,
    // color: COLORS.primary
  },
  abstract: {
      ...TYPOGRAPHY.description
  }
});

export default ArticleItem;
