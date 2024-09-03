import React from "react";

import { View, ScrollView, Text } from "react-native";

import { styles } from "./style";

import CategoriesSection from "./Category/Category.dash";

import CarouselSlider from "./Carousel/CarouselSlider";

export const Dash = () => {
  
  return (
    <ScrollView style={styles.container}>
      <CarouselSlider />
      <View style={styles.categoriesContainer}>
        <CategoriesSection />
      </View>
    </ScrollView>
  );
};
