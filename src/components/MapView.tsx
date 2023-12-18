import { memo, useCallback } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Animated, { FadeIn } from 'react-native-reanimated';

import { router } from 'expo-router';

import { Listing } from '@/assets/data/listings';
import Colors from '@/constants/Colors';

import Text from './Text';

interface MapViewProps {
  listings: Listing[];
}
const INTIAL_REGION = {
  latitude: 46.2044,
  longitude: 6.1432,
  latitudeDelta: 1,
  longitudeDelta: 1,
};

function ListingMapView({ listings }: MapViewProps) {
  const onMarkerPress = useCallback(
    (id: string) => () => {
      router.push(`/listing/${id}`);
    },
    []
  );

  return (
    <Animated.View className="flex-1 my-18" entering={FadeIn.delay(1000)}>
      <MapView
        animationEnabled={false}
        provider={PROVIDER_GOOGLE}
        className="flex-1"
        initialRegion={INTIAL_REGION}
        minPoints={5}
        clusterColor={Colors.tabIconSelected}
        clusterTextColor="#fff"
        clusterFontFamily="mont-semibold"
      >
        {listings.map((item: Listing) => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: item.geolocation.lat,
              longitude: item.geolocation.lon,
            }}
            onPress={onMarkerPress(item.id)}
          >
            <View className="bg-white p-2 rounded-2xl shadow-xl">
              <Text className="font-mon-m">
                {Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item.price)}
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </Animated.View>
  );
}

export default memo(ListingMapView);
