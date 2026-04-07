import {
  shrkkwaterrshhLocData,
  type ShrkkwaterrshhLocItem,
} from './Shrkkwaterrshhloc';

import {useFocusEffect} from '@react-navigation/native';

import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Shrkkwaterrshhlayt from '../Shrkkwaterrshhcpn/Shrkkwaterrshhlayt';
import {
  shrkkwaterrshhGetSavedIds,
  shrkkwaterrshhToggleSavedId,
} from '../Shrkkwaterrshhcpn/Shrkkwaterrshhsavdstore';

function shrkkwaterrshhRandomItem(items: ShrkkwaterrshhLocItem[]) {
  return items[Math.floor(Math.random() * items.length)];
}

async function shrkkwaterrshhShareLocation(item: ShrkkwaterrshhLocItem) {
  const {lat, lng} = item.coords;
  const message = [
    item.title,
    '',
    item.description,
    '',
    `Address: ${item.address}`,
    `Coordinates: ${lat}, ${lng}`,
  ].join('\n');

  try {
    await Share.share({title: item.title, message});
  } catch {
    // ignore share cancel/errors
  }
}

function ShrkkwaterrshhRandTopBar({
  title,
  showExit,
  onExit,
}: {
  title: string;
  showExit?: boolean;
  onExit?: () => void;
}) {
  return (
    <View style={styles.shrkkwaterrshhTopBar}>
      {showExit && (
        <Pressable onPress={onExit} style={styles.shrkkwaterrshhExitBtn}>
          <Text style={styles.shrkkwaterrshhExitText}>Exit</Text>
        </Pressable>
      )}

      <View style={styles.shrkkwaterrshhTitlePill}>
        <Text style={styles.shrkkwaterrshhTitleText}>{title}</Text>
      </View>
    </View>
  );
}

const Shrkkwaterrshhrand = ({navigation}: any) => {
  const shrkkwaterrshhItems = useMemo(() => shrkkwaterrshhLocData, []);
  const [shrkkwaterrshhSelectedItem, setShrkkwaterrshhSelectedItem] =
    useState<ShrkkwaterrshhLocItem | null>(null);
  const [shrkkwaterrshhLikedById, setShrkkwaterrshhLikedById] = useState<
    Record<string, boolean>
  >({});
  const shrkkwaterrshhSavedSeqRef = useRef(0);

  useFocusEffect(
    useCallback(() => {
      let alive = true;
      const seq = ++shrkkwaterrshhSavedSeqRef.current;
      (async () => {
        const ids = await shrkkwaterrshhGetSavedIds();
        if (!alive || seq !== shrkkwaterrshhSavedSeqRef.current) {
          return;
        }
        const map: Record<string, boolean> = {};
        ids.forEach((id: string) => {
          map[id] = true;
        });
        setShrkkwaterrshhLikedById(map);
      })();
      return () => {
        alive = false;
      };
    }, []),
  );

  const shrkkwaterrshhLiked = shrkkwaterrshhSelectedItem
    ? !!shrkkwaterrshhLikedById[shrkkwaterrshhSelectedItem.id]
    : false;

  const shrkkwaterrshhGoRandom = () => {
    if (!shrkkwaterrshhItems.length) {
      return;
    }
    setShrkkwaterrshhSelectedItem(
      shrkkwaterrshhRandomItem(shrkkwaterrshhItems),
    );
  };

  return (
    <Shrkkwaterrshhlayt>
      <View style={styles.shrkkwaterrshhFullFlex}>
        <ShrkkwaterrshhRandTopBar
          title="Splash Randomizer"
          showExit={!!shrkkwaterrshhSelectedItem}
          onExit={() => setShrkkwaterrshhSelectedItem(null)}
        />

        {!shrkkwaterrshhSelectedItem ? (
          <View style={styles.shrkkwaterrshhStartWrap}>
            <Image
              source={require('../../elements/i/shrkkwaterrrand.png')}
              style={styles.shrkkwaterrshhShark}
            />

            <LinearGradient
              colors={['#13E5DA', '#FF9B37']}
              style={styles.shrkkwaterrshhStartCard}>
              <View style={{padding: 12}}>
                <View
                  style={{
                    padding: 15,
                    borderWidth: 1,
                    borderColor: '#041E4A',
                    borderRadius: 16,
                  }}>
                  <Text style={styles.shrkkwaterrshhStartTitle}>
                    Let The Water Decide
                  </Text>

                  <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={shrkkwaterrshhGoRandom}>
                    <ImageBackground
                      source={require('../../elements/i/shrkkwaterrlonextbtbl.png')}
                      resizeMode="stretch"
                      style={styles.shrkkwaterrshhGoRandomBtn}>
                      <Text style={styles.shrkkwaterrshhGoRandomText}>
                        Go Random
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>
        ) : (
          <>
            <View style={styles.shrkkwaterrshhDetailsWrap}>
              <LinearGradient
                colors={['#87E5FF', '#13B7E5']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.shrkkwaterrshhDetailsCard}>
                <View style={styles.shrkkwaterrshhDetailsInner}>
                  <Image
                    source={shrkkwaterrshhSelectedItem.image}
                    style={styles.shrkkwaterrshhDetailsImg}
                    resizeMode="cover"
                  />
                  <Text style={styles.shrkkwaterrshhDetailsTitle}>
                    {shrkkwaterrshhSelectedItem.title}
                  </Text>

                  <Text style={styles.shrkkwaterrshhDetailsSectionTitle}>
                    Description:
                  </Text>
                  <Text style={styles.shrkkwaterrshhDetailsText}>
                    {shrkkwaterrshhSelectedItem.description}
                  </Text>

                  <Text style={styles.shrkkwaterrshhDetailsSectionTitle}>
                    Address:
                  </Text>
                  <Text style={styles.shrkkwaterrshhDetailsText}>
                    {shrkkwaterrshhSelectedItem.address}
                  </Text>

                  <Text style={styles.shrkkwaterrshhDetailsSectionTitle}>
                    Coordinates:
                  </Text>
                  <Text style={styles.shrkkwaterrshhDetailsText}>
                    {shrkkwaterrshhSelectedItem.coords.lat},{' '}
                    {shrkkwaterrshhSelectedItem.coords.lng}
                  </Text>
                </View>
              </LinearGradient>

              <View style={styles.shrkkwaterrshhDetailsActions}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    shrkkwaterrshhShareLocation(shrkkwaterrshhSelectedItem)
                  }>
                  <ImageBackground
                    source={require('../../elements/i/shrkkwaterrlroundbt.png')}
                    resizeMode="stretch"
                    style={styles.shrkkwaterrshhToggleBtn}>
                    <Image
                      source={require('../../elements/i/shrkkwaterrlshr.png')}
                    />
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate('Shrkkwaterrshhmap', {
                      shrkkwaterrshhFocusId: shrkkwaterrshhSelectedItem.id,
                    })
                  }>
                  <ImageBackground
                    source={require('../../elements/i/shrkkwaterrlonextbt.png')}
                    resizeMode="stretch"
                    style={styles.shrkkwaterrshhOpenMapBtn}>
                    <Text style={styles.shrkkwaterrshhDetailsBtnText}>
                      Open in Map
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={async () => {
                    const seq = ++shrkkwaterrshhSavedSeqRef.current;
                    const res = await shrkkwaterrshhToggleSavedId(
                      shrkkwaterrshhSelectedItem.id,
                    );
                    if (seq !== shrkkwaterrshhSavedSeqRef.current) {
                      return;
                    }
                    const map: Record<string, boolean> = {};
                    res.ids.forEach((id: string) => {
                      map[id] = true;
                    });
                    setShrkkwaterrshhLikedById(map);
                  }}>
                  <ImageBackground
                    source={require('../../elements/i/shrkkwaterrlroundbt.png')}
                    resizeMode="stretch"
                    style={styles.shrkkwaterrshhToggleBtn}>
                    <Image
                      source={
                        shrkkwaterrshhLiked
                          ? require('../../elements/i/shrkkwaterrlroliked.png')
                          : require('../../elements/i/shrkkwaterrlroulike.png')
                      }
                    />
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </Shrkkwaterrshhlayt>
  );
};

const styles = StyleSheet.create({
  shrkkwaterrshhExitText: {color: '#FFFFFF', fontWeight: '700', fontSize: 14},

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

  shrkkwaterrshhFullFlex: {flex: 1},

  shrkkwaterrshhTopBar: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  shrkkwaterrshhTopBarSpacer: {width: 85, height: 48},
  shrkkwaterrshhExitBtn: {
    backgroundColor: '#041E4A',
    borderRadius: 22,
    paddingHorizontal: 16,
    height: 48,
    justifyContent: 'center',
    width: 85,
    alignItems: 'center',
  },

  shrkkwaterrshhTitleText: {color: '#FFFFFF', fontWeight: '600', fontSize: 16},

  shrkkwaterrshhStartWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 18,
    marginTop: 34,
  },
  shrkkwaterrshhShark: {marginBottom: 20},
  shrkkwaterrshhStartCard: {
    borderRadius: 18,
    width: '89%',
  },
  shrkkwaterrshhStartTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#061A2F',
    marginBottom: 25,
    textAlign: 'center',
  },
  shrkkwaterrshhGoRandomBtn: {
    width: 160,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  shrkkwaterrshhGoRandomText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
  },
  shrkkwaterrshhDetailsWrap: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 14,
    paddingBottom: 120,
    width: '84%',
    marginTop: 20,
  },

  shrkkwaterrshhDetailsCard: {
    borderRadius: 24,
  },
  shrkkwaterrshhDetailsInner: {
    padding: 14,
    paddingBottom: 20,
  },
  shrkkwaterrshhDetailsImg: {
    width: '70%',
    height: 130,
    borderRadius: 12,
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 4,
  },
  shrkkwaterrshhDetailsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#061A2F',
    textAlign: 'center',
    marginBottom: 10,
  },
  shrkkwaterrshhDetailsSectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#061A2F',
    marginTop: 6,
  },
  shrkkwaterrshhDetailsText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#061A2F',
    marginTop: 2,
    lineHeight: 18,
  },
  shrkkwaterrshhDetailsActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 17,
  },
  shrkkwaterrshhToggleBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shrkkwaterrshhOpenMapBtn: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    width: 184,
  },
  shrkkwaterrshhDetailsBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
  },
  shrkkwaterrshhAgainWrap: {
    alignSelf: 'center',
    marginTop: 16,
  },
  shrkkwaterrshhAgainText: {
    color: '#EAFBFF',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Shrkkwaterrshhrand;
