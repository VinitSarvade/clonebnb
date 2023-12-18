import { View } from 'react-native';

import { Image } from 'expo-image';

import { Listing } from '@/assets/data/listings';
import Text from '@/components/Text';
import { calculateAge } from '@/utils/date';

interface HostHighlightProps {
  listing: Listing;
}

export default function HostHighlight({ listing }: HostHighlightProps) {
  return (
    <View className="px-5 bg-white">
      <View className="py-5 border-y border-gray-300 flex-row items-center">
        <Image
          source={listing.host_picture_url}
          className="w-12 h-12 rounded-full bg-slate-400"
        />
        <View className="ml-4 gap-y-1">
          <Text className="font-mon-m text-base">
            Hosted by {listing.host_name}
          </Text>
          <Text className="text-lightGrey">
            {calculateAge(listing.host_since)} years hosting
          </Text>
        </View>
      </View>
    </View>
  );
}
