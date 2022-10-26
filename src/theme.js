import {Platform} from 'react-native';

export const COLORS = {
  primary: '#00CCCC',
  white: '#FFFFFF',
  dark: '#48484A',
  warning: '#FF7700',
  danger: '#FF4400',
  green: '#2AD100',
  grey: '#424242',
  placeholder: '#C2C6C6',
  captions: '#939393',
  lightBlue: '#EDF5F5',
  seperator: '#E8E8E8',
  lightGrey: '#BEBEBE',
  mediumGrey: '#525252',
  line: '#D2DDDE'
};

export const SCREEN_PADDING = {
  left: 35,
  right: 35,
};

export const TYPOGRAPHY = {
  bigTitleBold: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.dark,
    fontFamily: 'Inter-Bold'
  },
  bigTilteRegular: {
    fontSize: 26,
    color: COLORS.grey,
    fontFamily: 'Inter-Regular'
  },
  titleBold: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold'
  },
  description: {
    fontSize: 16,
    color: COLORS.grey,
    fontFamily: 'Inter-Regular'
  },
  button: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'Inter-Bold'
  },
  placeholder: {
    fontSize: 14,
    color: COLORS.placeholder,
    fontFamily: 'Inter-Medium'
  },
  textInput: {
    fontSize: 14,
    color: COLORS.grey,
    fontFamily: 'Inter-Medium'
  },
  smallTtileBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.grey,
    fontFamily: 'Inter-SemiBold'
  },
  captions: {
    fontSize: 12,
    color: COLORS.captions,
    fontFamily: 'Inter-Medium'
  },
  captionsBold: {
    fontSize: 12,
    color: COLORS.captions,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold'
  }
}

