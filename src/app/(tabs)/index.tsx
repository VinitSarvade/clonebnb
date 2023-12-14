import { Text } from '@/components/Text';

export default function TabOneScreen() {
  return (
    <>
      <Tabs.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
      <Text>TabOne</Text>
    </>
  );
}
