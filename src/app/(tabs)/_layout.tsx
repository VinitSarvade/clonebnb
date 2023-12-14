import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';

const TABS = [
  {
    name: 'index',
    title: 'Explore',
    icon: 'search',
    iconProvider: Ionicons,
  },
  {
    name: 'wishlists',
    title: 'Wishlists',
    icon: 'heart',
    iconProvider: FontAwesome5,
  },
  {
    name: 'trips',
    title: 'Trips',
    icon: 'airbnb',
    iconProvider: FontAwesome5,
  },
  {
    name: 'inbox',
    title: 'Inbox',
    icon: 'chatbox-outline',
    iconProvider: Ionicons,
  },
  {
    name: 'profile',
    title: 'Profile',
    icon: 'user-circle',
    iconProvider: FontAwesome5,
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tabIconSelected,
      }}
    >
      {TABS.map(({ name, title, icon, iconProvider: Icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ size, color }) => (
              <Icon size={size} color={color} name={icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
