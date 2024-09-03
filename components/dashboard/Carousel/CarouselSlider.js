import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Carousel from 'react-native-reanimated-carousel';

import { Dimensions, Text, Image, View } from 'react-native';

import { fetchCarouselData } from '../action.dash';

import { styles } from './carousel.style';

import Loading from '../../loading/loading';

const CarouselSlider = () => {

  const dispatch = useDispatch();

  const { carouselData, loading, error } = useSelector((state) => state.bannerSlide);

  useEffect(() => {
    
    dispatch(fetchCarouselData());

  }, [dispatch]);

  const width = Dimensions.get('window').width;

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.carouselContainer}>
      {carouselData.length > 0 ? (
        <Carousel
          loop
          width={width}
          height={200}
          autoPlay={true}
          data={carouselData}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={{ uri: item.image }} style={styles.carouselImage} />
              <View style={styles.overlay}>
                <Text style={styles.carouselText}>{item.title}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No Data Available</Text>
        </View>
      )}
    </View>
  );
};

export default CarouselSlider;
