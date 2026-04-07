import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const shrkkwaterrshhOnbb = [
  {
    title: 'Dive In Fast',
    sub: 'Find waterparks across the Netherlands',
    img: require('../../elements/i/shrkkwaterrlobrd1.png'),
    buttonLabel: 'Start',
  },
  {
    title: 'Pick Your Spot',
    sub: 'Explore places that match your vibe',
    img: require('../../elements/i/shrkkwaterrlobrd2.png'),
    buttonLabel: 'Next',
  },
  {
    title: 'Random Splash',
    sub: 'Let the app choose your next ride',
    img: require('../../elements/i/shrkkwaterrlobrd3.png'),
    buttonLabel: 'Try It',
  },
  {
    title: 'Save The Best',
    sub: 'Keep your favorite spots close',
    img: require('../../elements/i/shrkkwaterrlobrd4.png'),
    buttonLabel: 'Next',
  },
  {
    title: 'Feel The Flow',
    sub: 'Quick scenarios around water',
    img: require('../../elements/i/shrkkwaterrlobrd5.png'),
    buttonLabel: 'Continue',
  },
  {
    title: 'Ready To Go',
    sub: 'Jump in and explore',
    img: require('../../elements/i/shrkkwaterrlobrd6.png'),
    buttonLabel: 'Let’s Go',
  },
];

const Shrkkwaterrshhonbrd = () => {
  const navigation = useNavigation();
  const [shrkkwaterrshhIdx, setShrkkwaterrshhIdx] = useState(0);

  const shrkkwaterrshhNext = () => {
    shrkkwaterrshhIdx < 5
      ? setShrkkwaterrshhIdx(shrkkwaterrshhIdx + 1)
      : navigation.replace('Shrkkwaterrshhtab');
  };

  return (
    <ImageBackground
      source={require('../../elements/i/shrkkwaterrlger.png')}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.shrkkwaterrshhcontainer}>
          <Image
            source={shrkkwaterrshhOnbb[shrkkwaterrshhIdx].img}
            style={{alignSelf: 'center', marginBottom: 40}}
          />
          <View style={styles.shrkkwaterrshhsheet}>
            <Text style={styles.shrkkwaterrshhbloggtitl}>
              {shrkkwaterrshhOnbb[shrkkwaterrshhIdx].title}
            </Text>
            <Text style={styles.shrkkwaterrshhbloggsub}>
              {shrkkwaterrshhOnbb[shrkkwaterrshhIdx].sub}
            </Text>

            <TouchableOpacity activeOpacity={0.8} onPress={shrkkwaterrshhNext}>
              <ImageBackground
                source={require('../../elements/i/shrkkwaterrlonextbt.png')}
                style={{
                  width: 199,
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.shrkkwaterrshhbloggtext}>
                  {shrkkwaterrshhOnbb[shrkkwaterrshhIdx].buttonLabel}
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.shrkkwaterrshhbloggskipcontainer}
              onPress={() => navigation.replace('Shrkkwaterrshhtab')}>
              <Text style={styles.shrkkwaterrshhbloggskip}>Skip</Text>
              <Image
                source={require('../../elements/i/shrkkwaterrloskop.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  shrkkwaterrshhsheet: {
    backgroundColor: '#041E4A',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    minHeight: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  shrkkwaterrshhcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  shrkkwaterrshhbloggtext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',

    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
  },
  shrkkwaterrshhbloggsub: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 50,
    marginTop: 10,
    textAlign: 'center',
  },
  shrkkwaterrshhbloggtitl: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
  },
  shrkkwaterrshhbloggskip: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    top: -1,
  },
  shrkkwaterrshhbloggskipcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    gap: 3,
    marginTop: 25,
  },
});

export default Shrkkwaterrshhonbrd;
