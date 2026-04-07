import {
  ShrkkwaterrshhGetSavedIds,
  ShrkkwaterrshhToggleSavedId,
} from '../Shrkkwaterrshhcpn/Shrkkwaterrshhsavdstore';

import {useFocusEffect} from '@react-navigation/native';

import React, {useCallback, useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Shrkkwaterrshhlayt from '../Shrkkwaterrshhcpn/Shrkkwaterrshhlayt';
import {
  shrkkwaterrshhLocData,
  type ShrkkwaterrshhLocItem,
} from './Shrkkwaterrshhloc';

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
    console.log('error');
  }
}

function ShrkkwaterrshhSavdTopBar({
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

const Shrkkwaterrshhsavd = ({navigation}: any) => {
  const [shrkkwaterrshhSavedIds, setShrkkwaterrshhSavedIds] = useState<
    string[]
  >([]);
  const [shrkkwaterrshhSelectedItem, setShrkkwaterrshhSelectedItem] =
    useState<ShrkkwaterrshhLocItem | null>(null);

  const shrkkwaterrshhSavedItems = useMemo(() => {
    const set = new Set(shrkkwaterrshhSavedIds);
    return shrkkwaterrshhLocData.filter(x => set.has(x.id));
  }, [shrkkwaterrshhSavedIds]);

  const shrkkwaterrshhReload = useCallback(() => {
    let alive = true;
    (async () => {
      const ids = await ShrkkwaterrshhGetSavedIds();
      if (alive) {
        setShrkkwaterrshhSavedIds(ids);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  useFocusEffect(shrkkwaterrshhReload);

  const shrkkwaterrshhIsLiked = shrkkwaterrshhSelectedItem
    ? shrkkwaterrshhSavedIds.includes(shrkkwaterrshhSelectedItem.id)
    : false;

  return (
    <Shrkkwaterrshhlayt>
      <View style={styles.shrkkwaterrshhFullFlex}>
        <ShrkkwaterrshhSavdTopBar
          title="Saved"
          showExit={!!shrkkwaterrshhSelectedItem}
          onExit={() => setShrkkwaterrshhSelectedItem(null)}
        />

        {!shrkkwaterrshhSelectedItem ? (
          shrkkwaterrshhSavedItems.length === 0 ? (
            <View style={styles.shrkkwaterrshhEmptyWrap}>
              <View style={styles.shrkkwaterrshhEmptyIcons}>
                <Image
                  source={require('../../elements/i/shrkkwaterrrsv.png')}
                />
              </View>

              <LinearGradient
                colors={['#BFFDEE', '#3FCFAD']}
                style={styles.shrkkwaterrshhEmptyCard}>
                <View
                  style={{
                    padding: 6,
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#041E4A',
                      borderRadius: 18,
                      padding: 16,
                    }}>
                    <Text style={styles.shrkkwaterrshhEmptyTitle}>
                      No saved splashes yet
                    </Text>
                    <Text style={styles.shrkkwaterrshhEmptySub}>
                      Your next spot is still out there —{'\n'}go find it
                    </Text>
                  </View>
                </View>
              </LinearGradient>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => navigation.navigate('Shrkkwaterrshhloc')}>
                <ImageBackground
                  source={require('../../elements/i/shrkkwaterrlonextbt.png')}
                  resizeMode="stretch"
                  style={styles.shrkkwaterrshhExploreBtn}>
                  <Text style={styles.shrkkwaterrshhExploreText}>
                    Explore Waterparks
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              data={shrkkwaterrshhSavedItems}
              keyExtractor={i => i.id}
              contentContainerStyle={styles.shrkkwaterrshhListContent}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({item}) => (
                <LinearGradient
                  colors={['#87E5FF', '#13B7E5']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.shrkkwaterrshhCard}>
                  <View style={styles.shrkkwaterrshhCardRow}>
                    <View style={styles.shrkkwaterrshhCardLeft}>
                      <Image
                        source={item.image}
                        style={styles.shrkkwaterrshhCardImg}
                      />
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setShrkkwaterrshhSelectedItem(item)}>
                        <ImageBackground
                          source={require('../../elements/i/shrkkwaterrlonextbt.png')}
                          resizeMode="stretch"
                          style={styles.shrkkwaterrshhDetailsBtnBg}>
                          <Text style={styles.shrkkwaterrshhDetailsBtnText}>
                            Details
                          </Text>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.shrkkwaterrshhCardBody}>
                      <Text
                        numberOfLines={2}
                        style={styles.shrkkwaterrshhCardTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.shrkkwaterrshhCardLabel}>
                        Address:
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={styles.shrkkwaterrshhCardText}>
                        {item.address}
                      </Text>
                      <Text style={styles.shrkkwaterrshhCardLabel}>
                        Coordinates:
                      </Text>
                      <Text style={styles.shrkkwaterrshhCardText}>
                        {item.coords.lat}, {item.coords.lng}
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              )}
            />
          )
        ) : (
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
                  const res = await ShrkkwaterrshhToggleSavedId(
                    shrkkwaterrshhSelectedItem.id,
                  );
                  setShrkkwaterrshhSavedIds(res.ids);
                }}>
                <ImageBackground
                  source={require('../../elements/i/shrkkwaterrlroundbt.png')}
                  resizeMode="stretch"
                  style={styles.shrkkwaterrshhToggleBtn}>
                  <Image
                    source={
                      shrkkwaterrshhIsLiked
                        ? require('../../elements/i/shrkkwaterrlroliked.png')
                        : require('../../elements/i/shrkkwaterrlroulike.png')
                    }
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Shrkkwaterrshhlayt>
  );
};

const styles = StyleSheet.create({
  shrkkwaterrshhExploreBtn: {
    width: 200,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shrkkwaterrshhExploreText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
  },

  shrkkwaterrshhFullFlex: {flex: 1, paddingBottom: 100},
  shrkkwaterrshhTopBar: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
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
    minWidth: 180,
    alignItems: 'center',
  },
  shrkkwaterrshhTitleText: {color: '#FFFFFF', fontWeight: '600', fontSize: 16},

  shrkkwaterrshhEmptyWrap: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 18,
  },
  shrkkwaterrshhEmptyIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },

  shrkkwaterrshhEmptyCard: {
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  shrkkwaterrshhEmptyTitle: {
    color: '#041E4A',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  shrkkwaterrshhEmptySub: {
    color: '#041E4A',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 1,
  },

  shrkkwaterrshhListContent: {
    paddingTop: 14,
    paddingBottom: 140,
    gap: 14,
    width: '84%',
    alignSelf: 'center',
    marginTop: 10,
  },
  shrkkwaterrshhCard: {
    flexDirection: 'row',
    borderRadius: 20,
  },
  shrkkwaterrshhCardRow: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shrkkwaterrshhCardLeft: {
    alignItems: 'center',
    gap: 11,
  },
  shrkkwaterrshhDetailsBtnBg: {
    width: 113,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shrkkwaterrshhCardImg: {
    width: 127,
    height: 72,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  shrkkwaterrshhCardBody: {
    paddingLeft: 10,
    width: '60%',
  },
  shrkkwaterrshhCardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#001840',
    marginBottom: 4,
  },
  shrkkwaterrshhCardLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#001840',
    marginTop: 2,
  },
  shrkkwaterrshhCardText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#061A2F',
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
    fontWeight: '900',
    fontSize: 12,

    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,
  },
});

export default Shrkkwaterrshhsavd;
