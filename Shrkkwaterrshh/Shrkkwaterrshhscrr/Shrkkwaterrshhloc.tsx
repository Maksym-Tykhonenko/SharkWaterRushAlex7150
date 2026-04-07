import {
  shrkkwaterrshhGetSavedIds,
  shrkkwaterrshhToggleSavedId,
} from '../Shrkkwaterrshhcpn/Shrkkwaterrshhsavdstore';

import React, {useCallback, useMemo, useRef, useState} from 'react';

import {
  Image,
  ImageBackground,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Shrkkwaterrshhlayt from '../Shrkkwaterrshhcpn/Shrkkwaterrshhlayt';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';

export type ShrkkwaterrshhLocCategory =
  | 'HIGH SPEED SLIDES'
  | 'TROPICAL ESCAPE'
  | 'FAMILY FLOW'
  | 'CHILL WATER SPOTS';

export type ShrkkwaterrshhLocItem = {
  id: string;
  category: ShrkkwaterrshhLocCategory;
  title: string;
  description: string;
  address: string;
  coords: {lat: number; lng: number};
  image?: number;
};

const shrkkwaterrshhDefaultImage = require('../../elements/i/shrkkwaterrlopl1.png');

const shrkkwaterrshhLocAllCategories: Array<ShrkkwaterrshhLocCategory | 'All'> =
  [
    'All',
    'HIGH SPEED SLIDES',
    'TROPICAL ESCAPE',
    'FAMILY FLOW',
    'CHILL WATER SPOTS',
  ];

export const shrkkwaterrshhLocData: ShrkkwaterrshhLocItem[] = [
  {
    id: 'tikibad-duinrell',
    category: 'HIGH SPEED SLIDES',
    title: 'Tikibad Duinrell',
    description:
      'One of the most iconic waterparks in the Netherlands, Tikibad is built for speed and variety. It features a massive collection of slides ranging from high-speed drops to long twisting tunnels. The indoor and outdoor combination keeps the experience dynamic, while the park’s design focuses on continuous motion and energy. It’s a place where every ride feels like a quick adrenaline reset.',
    address: 'Duinrell 1, 2242 JP Wassenaar, Netherlands',
    coords: {lat: 52.1407, lng: 4.3868},
    image: require('../../elements/i/shrkkwaterrlopl1.png'),
  },
  {
    id: 'aqua-mexicana-slagharen',
    category: 'HIGH SPEED SLIDES',
    title: 'Aqua Mexicana – Slagharen',
    description:
      'A vibrant Mexican-themed waterpark packed with color, slides, and immersive design. Aqua Mexicana stands out with its unique visual style and a strong mix of fast slides and relaxing areas. The layout allows smooth movement between attractions, while the atmosphere makes it feel more like a themed adventure than a standard waterpark.',
    address: 'Zwarte Dijk 37, 7776 PB Slagharen, Netherlands',
    coords: {lat: 52.6235, lng: 6.554},
    image: require('../../elements/i/shrkkwaterrlopl2.png'),
  },
  {
    id: 'aqua-mundo-de-kempervennen',
    category: 'HIGH SPEED SLIDES',
    title: 'Aqua Mundo – De Kempervennen',
    description:
      'Known for its intense slides and active water features, this park leans toward a more energetic experience. The fast slides and strong flow areas create a sense of movement throughout the space. It’s a solid choice for visitors looking for something more dynamic inside a tropical-style environment.',
    address: 'Kempervennendreef 8, 5563 VB Westerhoven, Netherlands',
    coords: {lat: 51.3147, lng: 5.4021},
    image: require('../../elements/i/shrkkwaterrlopl3.png'),
  },
  {
    id: 'hof-van-saksen-waterpark',
    category: 'HIGH SPEED SLIDES',
    title: 'Hof van Saksen Waterpark',
    description:
      'One of the most unique water experiences in the Netherlands, known for its visually striking slides and creative design. Each slide feels different — from fast spirals to enclosed rides with light effects. The space is modern, clean, and built for a more premium experience, where design matters as much as movement.',
    address: 'Borgerderstraat 12, 9449 PA Nooitgedacht, Netherlands',
    coords: {lat: 52.9626, lng: 6.6638},
    image: require('../../elements/i/shrkkwaterrlopl4.png'),
  },
  {
    id: 'sloterparkbad-amsterdam',
    category: 'HIGH SPEED SLIDES',
    title: 'Sloterparkbad (Amsterdam)',
    description:
      'A modern aquatic complex with both indoor and outdoor areas. While not a classic “theme waterpark,” it offers a strong mix of structured swimming zones and light attractions. The clean architecture and open space make it feel more minimal and urban.',
    address: 'President Allendelaan 3, 1064 GW Amsterdam, Netherlands',
    coords: {lat: 52.3676, lng: 4.8194},
    image: require('../../elements/i/shrkkwaterrlopl5.png'),
  },
  {
    id: 'zwembad-de-tongelreep-eindhoven',
    category: 'HIGH SPEED SLIDES',
    title: 'Zwembad De Tongelreep (Eindhoven)',
    description:
      'A large water complex combining sports pools with recreational zones. It includes slides and open areas but keeps a more structured and balanced atmosphere. It’s less about chaos, more about controlled movement and space.',
    address: 'Antoon Coolenlaan 1, 5644 RX Eindhoven, Netherlands',
    coords: {lat: 51.4117, lng: 5.466},
    image: require('../../elements/i/shrkkwaterrlopl6.png'),
  },
  {
    id: 'aqua-mundo-de-eemhof',
    category: 'TROPICAL ESCAPE',
    title: 'Aqua Mundo – De Eemhof',
    description:
      'A tropical indoor paradise with palm trees, wave pools, and a flowing “wild river.” The environment is designed to feel warm and immersive, creating a contrast with the outside climate. It’s less about speed and more about continuous water movement and atmosphere.',
    address: 'Slingerweg 1, 3896 LD Zeewolde, Netherlands',
    coords: {lat: 52.3656, lng: 5.5389},
    image: require('../../elements/i/shrkkwaterrlopl7.png'),
  },
  {
    id: 'aqua-mundo-het-heijderbos',
    category: 'TROPICAL ESCAPE',
    title: 'Aqua Mundo – Het Heijderbos',
    description:
      'A dense jungle-style water world with a strong visual identity. Surrounded by greenery and warm lighting, this park focuses on atmosphere and exploration. It blends relaxed water areas with a few faster attractions, creating a balanced but immersive experience.',
    address: 'Hommersumseweg 43, 6598 MC Heijen, Netherlands',
    coords: {lat: 51.6713, lng: 6.0247},
    image: require('../../elements/i/shrkkwaterrlopl8.png'),
  },
  {
    id: 'aqua-mundo-park-zandvoort',
    category: 'TROPICAL ESCAPE',
    title: 'Aqua Mundo – Park Zandvoort',
    description:
      'Located near the coast, this waterpark combines a compact layout with a calm, beach-adjacent vibe. It offers a mix of slides and pools but stands out more for its atmosphere than intensity. A good stop after exploring the nearby seaside.',
    address: 'Vondellaan 60, 2041 BE Zandvoort, Netherlands',
    coords: {lat: 52.3713, lng: 4.5331},
    image: require('../../elements/i/shrkkwaterrlopl9.png'),
  },
  {
    id: 'zwembad-amerena-amersfoort',
    category: 'TROPICAL ESCAPE',
    title: 'Zwembad Amerena (Amersfoort)',
    description:
      'A newer generation water center with a clean and modern layout. It focuses on simplicity and comfort, offering slides and pools without overwhelming the space. Everything feels organized and easy to navigate.',
    address: 'De Velduil 2, 3815 XT Amersfoort, Netherlands',
    coords: {lat: 52.1677, lng: 5.3872},
    image: require('../../elements/i/shrkkwaterrlopl10.png'),
  },
  {
    id: 'bosbad-amersfoort',
    category: 'TROPICAL ESCAPE',
    title: 'Bosbad Amersfoort',
    description:
      'An outdoor water park surrounded by forest, offering a very different atmosphere compared to indoor parks. It combines natural surroundings with classic pools and slides, creating a more open and seasonal experience.',
    address: 'Barchman Wuytierslaan 95, 3819 AB Amersfoort, Netherlands',
    coords: {lat: 52.1571, lng: 5.373},
    image: require('../../elements/i/shrkkwaterrlopl11.png'),
  },
  {
    id: 'de-mirandabad-amsterdam',
    category: 'TROPICAL ESCAPE',
    title: 'De Mirandabad (Amsterdam)',
    description:
      'A large outdoor swimming complex with multiple pools and a more relaxed, social atmosphere. It’s less about attractions and more about open space and freedom of movement.',
    address: 'De Mirandalaan 9, 1079 PA Amsterdam, Netherlands',
    coords: {lat: 52.3466, lng: 4.91},
    image: require('../../elements/i/shrkkwaterrlopl12.png'),
  },
  {
    id: 'zwembad-de-krommerijn-utrecht',
    category: 'TROPICAL ESCAPE',
    title: 'Zwembad De Krommerijn (Utrecht)',
    description:
      'A calm and spacious outdoor swimming area with a strong focus on relaxation. Clean design, open layout, and a slower rhythm define the experience here.',
    address: 'Kranenkamp 1, 3582 XG Utrecht, Netherlands',
    coords: {lat: 52.082, lng: 5.1512},
    image: require('../../elements/i/shrkkwaterrlopl13.png'),
  },
  {
    id: 'zwembad-de-peppel-ede',
    category: 'TROPICAL ESCAPE',
    title: 'Zwembad De Peppel (Ede)',
    description:
      'A mixed indoor-outdoor water complex with a balance between activity and rest. It offers slides and swimming areas while keeping the environment accessible and easygoing.',
    address: 'Peppelensteeg 17, 6715 CV Ede, Netherlands',
    coords: {lat: 52.0438, lng: 5.6735},
    image: require('../../elements/i/shrkkwaterrlopl14.png'),
  },
  {
    id: 'optisport-de-stok-roosendaal',
    category: 'TROPICAL ESCAPE',
    title: 'Optisport De Stok (Roosendaal)',
    description:
      'A modern waterpark-style complex with slides and leisure pools. The space feels compact but dynamic, offering enough variation to keep movement interesting without overwhelming the visitor.',
    address: 'De Stok 4, 4703 SZ Roosendaal, Netherlands',
    coords: {lat: 51.5465, lng: 4.4653},
    image: require('../../elements/i/shrkkwaterrlopl15.png'),
  },
  {
    id: 'sportiom',
    category: 'FAMILY FLOW',
    title: 'Sportiom',
    description:
      'Sportiom is a versatile indoor water complex designed to fit different moods in one visit. You’ll find a mix of slides, a wave pool, and open swimming areas that allow both movement and relaxation. The space feels structured but not restrictive — you can move freely between attractions without feeling rushed. It works well for longer stays, where the pace naturally shifts from active moments to calm breaks. The overall atmosphere is balanced, making it a reliable choice for visitors who want variety without intensity.',
    address: 'Victorialaan 10, 5213 JE \u2019s-Hertogenbosch, Netherlands',
    coords: {lat: 51.6889, lng: 5.303},
    image: require('../../elements/i/shrkkwaterrlopl16.png'),
  },
  {
    id: 'de-scheg',
    category: 'FAMILY FLOW',
    title: 'De Scheg',
    description:
      'De Scheg offers a clean and well-organized water experience where everything feels easy to follow. The park combines moderate slides with spacious pools, creating a comfortable rhythm throughout your visit. It’s the kind of place where you can stay for hours without feeling overwhelmed — moving from light activity to relaxed swimming at your own pace. The layout supports a smooth flow, and the environment stays consistent without sudden intensity spikes. A solid option when you want a steady and predictable water experience.',
    address: 'Piet van Donkplein 1, 7422 LW Deventer, Netherlands',
    coords: {lat: 52.2669, lng: 6.2217},
    image: require('../../elements/i/shrkkwaterrlopl17.png'),
  },
  {
    id: 'swimfun-joure',
    category: 'FAMILY FLOW',
    title: 'Swimfun Joure',
    description:
      'Swimfun Joure brings a lighter, more playful approach to water activities. The space is compact, but it feels lively thanks to its interactive elements and soft attractions. Instead of focusing on speed or scale, it creates a relaxed environment where everything is easy to enjoy without pressure. It’s ideal for shorter visits or moments when you just want to stay in the water and keep things simple. The atmosphere stays friendly and open, with just enough movement to keep it engaging.',
    address: 'Sewei 3, 8501 SP Joure, Netherlands',
    coords: {lat: 52.9645, lng: 5.8033},
    image: require('../../elements/i/shrkkwaterrlopl18.png'),
  },
  {
    id: 'de-bonte-wever',
    category: 'CHILL WATER SPOTS',
    title: 'De Bonte Wever',
    description:
      'De Bonte Wever is built around a calm and steady water experience. The focus here is not on fast slides, but on smooth transitions between pools and relaxation areas. The environment feels controlled and comfortable, allowing you to stay in the water without constant movement or noise. It’s a place where time slows down a bit — ideal for unwinding and enjoying a more stable flow. Everything is designed to keep the experience easy and continuous rather than intense.',
    address: 'Stadsbroek 17, 9405 BK Assen, Netherlands',
    coords: {lat: 52.9896, lng: 6.5647},
    image: require('../../elements/i/shrkkwaterrlopl19.png'),
  },
  {
    id: 'mosaqua',
    category: 'CHILL WATER SPOTS',
    title: 'Mosaqua',
    description:
      'Mosaqua combines indoor and outdoor water zones into one relaxed experience. The outdoor sections bring a more open and natural feeling, especially during warmer days, while the indoor areas keep things accessible year-round. The pace here is easygoing — you can move between spaces without pressure or structure. It’s less about chasing attractions and more about enjoying the environment and the water itself. The mix of spaces gives it a slightly more dynamic feel without becoming overwhelming.',
    address: 'Landsraderweg 11, 6271 NT Gulpen, Netherlands',
    coords: {lat: 50.8155, lng: 5.8886},
    image: require('../../elements/i/shrkkwaterrlopl20.png'),
  },
  {
    id: 'de-waterhoorn',
    category: 'CHILL WATER SPOTS',
    title: 'De Waterhoorn',
    description:
      'De Waterhoorn keeps things simple and consistent. The layout is straightforward, with a few slides and open swimming areas that are easy to access. It doesn’t try to impress with scale or speed — instead, it offers a steady and reliable water experience. The environment feels calm and predictable, which makes it comfortable for repeat visits. A good option when you want something uncomplicated and easy to navigate.',
    address: 'Holenweg 14C, 1624 PB Hoorn, Netherlands',
    coords: {lat: 52.6473, lng: 5.0664},
    image: require('../../elements/i/shrkkwaterrlopl21.png'),
  },
  {
    id: 'tropiqua',
    category: 'CHILL WATER SPOTS',
    title: 'Tropiqua',
    description:
      'Tropiqua delivers a softer, more intimate version of a tropical water environment. The space feels warm and quiet, with a focus on comfort rather than activity. Instead of large attractions, it offers a smooth and steady experience where you can stay in the water without interruptions. The atmosphere leans toward relaxation, making it a good choice when you’re looking for something calm and contained.',
    address: 'Langeleegte 1, 9641 NZ Veendam, Netherlands',
    coords: {lat: 53.1042, lng: 6.879},
    image: require('../../elements/i/shrkkwaterrlopl22.png'),
  },
  {
    id: 'calluna',
    category: 'CHILL WATER SPOTS',
    title: 'Calluna',
    description:
      'Calluna is a minimal and nature-connected water space where everything feels slower and more grounded. Surrounded by greenery, it creates a calm setting that focuses on simple movement in water rather than attractions. The experience here is quiet and steady, with no rush or pressure to move between zones. It’s more about staying present in the environment than exploring features. A good fit for those who prefer a low-key and relaxed atmosphere.',
    address: 'Nieuwe Zuidweg 2, 8162 PA Epe, Netherlands',
    coords: {lat: 52.3435, lng: 5.991},
    image: require('../../elements/i/shrkkwaterrlopl23.png'),
  },
];

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
    await Share.share({
      title: item.title,
      message,
    });
  } catch {
    console.log('error sharing location');
  }
}

function ShrkkwaterrshhLocTopBar({
  title,
  label,
  leftLabel,
  onLeftPress,
}: {
  title: string;
  label?: boolean;
  leftLabel: string;
  onLeftPress: () => void;
}) {
  return (
    <View style={styles.shrkkwaterrshhTopBar}>
      {label && (
        <Pressable onPress={onLeftPress} style={styles.shrkkwaterrshhExitBtn}>
          <Text style={styles.shrkkwaterrshhExitText}>{leftLabel}</Text>
        </Pressable>
      )}
      <View style={styles.shrkkwaterrshhTitlePill}>
        <Text style={styles.shrkkwaterrshhTitleText}>{title}</Text>
      </View>
    </View>
  );
}

const Shrkkwaterrshhloc = ({navigation}: any) => {
  const [shrkkwaterrshhCategory, setShrkkwaterrshhCategory] =
    useState<(typeof shrkkwaterrshhLocAllCategories)[number]>('All');
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
        setShrkkwaterrshhSelectedItem(null);
        setShrkkwaterrshhCategory('All');
      };
    }, []),
  );

  const shrkkwaterrshhFiltered = useMemo(() => {
    if (shrkkwaterrshhCategory === 'All') {
      return shrkkwaterrshhLocData;
    }
    return shrkkwaterrshhLocData.filter(
      i => i.category === shrkkwaterrshhCategory,
    );
  }, [shrkkwaterrshhCategory]);

  const shrkkwaterrshhLiked = shrkkwaterrshhSelectedItem
    ? !!shrkkwaterrshhLikedById[shrkkwaterrshhSelectedItem.id]
    : false;

  return (
    <Shrkkwaterrshhlayt>
      <View style={styles.shrkkwaterrshhFullFlex}>
        <ShrkkwaterrshhLocTopBar
          title="Waterpark Explorer"
          label={!!shrkkwaterrshhSelectedItem}
          leftLabel={'Exit'}
          onLeftPress={() => {
            if (shrkkwaterrshhSelectedItem) {
              setShrkkwaterrshhSelectedItem(null);
              return;
            }
            const rootNav = navigation?.getParent?.()?.getParent?.();
            if (rootNav?.replace) {
              rootNav.replace('Shrkkwaterrshhonbrd');
            }
          }}
        />

        {!shrkkwaterrshhSelectedItem ? (
          <>
            <View style={styles.shrkkwaterrshhChipsWrap}>
              <View style={styles.shrkkwaterrshhChipsRow}>
                {shrkkwaterrshhLocAllCategories.map(c => {
                  const shrkkwaterrshhIsActive = c === shrkkwaterrshhCategory;
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      key={c}
                      onPress={() => setShrkkwaterrshhCategory(c)}
                      style={[
                        styles.shrkkwaterrshhChip,
                        shrkkwaterrshhIsActive
                          ? styles.shrkkwaterrshhChipActive
                          : styles.shrkkwaterrshhChipInactive,
                      ]}>
                      <Text
                        style={[
                          styles.shrkkwaterrshhChipText,
                          shrkkwaterrshhIsActive
                            ? styles.shrkkwaterrshhChipTextActive
                            : styles.shrkkwaterrshhChipTextInactive,
                        ]}>
                        {c === 'HIGH SPEED SLIDES'
                          ? 'High Speed Slides'
                          : c === 'TROPICAL ESCAPE'
                          ? 'Tropical Escape'
                          : c === 'FAMILY FLOW'
                          ? 'Family Flow'
                          : c === 'CHILL WATER SPOTS'
                          ? 'Chill Water Spots'
                          : 'All'}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <FlatList
              data={shrkkwaterrshhFiltered}
              keyExtractor={i => i.id}
              contentContainerStyle={styles.shrkkwaterrshhListContent}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({item}) => {
                return (
                  <LinearGradient
                    colors={['#87E5FF', '#13B7E5']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.shrkkwaterrshhCard}>
                    <View style={styles.shrkkwaterrshhCardRow}>
                      <View style={styles.shrkkwaterrshhCardLeft}>
                        <Image
                          source={
                            item.image ??
                            require('../../elements/i/shrkkwaterrlopl1.png')
                          }
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
                );
              }}
            />
          </>
        ) : (
          <View style={styles.shrkkwaterrshhDetailsWrap}>
            <LinearGradient
              colors={['#87E5FF', '#13B7E5']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.shrkkwaterrshhDetailsCard}>
              <View style={styles.shrkkwaterrshhDetailsInner}>
                <Image
                  source={
                    shrkkwaterrshhSelectedItem.image ??
                    shrkkwaterrshhDefaultImage
                  }
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
                }
                style={{}}>
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
        )}
      </View>
    </Shrkkwaterrshhlayt>
  );
};

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

  shrkkwaterrshhTitleText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },

  shrkkwaterrshhFullFlex: {
    flex: 1,
  },
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
  },
  shrkkwaterrshhToggleBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shrkkwaterrshhExitText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  shrkkwaterrshhChipsWrap: {
    marginTop: 15,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  shrkkwaterrshhChipsRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  shrkkwaterrshhChip: {
    borderRadius: 18,
    paddingHorizontal: 20,
    borderWidth: 1,
    minHeight: 31,
    justifyContent: 'center',
  },

  shrkkwaterrshhChipActive: {
    backgroundColor: '#B82829',
    borderColor: '#fff',
  },
  shrkkwaterrshhChipInactive: {
    backgroundColor: '#8B39B7',
    borderColor: 'transparent',
  },
  shrkkwaterrshhChipText: {
    fontSize: 14,
    fontWeight: '400',
  },
  shrkkwaterrshhChipTextActive: {
    color: '#FFFFFF',
  },
  shrkkwaterrshhChipTextInactive: {
    color: '#EAFBFF',
  },
  shrkkwaterrshhListContent: {
    paddingTop: 14,
    paddingBottom: 140,
    gap: 14,
    width: '84%',
    alignSelf: 'center',
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
  shrkkwaterrshhDetailsBtn: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#B82829',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
  },
  shrkkwaterrshhDetailsBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,

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
  roundBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#B82829',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
  },
  roundBtnLiked: {
    backgroundColor: '#D1102A',
  },
  roundBtnText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    top: -1,
  },
  shrkkwaterrshhOpenMapBtn: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    width: 184,
  },
  shrkkwaterrshhOpenMapBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
});

export default Shrkkwaterrshhloc;
