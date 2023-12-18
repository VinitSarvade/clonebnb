import { ForwardedRef, MutableRefObject, forwardRef } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Image } from 'expo-image';

import { Categories as CategoriesList } from '@/assets/data/categories';
import Text from '@/components/Text';

interface CategoriesProps {
  selectedIdx: number;
  categoriesRef: MutableRefObject<TouchableOpacity[]>;
  onSelect: (index: number) => void;
}

const Categories = forwardRef(
  (
    { onSelect, selectedIdx, categoriesRef }: CategoriesProps,
    ref: ForwardedRef<ScrollView>
  ) => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-x-9"
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ref={ref}
      >
        {CategoriesList.map((category, index) => {
          const selected = index === selectedIdx;
          return (
            <TouchableOpacity
              key={index}
              ref={(el) => (categoriesRef.current[index] = el!)}
              activeOpacity={1}
              className={`py-3 items-center ${
                selected ? 'border-b-2' : 'opacity-50'
              }`}
              onPress={() => onSelect(index)}
            >
              <Image
                source={category.image}
                contentFit="cover"
                className="w-6 h-6"
              />
              <Text
                className={`mt-2 tracking-tight text-xs ${
                  selected ? 'font-mon-sb' : ''
                }`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
);

export default Categories;
