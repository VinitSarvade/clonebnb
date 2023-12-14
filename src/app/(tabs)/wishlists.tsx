import { View } from 'react-native';

import { Tabs } from 'expo-router';

import { Text } from '@/components/Text';

export default function TabTwoScreen() {
  return (
    <>
      <Tabs.Screen options={{ title: 'Wishlists' }} />
      <View>
        <Text>Tab 2</Text>
      </View>
    </>
  );
}
