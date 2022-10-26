import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Platform,
  RefreshControl,
} from 'react-native';
import {useSelector, connect} from 'react-redux';
import {COLORS, SCREEN_PADDING, TYPOGRAPHY} from 'src/theme';
import {Navigation} from 'react-native-navigation';

import {InputText, ArticleItem} from 'src/sharedComponents';

import {sleep} from 'src/helpers';

// action
import {
  loadData,
  loadMoreData,
  homeChangeValue,
  logout,
  search,
} from './actions';

const HomeView = props => {
  // get the reducers
  const {loading, data, page, searchText, footerLoader} = useSelector(
    ({homeReducer}) => homeReducer,
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    sleep(2000).then(() => {
      setRefreshing(false);
      props.homeChangeValue({
        page: 0,
      });
      props.loadData(page);
    });
  }, []);

  useEffect(() => {
    // adding the backbutton and menu button to the top bar and passing the onPress props
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        rightButtons: [
          {
            id: 'LOGOUT-BUTTON',
            component: {
              name: 'LogoutItem',
              passProps: {
                onPress: () => {
                  props.logout();
                },
              },
            },
          },
        ],
      },
    });
  }, []);

  useEffect(() => {
    // load data
    props.loadData(page);

    return () => {
      props.homeChangeValue({
        searchText: '',
      });
    }
  }, []);

  const renderSeparator = () => {
    return <View style={{height: 20}} />;
  };

  const renderHeader = () => {
    return <View style={{height: 20}} />;
  };

  const renderEmpty = () => {
    return (
      <View>
        {loading ? (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'small'} color={COLORS.primary} />
          </View>
        ) : (
          <View style={styles.noResultContainer}>
            <View style={styles.dangerContainer}>
              <Image
                source={require('src/assets/images/danger.png')}
                style={{height: 38, width: 38}}
              />
            </View>
            <View style={styles.noResultTitleContainer}>
              <Text style={styles.noResultTitle}>No Articles</Text>
            </View>
            <View style={styles.noResultDescContainer}>
              <Text style={styles.noResultDescription}>
                Currently there is no articles found.
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <ArticleItem
        headline={item.headline.main}
        abstract={item.abstract}
        data={item.multimedia}
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'ArticleDetailsView',
              passProps: {
                item: item,
              },
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: item.headline.main,
                    alignment: 'center',
                    color: COLORS.dark,
                  },
                  background: {
                    color: COLORS.lightBlue,
                  },
                  backButton: {
                    visible: false,
                  },
                },
              },
            },
          });
        }}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View>
        {footerLoader ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 20,
            }}>
            <ActivityIndicator size={'small'} color={COLORS.primary} />
          </View>
        ) : (
          <View style={{height: Platform.OS === 'ios' ? 20 : 40}} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {/* Search container */}
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <InputText
            searchIcon
            placeholder="Search"
            autoCapitalize={'none'}
            onChangeText={text => {
              if (text === '') {
                props.homeChangeValue({
                  page: 0,
                });
                props.loadData(page);
              } else {
                props.homeChangeValue({
                  searchText: text,
                });
              }
            }}
            onIconPress={() => props.search(searchText, data)}
          />
        </View>
      </View>

      {/* Flatlist bill data */}
      <View style={styles.flatlistContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={renderEmpty}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={renderHeader}
          onEndReached={() => props.loadMoreData(data, page + 1)}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={COLORS.primary}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,
    paddingVertical: 20,
    paddingLeft: SCREEN_PADDING.left,
    paddingRight: SCREEN_PADDING.right,
  },
  inputContainer: {
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flatlistContainer: {
    flexGrow: 1,
  },
  noResultContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
  dangerContainer: {
    paddingBottom: 10,
  },
  noResultTitleContainer: {
    paddingBottom: 10,
  },
  noResultTitle: {
    ...TYPOGRAPHY.smallTtileBold,
  },
  noResultDescription: {
    ...TYPOGRAPHY.description,
    textAlign: 'center',
  },
});

export default connect(null, {
  loadData,
  homeChangeValue,
  logout,
  loadMoreData,
  search,
})(HomeView);
