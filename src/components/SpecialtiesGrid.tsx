import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import { ChevronRight } from 'lucide-react-native';

type SpecialtyItem = { name: string; image: any };

export default function SpecialtiesGrid({
  specialties,
  onSelect,
  sliceCount = 9,
}: {
  specialties: SpecialtyItem[];
  onSelect?: (name: string) => void;
  sliceCount?: number;
}) {
  return (
    <View style={tw`mt-6 px-6`}>
      <Text style={tw`text-lg font-semibold text-gray-900 flex-1 text-left`}>
        Find a Doctor for your Health Problems
      </Text>
      <View style={tw`mt-2`}>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {specialties.slice(0, sliceCount).map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`w-[30%] mb-4 items-center justify-center`}
              onPress={() => onSelect?.(item.name)}
            >
              <View
                style={tw`relative bg-blue-50 w-[70px] h-[70px] rounded-[10px] items-center justify-center overflow-hidden shadow-sm`}
              >
                {item.image ? (
                  <Image source={item.image} style={tw`w-[80%] h-[80%]`} resizeMode="contain" />
                ) : null}
              </View>
              <Text style={tw`text-xs mt-2 text-center text-gray-600 font-medium`}>{item.name}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={tw`w-[30%] mb-4 items-center`}
            onPress={() => onSelect?.('__view_more__')}
          >
            <View style={tw`bg-blue-100 w-[100px] h-[100px] rounded-[30px] items-center justify-center`}>
              <ChevronRight size={18} color="#059669" />
            </View>
            <Text style={tw`text-xs mt-2 text-center text-blue-700 font-bold`}>View More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
