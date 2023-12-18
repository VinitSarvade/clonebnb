import { TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Text from '@/components/Text';

export default function Search() {
  return (
    <View className="flex-row items-center justify-between gap-x-2 px-5">
      <TouchableOpacity className="flex-1 flex-row items-center gap-x-2 p-3 bg-white rounded-full shadow-sm">
        <Ionicons name="search-outline" size={24} />

        <View>
          <Text className="font-mon-m tracking-tight">Where to?</Text>
          <Text className="font-mon-l text-xs tracking-tight">
            Anywhere &middot; Any week &middot; Add guests
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="rounded-full border border-lightGrey justify-center items-center w-9 h-9">
        <Ionicons name="options-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
}
