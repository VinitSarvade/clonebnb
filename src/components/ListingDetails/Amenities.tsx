import { View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Listing } from '@/assets/data/listings';
import Text from '@/components/Text';

interface AmenitiesProps {
  listing: Listing;
}

export default function Amenities({ listing }: AmenitiesProps) {
  return (
    <View className="px-5 bg-white">
      <View className="py-5 border-y border-gray-300">
        <Text className="font-mon-m text-lg">What this place offers</Text>

        {listing.amenities.map((amenity) => (
          <View className="flex-row items-center mt-3" key={amenity}>
            <Ionicons name="checkmark" size={16} />
            <Text className="ml-2">{amenity}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
