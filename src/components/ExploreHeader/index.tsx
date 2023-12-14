import { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import Categories from './Categories';
import Search from './Search';

export default function ExploreHeader() {
  const categoriesRef = useRef<TouchableOpacity[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedCatIdx, setSelectedCatIdx] = useState(0);

  const handleOnSelect = (idx: number) => {
    setSelectedCatIdx(idx);
    categoriesRef.current[idx].measure((x, y) => {
      scrollViewRef?.current?.scrollTo({
        x: x - 52,
        animated: true,
      });
    });
  };

  return (
    <SafeAreaView className="bg-slate-50 shadow-sm">
      <Search />

      <Categories
        ref={scrollViewRef}
        categoriesRef={categoriesRef}
        onSelect={handleOnSelect}
        selectedIdx={selectedCatIdx}
      />
    </SafeAreaView>
  );
}
