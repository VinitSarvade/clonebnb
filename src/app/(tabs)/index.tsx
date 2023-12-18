import { useMemo, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Link, Tabs } from 'expo-router';

import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { LISTINGS } from '@/assets/data/listings';
import ExploreHeader from '@/components/ExploreHeader';
import ListingItem from '@/components/ListingItem';
import Text from '@/components/Text';

export default function ExploreScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['12%', '100%'], []);

  return (
    <View className="flex-1 -mt-16">
      <Tabs.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />

      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <BottomSheetFlatList
          className="rounded-lg"
          ListHeaderComponent={
            <Text className="text-center font-mon-sb mb-8">
              {LISTINGS.length} homes
            </Text>
          }
          data={LISTINGS}
          contentContainerStyle={{ paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Link href={`/listing/${item.id}`} key={item.id} asChild>
              <TouchableOpacity className="px-5 mb-10" activeOpacity={1}>
                <ListingItem item={item} index={index} />
              </TouchableOpacity>
            </Link>
          )}
        />
      </BottomSheet>
    </View>
  );
}
