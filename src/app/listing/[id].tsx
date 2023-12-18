import { TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, useAnimatedRef } from 'react-native-reanimated';

import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack, router, useLocalSearchParams } from 'expo-router';

import { LISTINGS } from '@/assets/data/listings';
import Amenities from '@/components/ListingDetails/Amenities';
import HostHighlight from '@/components/ListingDetails/HostHighlight';
import Intro from '@/components/ListingDetails/Intro';
import Text from '@/components/Text';
import useScrollAnimations from '@/hooks/listing-details/useScrollAnimations';

const IMG_HEIGHT = 320;

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function ListingDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing = LISTINGS.find((listing) => listing.id === id);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const { headerBgAnimatedStyle, imageAnimatedStyle } = useScrollAnimations(
    scrollRef,
    IMG_HEIGHT
  );

  if (!listing) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <Text className="text-2xl font-bold">Listing not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerBackground: () => (
            <Animated.View
              className="bg-white h-full -z-10"
              style={headerBgAnimatedStyle}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={router.back}
              className="bg-white rounded-full p-1 shadow-sm"
            >
              <Ionicons name="chevron-back" size={20} />
            </TouchableOpacity>
          ),
        }}
      />

      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        className="flex-1 bg-white"
      >
        <AnimatedImage
          sharedTransitionTag={`listing-${listing.id}`}
          source={{ uri: listing.xl_picture_url }}
          className="w-full h-80"
          style={imageAnimatedStyle}
        />

        <Intro listing={listing} />

        <HostHighlight listing={listing} />

        <View className="px-5 bg-white">
          <Text className="py-5">{listing.description}</Text>
        </View>

        {listing.amenities.length > 0 && <Amenities listing={listing} />}
      </Animated.ScrollView>
    </>
  );
}
