/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import { colors, fonts } from '../../styles';

import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import SearchScreen from '../grids/GridsViewContainer';
import ChatScreen from '../chat/ChatViewContainer';
import ProfileScreen from '../profile/ProfileViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconSerach = require('../../../assets/images/tabbar/search.png');
const iconChat = require('../../../assets/images/tabbar/chat.png');
const iconProfile = require('../../../assets/images/tabbar/components.png');

const hederBackground = require('../../../assets/images/topBarBg.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  headerCaption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Calendar</Text>
          </View>
        ),
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Search</Text>
          </View>
        ),
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Chat</Text>
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: (
          <View style={styles.headerContainer}>
            <Image style={styles.headerImage} source={hederBackground} />
            <Text style={styles.headerCaption}>Profile</Text>
          </View>
        ),
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Calendar':
            iconSource = iconCalendar;
            break;
          case 'Search':
            iconSource = iconSerach;
            break;
          case 'Chat':
            iconSource = iconChat;
            break;
          case 'Profile':
            iconSource = iconProfile;
            break;
          default:
            iconSource = iconProfile;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  },
);
