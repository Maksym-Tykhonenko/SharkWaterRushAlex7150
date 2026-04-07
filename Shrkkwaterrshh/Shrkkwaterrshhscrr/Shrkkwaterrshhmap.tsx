import MapView, {Marker, PROVIDER_GOOGLE, type Region} from 'react-native-maps';

import LinearGradient from 'react-native-linear-gradient';

import Shrkkwaterrshhlayt from '../Shrkkwaterrshhcpn/Shrkkwaterrshhlayt';
import {useFocusEffect} from '@react-navigation/native';

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  shrkkwaterrshhGetSavedIds,
  shrkkwaterrshhToggleSavedId,
} from '../Shrkkwaterrshhcpn/Shrkkwaterrshhsavdstore';
import {
  shrkkwaterrshhLocData,
  type ShrkkwaterrshhLocItem,
} from './Shrkkwaterrshhloc';
import Orientation from 'react-native-orientation-locker';

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
    console.log('share cancel/errors');
  }
}

function ShrkkwaterrshhMapTopBar({
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

const Shrkkwaterrshhmap = ({route}: any) => {
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

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();

      return () => {
        Orientation.unlockAllOrientations();
        setShrkkwaterrshhSelectedItem(null);
      };
    }, []),
  );

  const shrkkwaterrshhLiked = shrkkwaterrshhSelectedItem
    ? !!shrkkwaterrshhLikedById[shrkkwaterrshhSelectedItem.id]
    : false;

  const shrkkwaterrshhInitialRegion: Region = useMemo(() => {
    const first = shrkkwaterrshhItems[0];
    return {
      latitude: first?.coords.lat ?? 52.1407,
      longitude: first?.coords.lng ?? 4.3868,
      latitudeDelta: 3,
      longitudeDelta: 3,
    };
  }, [shrkkwaterrshhItems]);

  const shrkkwaterrshhMapRef = useRef<MapView | null>(null);
  const shrkkwaterrshhFocusId = route?.params?.shrkkwaterrshhFocusId as
    | string
    | undefined;

  useEffect(() => {
    if (!shrkkwaterrshhFocusId) {
      return;
    }
    const item = shrkkwaterrshhItems.find(i => i.id === shrkkwaterrshhFocusId);
    if (!item) {
      return;
    }
    setShrkkwaterrshhSelectedItem(item);
    setTimeout(() => {
      shrkkwaterrshhMapRef.current?.animateToRegion(
        {
          latitude: item.coords.lat,
          longitude: item.coords.lng,
          latitudeDelta: 0.25,
          longitudeDelta: 0.25,
        },
        450,
      );
    }, 50);
  }, [shrkkwaterrshhFocusId, shrkkwaterrshhItems]);

  return (
    <Shrkkwaterrshhlayt>
      <View style={styles.shrkkwaterrshhFullFlex}>
        <View style={styles.shrkkwaterrshhMapWrap}>
          <MapView
            ref={ref => {
              shrkkwaterrshhMapRef.current = ref;
            }}
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
            style={StyleSheet.absoluteFillObject}
            initialRegion={shrkkwaterrshhInitialRegion}
            onPress={e => {
              if (e?.nativeEvent?.action === 'marker-press') {
                return;
              }
              setShrkkwaterrshhSelectedItem(null);
            }}>
            {shrkkwaterrshhItems.map(item => (
              <Marker
                key={item.id}
                coordinate={{
                  latitude: item.coords.lat,
                  longitude: item.coords.lng,
                }}
                pinColor="#B82829"
                onPress={e => {
                  e?.stopPropagation?.();
                  setShrkkwaterrshhSelectedItem(item);
                }}>
                <Image
                  source={require('../../elements/i/shrkkwaterrlonpin.png')}
                />
              </Marker>
            ))}
          </MapView>

          <ShrkkwaterrshhMapTopBar
            title="Map"
            showExit={!!shrkkwaterrshhSelectedItem}
            onExit={() => setShrkkwaterrshhSelectedItem(null)}
          />

          {shrkkwaterrshhSelectedItem ? (
            <View style={styles.shrkkwaterrshhCardOverlay}>
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
                  <Text
                    style={styles.shrkkwaterrshhDetailsText}
                    numberOfLines={Platform.OS === 'android' ? 3 : undefined}>
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
          ) : null}
        </View>
      </View>
    </Shrkkwaterrshhlayt>
  );
};

const styles = StyleSheet.create({
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
  shrkkwaterrshhFullFlex: {flex: 1},

  shrkkwaterrshhMapWrap: {
    flex: 1,
  },

  shrkkwaterrshhTopBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
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
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  shrkkwaterrshhExitText: {color: '#FFFFFF', fontWeight: '700', fontSize: 14},
  shrkkwaterrshhTitlePill: {
    backgroundColor: '#041E4A',
    borderRadius: 28,
    paddingHorizontal: 18,
    minHeight: 48,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    minWidth: 170,
    alignItems: 'center',
  },
  shrkkwaterrshhTitleText: {color: '#FFFFFF', fontWeight: '600', fontSize: 16},

  shrkkwaterrshhCardOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 130,
    alignItems: 'center',
  },

  shrkkwaterrshhDetailsCard: {
    borderRadius: 24,
    width: '90%',
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

  shrkkwaterrshhDetailsText: {
    fontSize: 13,
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
    fontSize: 12,
  },
});

export default Shrkkwaterrshhmap;
