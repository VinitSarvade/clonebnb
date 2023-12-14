import { TouchableOpacity } from 'react-native';

import { Link, Tabs } from 'expo-router';

import { FlashList } from '@shopify/flash-list';

import { LISTINGS } from '@/assets/data/listings';
import ExploreHeader from '@/components/ExploreHeader';
import ListingItem from '@/components/ListingItem';

export default function ExploreScreen() {
  return (
    <>
      <Tabs.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
      <FlashList
        data={LISTINGS}
        estimatedItemSize={275}
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Link href={`/listing/${item.id}`} key={item.id} asChild>
            <TouchableOpacity className="px-5 mb-10" activeOpacity={1}>
              <ListingItem item={item} />
            </TouchableOpacity>
          </Link>
        )}
      />
    </>
  );
}
