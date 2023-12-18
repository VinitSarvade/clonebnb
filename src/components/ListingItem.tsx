import { ForwardedRef, forwardRef } from 'react';
import { View } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

import { Listing } from '@/assets/data/listings';
import Text from '@/components/Text';

const AnimatedImage = Animated.createAnimatedComponent(Image);

interface ListingItemProps {
  item: Listing;
  imageClassName?: string;
  containerClassName?: string;
  index: number;
}

const ListingItem = forwardRef(
  (
    {
      item,
      index,
      imageClassName = '',
      containerClassName = '',
    }: ListingItemProps,
    ref: ForwardedRef<View>
  ) => {
    return (
      <Animated.View
        className={containerClassName}
        entering={FadeInLeft.delay(100)}
      >
        <AnimatedImage
          sharedTransitionTag={`listing-${item.id}`}
          source={{
            uri: item.xl_picture_url ?? item.medium_url ?? item.thumbnail_url,
          }}
          contentFit="cover"
          className={`w-full h-72 rounded-xl ${imageClassName}`}
        />

        <View className="mt-3 flex-row items-center justify-between">
          <Text className="font-mon-sb">
            {item.city}, {item.country}
          </Text>

          {item.review_scores_rating && (
            // Convert the rating to a 5-star scale
            <Text>
              <Ionicons name="star" />
              &ensp;
              {(item.review_scores_rating * 0.05).toFixed(
                Number.isInteger(item.review_scores_rating * 0.05) ? 1 : 2
              )}
            </Text>
          )}
        </View>

        <Text className="text-lightGrey tracking-tight">
          {item.property_type}
        </Text>

        <View className="flex-row items-center mt-1 gap-x-1">
          <Text className="font-mon-m">
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(item.price)}
          </Text>
          <Text>night</Text>
        </View>
      </Animated.View>
    );
  }
);

export default ListingItem;
