// TABS

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  type ViewStyle,
} from 'react-native';
import Shrkkwaterrshhloc from './Shrkkwaterrshh/Shrkkwaterrshhscrr/Shrkkwaterrshhloc';

import Shrkkwaterrshhrand from './Shrkkwaterrshh/Shrkkwaterrshhscrr/Shrkkwaterrshhrand';

import Shrkkwaterrshhmap from './Shrkkwaterrshh/Shrkkwaterrshhscrr/Shrkkwaterrshhmap';
import Shrkkwaterrshhqiz from './Shrkkwaterrshh/Shrkkwaterrshhscrr/Shrkkwaterrshhqiz';
import Shrkkwaterrshhblogg from './Shrkkwaterrshh/Shrkkwaterrshhscrr/Shrkkwaterrshhblogg';
import Shrkkwaterrshhsavd from './Shrkkwaterrshh/Shrkkwaterrshhscrr/Shrkkwaterrshhsavd';

const Tab = createBottomTabNavigator();

const AnimatedTabButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style as ViewStyle, styles.shrkkwaterrshhtabButton]}
      {...rest}>
      <Animated.View
        style={[styles.shrkkwaterrshhtabButtonInner, {transform: [{scale}]}]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const Shrkkwaterrshhtab = () => {
  const {height, width} = useWindowDimensions();
  const isLandscape = height < width;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.shrkkwaterrshhtabBar,
          {height: isLandscape ? 85 : 105},
        ],
        tabBarActiveTintColor: '#555555',
        tabBarButton: props => (
          <AnimatedTabButton {...(props as Record<string, unknown>)} />
        ),
      }}>
      <Tab.Screen
        name="Shrkkwaterrshhloc"
        component={Shrkkwaterrshhloc}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.shrkkwaterrshhtabIconWrap}>
              <Image
                source={require('./elements/i/shrkkwaterrshhbtm1.png')}
                tintColor={focused ? '#B82829' : '#D9F7FF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shrkkwaterrshhrand"
        component={Shrkkwaterrshhrand}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.shrkkwaterrshhtabIconWrap}>
              <Image
                source={require('./elements/i/shrkkwaterrshhbtm2.png')}
                tintColor={focused ? '#B82829' : '#D9F7FF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shrkkwaterrshhmap"
        component={Shrkkwaterrshhmap}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.shrkkwaterrshhtabIconWrap}>
              <Image
                source={require('./elements/i/shrkkwaterrshhbtm3.png')}
                tintColor={focused ? '#B82829' : '#D9F7FF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shrkkwaterrshhqiz"
        component={Shrkkwaterrshhqiz}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.shrkkwaterrshhtabIconWrap}>
              <Image
                source={require('./elements/i/shrkkwaterrshhbtm4.png')}
                tintColor={focused ? '#B82829' : '#D9F7FF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shrkkwaterrshhblogg"
        component={Shrkkwaterrshhblogg}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.brightbraintabIconWrap}>
              <Image
                source={require('./elements/i/shrkkwaterrshhbtm5.png')}
                tintColor={focused ? '#B82829' : '#D9F7FF'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shrkkwaterrshhsavd"
        component={Shrkkwaterrshhsavd}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.shrkkwaterrshhtabIconWrap}>
              <Image
                source={require('./elements/i/shrkkwaterrshhbtm6.png')}
                tintColor={focused ? '#B82829' : '#D9F7FF'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shrkkwaterrshhtabButton: {
    flex: 1,
  },
  shrkkwaterrshhtabButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shrkkwaterrshhtabIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shrkkwaterrshhtabBar: {
    elevation: 0,
    paddingTop: 12,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 18,
    borderColor: '#041E4A',
    backgroundColor: '#041E4A',
    height: 105,
    paddingBottom: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});

export default Shrkkwaterrshhtab;
