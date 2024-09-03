import React, { useEffect } from 'react';

import { Text } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { fetchCategoryData } from '../action.dash';

import Loading from '../../loading/loading';

import Card from '../../card/card';

import { useNavigation } from '@react-navigation/native';
import { NAMES } from '../../../utils/constant/names';

const CategoriesSection = () => {

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { categories:cards, loadingCategories, errorCategories } = useSelector(state => state.bannerSlide);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, [dispatch]);

  if (loadingCategories) {
    return <Loading />
  }

  if (errorCategories) {
    return <Text style={styles.statusText}>Error: {errorCategories}</Text>;
  }
  
  const onPressHandler = (data) =>{
    navigation.navigate(NAMES.CATEGORY, { name: data?.name });
  }

  return (
    <>
      <Card cards={cards} onPressHandler={onPressHandler} />
    </>
  );
};

export default CategoriesSection;
