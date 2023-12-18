import { View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Listing } from '@/assets/data/listings';
import Text from '@/components/Text';

interface IntroProps {
  listing: Listing;
}

export default function Intro({ listing }: IntroProps) {
  return (
    <View className="p-5 bg-white">
      <Text className="font-mon-sb text-2xl mb-3">{listing.name}</Text>
      <Text className="font-mon-sb text-base tracking-tight">
        {listing.room_type} in {listing.smart_location}
      </Text>
      <Text className="mt-1 text-sm">
        {`${listing.accommodates} guests · ${listing.bedrooms} bedrooms · ${listing.beds} beds · ${listing.bathrooms} bathrooms`}
      </Text>

      {listing.number_of_reviews > 0 && (
        <Text className="mt-1 font-mon-m text-sm bg">
          <Ionicons name="star" />
          &nbsp;
          {(listing.review_scores_rating * 0.05).toFixed(
            Number.isInteger(listing.review_scores_rating * 0.05) ? 1 : 2
          )}
          &nbsp;&middot;&nbsp;
          {listing.number_of_reviews} reviews
        </Text>
      )}
    </View>
  );
}
