import React, {useEffect, useRef} from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export const shrkkwaterrshhLoader = ` <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: transparent;
          }

          body {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .loader-container {
            position: relative;
            width: 300px;
            height: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .jellyfish {
            position: relative;
            width: 120px;
            height: 120px;
            margin-bottom: 60px;
            animation: float 3s ease-in-out infinite;
          }

          .jellyfish-head {
            width: 120px;
            height: 80px;
            background: radial-gradient(
              ellipse at center top,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(173, 216, 230, 0.8) 30%,
              rgba(135, 206, 250, 0.7) 60%,
              rgba(70, 130, 180, 0.6) 100%
            );
            border-radius: 50% 50% 50% 50% / 100% 100% 40% 40%;
            position: relative;
            box-shadow:
              0 0 20px rgba(173, 216, 230, 0.6),
              inset 0 -10px 20px rgba(255, 255, 255, 0.3);
            animation: pulse 2s ease-in-out infinite;
          }

          .jellyfish-head::before {
            content: "";
            position: absolute;
            top: 15px;
            left: 20px;
            width: 80px;
            height: 40px;
            background: radial-gradient(
              ellipse,
              rgba(255, 255, 255, 0.6) 0%,
              rgba(255, 255, 255, 0.2) 70%,
              transparent 100%
            );
            border-radius: 50%;
            animation: shimmer 2.5s ease-in-out infinite;
          }

          .tentacles {
            position: absolute;
            bottom: -160px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 200px;
          }

          .tentacle {
            position: absolute;
            width: 4px;
            height: 100px;
            background: linear-gradient(
              to bottom,
              rgba(173, 216, 230, 0.8) 0%,
              rgba(135, 206, 250, 0.6) 50%,
              rgba(70, 130, 180, 0.4) 100%
            );
            border-radius: 2px;
            transform-origin: top center;
          }

          .tentacle:nth-child(1) {
            left: 20%;
            animation: sway1 3s ease-in-out infinite;
            height: 120px;
          }

          .tentacle:nth-child(2) {
            left: 35%;
            animation: sway2 2.5s ease-in-out infinite;
            height: 140px;
          }

          .tentacle:nth-child(3) {
            left: 50%;
            animation: sway3 3.2s ease-in-out infinite;
            height: 130px;
          }

          .tentacle:nth-child(4) {
            left: 65%;
            animation: sway4 2.8s ease-in-out infinite;
            height: 135px;
          }

          .tentacle:nth-child(5) {
            left: 80%;
            animation: sway5 3.5s ease-in-out infinite;
            height: 115px;
          }

          .bubbles {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .bubble {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(
              circle at 30% 30%,
              rgba(255, 255, 255, 0.8),
              rgba(173, 216, 230, 0.4)
            );
            animation: bubble-rise 4s linear infinite;
            opacity: 0;
          }

          .bubble:nth-child(1) {
            width: 8px;
            height: 8px;
            left: 20%;
            animation-delay: 0s;
          }

          .bubble:nth-child(2) {
            width: 12px;
            height: 12px;
            left: 70%;
            animation-delay: 1s;
          }

          .bubble:nth-child(3) {
            width: 6px;
            height: 6px;
            left: 40%;
            animation-delay: 2s;
          }

          .bubble:nth-child(4) {
            width: 10px;
            height: 10px;
            left: 60%;
            animation-delay: 0.5s;
          }

          .bubble:nth-child(5) {
            width: 5px;
            height: 5px;
            left: 80%;
            animation-delay: 1.5s;
          }

          .bubble:nth-child(6) {
            width: 9px;
            height: 9px;
            left: 25%;
            animation-delay: 2.5s;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 20px rgba(173, 216, 230, 0.6);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 30px rgba(173, 216, 230, 0.8);
            }
          }

          @keyframes shimmer {
            0%, 100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }

          @keyframes sway1 {
            0%, 100% {
              transform: rotate(-8deg);
            }
            50% {
              transform: rotate(12deg);
            }
          }

          @keyframes sway2 {
            0%, 100% {
              transform: rotate(10deg);
            }
            50% {
              transform: rotate(-15deg);
            }
          }

          @keyframes sway3 {
            0%, 100% {
              transform: rotate(-5deg);
            }
            50% {
              transform: rotate(8deg);
            }
          }

          @keyframes sway4 {
            0%, 100% {
              transform: rotate(12deg);
            }
            50% {
              transform: rotate(-10deg);
            }
          }

          @keyframes sway5 {
            0%, 100% {
              transform: rotate(-10deg);
            }
            50% {
              transform: rotate(15deg);
            }
          }

          @keyframes bubble-rise {
            0% {
              bottom: -20px;
              opacity: 0;
              transform: translateX(0px) scale(0.5);
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              bottom: 120%;
              opacity: 0;
              transform: translateX(20px) scale(1.2);
            }
          }

          @media (max-width: 480px) {
            .loader-container {
              width: 250px;
              height: 350px;
            }

            .jellyfish {
              width: 100px;
              height: 100px;
            }

            .jellyfish-head {
              width: 100px;
              height: 65px;
            }
          }
        </style>
      </head>
      <body>
        <div class="loader-container">
          <div class="jellyfish">
            <div class="jellyfish-head"></div>
            <div class="tentacles">
              <div class="tentacle"></div>
              <div class="tentacle"></div>
              <div class="tentacle"></div>
              <div class="tentacle"></div>
              <div class="tentacle"></div>
            </div>
          </div>

          <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
          </div>
        </div>
      </body>
    </html>`;

const Shrkkwaterrshhload = () => {
  const navigation = useNavigation();
  const timerRef = useRef(null);

  //useEffect(() => {
  //  timerRef.current = setTimeout(() => {
  //    navigation.replace('Shrkkwaterrshhonbrd');
  //  }, 6000);
//
  //  return () => {
  //    if (timerRef.current) {
  //      clearTimeout(timerRef.current);
  //      timerRef.current = null;
  //      console.log('timer cleared');
  //    }
  //  };
  //}, [navigation]);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../elements/i/shrkkwaterrlger.png')}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <WebView
            originWhitelist={['*']}
            source={{html: shrkkwaterrshhLoader}}
            style={{width: 260, height: 150, backgroundColor: 'transparent'}}
            scrollEnabled={false}
            transparent={true}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Shrkkwaterrshhload;
