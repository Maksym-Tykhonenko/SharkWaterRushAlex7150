import LinearGradient from 'react-native-linear-gradient';

import Shrkkwaterrshhlayt from '../Shrkkwaterrshhcpn/Shrkkwaterrshhlayt';

import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ShrkkwaterrshhQizTopBar({title}: {title: string}) {
  return (
    <View style={styles.shrkkwaterrshhTopBar}>
      <View style={styles.shrkkwaterrshhTitlePill}>
        <Text style={styles.shrkkwaterrshhTitleText}>{title}</Text>
      </View>
    </View>
  );
}

const ShrkkwaterrshhQizHome = ({navigation}: any) => {
  return (
    <Shrkkwaterrshhlayt>
      <View style={styles.shrkkwaterrshhFullFlex}>
        <ShrkkwaterrshhQizTopBar title="Water Sense Flow" />

        <View style={styles.shrkkwaterrshhStartWrap}>
          <Image source={require('../../elements/i/shrkkwaterrrqz.png')} />

          <LinearGradient
            colors={['#BFFDEE', '#3FCFAD']}
            style={styles.shrkkwaterrshhStartCard}>
            <View style={styles.shrkkwaterrshhStartCardInner}>
              <View style={styles.shrkkwaterrshhStartCardBorder}>
                <Text style={styles.shrkkwaterrshhStartTitle}>
                  Check Your Water Sense
                </Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => {
                    const rootNav = navigation?.getParent?.()?.getParent?.();
                    if (rootNav?.navigate) {
                      rootNav.navigate('Shrkkwaterrshhqizgmp');
                      return;
                    }
                    navigation.navigate('Shrkkwaterrshhqizgmp');
                  }}>
                  <ImageBackground
                    source={require('../../elements/i/shrkkwaterrlonextbtbl.png')}
                    resizeMode="stretch"
                    style={styles.shrkkwaterrshhBeginBtn}>
                    <Text style={styles.shrkkwaterrshhBeginText}>
                      Let’s Begin
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </Shrkkwaterrshhlayt>
  );
};

const Shrkkwaterrshhqiz = ShrkkwaterrshhQizHome;

const styles = StyleSheet.create({
  shrkkwaterrshhTitlePill: {
    backgroundColor: '#041E4A',
    borderRadius: 28,
    paddingHorizontal: 18,
    minHeight: 48,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    minWidth: 220,
    alignItems: 'center',
  },
  shrkkwaterrshhFullFlex: {flex: 1, paddingBottom: 120},

  shrkkwaterrshhTopBar: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  shrkkwaterrshhTitleText: {color: '#FFFFFF', fontWeight: '600', fontSize: 16},

  shrkkwaterrshhStartWrap: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 18,
  },
  shrkkwaterrshhHero: {
    width: 280,
    height: 240,
    resizeMode: 'contain',
  },
  shrkkwaterrshhStartCard: {
    borderRadius: 18,
    width: '88%',
  },
  shrkkwaterrshhStartCardInner: {
    padding: 12,
  },
  shrkkwaterrshhStartCardBorder: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#041E4A',
    borderRadius: 16,
    alignItems: 'center',
  },
  shrkkwaterrshhStartTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#061A2F',
    marginBottom: 24,
    textAlign: 'center',
  },

  shrkkwaterrshhBeginBtn: {
    width: 190,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  shrkkwaterrshhBeginText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
  },
});

export default Shrkkwaterrshhqiz;
