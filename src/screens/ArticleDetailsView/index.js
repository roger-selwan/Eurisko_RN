import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {COLORS, SCREEN_PADDING, TYPOGRAPHY} from '../../theme';
import dayjs from 'dayjs';

import {Swiper} from 'src/sharedComponents'

const ArticleDetailsView = props => {
  useEffect(() => {
    // adding the backbutton and menu button to the top bar and passing the onPress props
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        leftButtons: [
          {
            id: 'BACK-BUTTON',
            component: {
              name: 'BackButton',
              passProps: {
                onPress: () => {
                  Navigation.pop(props.componentId);
                },
              },
            },
          },
        ],
      },
    });
  }, []);

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>{props.item.headline.main}</Text>
          </View>

          <View style={styles.abstractContainer}>
            <Text style={styles.abstract}>{props.item.abstract}</Text>
          </View>
          
          {props.item.multimedia.length > 0 ? (
          <View style={styles.swiperContainer}>
            <Swiper data={props.item.multimedia} containerStyle={{height: 200}} imageContainer={{width: '82%'}} />
          </View>
          ) : null}

          <View style={styles.sourceContainer}>
            <Text style={styles.source}>{props.item.source}</Text>
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.date}>{dayjs(props.item.pub_date).format('MMM. DD, YYYY')}</Text>
          </View>

          <View style={styles.paragraphContainer}>
            <Text style={styles.paragraph}>{props.item.lead_paragraph}</Text>
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,
  },
  container: {
      paddingLeft: SCREEN_PADDING.left,
      paddingRight: SCREEN_PADDING.right,
      paddingVertical: 20
  },
  headline: {
      ...TYPOGRAPHY.smallTtileBold
  },
  abstractContainer: {
      paddingVertical: 10
  },
  abstract: {
      ...TYPOGRAPHY.description
  },
  swiperContainer: {
      paddingBottom: 10
  },
  source: {
      ...TYPOGRAPHY.captions
  },
  date: {
    ...TYPOGRAPHY.captions
  },
  sourceContainer: {
      paddingBottom: 5
  },dateContainer: {
      paddingBottom: 10
  },
  paragraph: {
      ...TYPOGRAPHY.description
  }
});

export default ArticleDetailsView;
