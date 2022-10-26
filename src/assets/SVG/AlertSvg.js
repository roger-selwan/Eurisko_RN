import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

function AlertSvg({ style }) {
  return (
    <View style={style}>
      <Svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M25.7252 9.64978L4.55017 44.9998C4.11359 45.7558 3.88259 46.613 3.88015 47.4861C3.8777 48.3591 4.1039 49.2176 4.53624 49.9761C4.96858 50.7346 5.59199 51.3667 6.34444 51.8094C7.0969 52.2522 7.95217 52.4902 8.82517 52.4998H51.1752C52.0482 52.4902 52.9034 52.2522 53.6559 51.8094C54.4084 51.3667 55.0318 50.7346 55.4641 49.9761C55.8964 49.2176 56.1226 48.3591 56.1202 47.4861C56.1178 46.613 55.8868 45.7558 55.4502 44.9998L34.2752 9.64978C33.8295 8.91505 33.202 8.30758 32.4532 7.88599C31.7043 7.4644 30.8595 7.24292 30.0002 7.24292C29.1408 7.24292 28.296 7.4644 27.5472 7.88599C26.7984 8.30758 26.1709 8.91505 25.7252 9.64978V9.64978Z"
          stroke="#EB5757"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M30.0001 22.5002V32.5002"
          stroke="#EB5757"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M30.0001 42.5H30.0238"
          stroke="#EB5757"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default AlertSvg;
