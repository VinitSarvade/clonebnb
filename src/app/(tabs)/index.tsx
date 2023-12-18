import { useCallback, useMemo, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

import BottomSheet, {
  BottomSheetVirtualizedList,
  BottomSheetVirtualizedListMethods,
} from '@gorhom/bottom-sheet';

import { LISTINGS } from '@/assets/data/listings';
import ExploreHeader from '@/components/ExploreHeader';
import ListingItem from '@/components/ListingItem';
import ListingMapView from '@/components/MapView';
import Text from '@/components/Text';

export default function ExploreScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetListRef = useRef<BottomSheetVirtualizedListMethods>(null);
  const snapPoints = useMemo(() => ['10%', '100%'], []);

  const handleMapBtnPress = useCallback(() => {
    bottomSheetRef.current?.collapse();
    bottomSheetListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }, []);

  return (
    <View className="flex-1 -mt-16">
      <Tabs.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />

      <ListingMapView listings={LISTINGS} />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        animateOnMount={false}
      >
        <BottomSheetVirtualizedList
          ref={bottomSheetListRef}
          className="rounded-lg"
          ListHeaderComponent={
            <Text className="text-center font-mon-sb mb-12">
              {LISTINGS.length} homes
            </Text>
          }
          data={LISTINGS}
          getItemCount={(data) => data.length}
          getItem={(data, index) => data[index]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Link href={`/listing/${item.id}`} key={item.id} asChild>
              <TouchableOpacity className="px-5 mb-10" activeOpacity={1}>
                <ListingItem item={item} index={index} />
              </TouchableOpacity>
            </Link>
          )}
        />
        <Animated.View
          entering={FadeInUp.delay(1000)}
          className="absolute bottom-5 items-center w-full"
        >
          <TouchableOpacity
            className="flex-row items-center bg-black rounded-full px-4 py-2 gap-x-2"
            onPress={handleMapBtnPress}
          >
            <Text className="font-mon-sb text-white">Map</Text>
            <Ionicons name="map" size={24} color="#fff" />
          </TouchableOpacity>
        </Animated.View>
      </BottomSheet>
    </View>
  );
}
