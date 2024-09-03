import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Card from "../card/card";

import { fetchCategoryDataBySlug } from "./action.category";

import { View } from "react-native";

import { styles } from "./style";

import { useNavigation, useRoute } from "@react-navigation/native";

import useDynamicHeaderTitle from "../../hooks/useDynamicHeaderTitle";
import { NAMES } from "../../utils/constant/names";

const Category = () => {

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const {
    params: { name },
  } = useRoute();

  const {
    categories: cards,
    loadingCategories,
    errorCategories,
  } = useSelector((state) => state.categorySlide);

  useEffect(() => {
    dispatch(
      fetchCategoryDataBySlug({
        categorySlug: name,
      })
    );
  }, [dispatch]);

  if (loadingCategories) {
    return <Loading />;
  }

  if (errorCategories) {
    return <Text style={styles.statusText}>Error: {errorCategories}</Text>;
  }

  const onPressHandler = (data) => {
    const {itemId:id , itemName:name} = data;
    navigation.navigate(NAMES.ITEM_DETAILS, { name, id});
  };

  const dataHandler = (data) => {
    return data.length > 0
      ? data.map((item) => ({ ...item, name: item.itemName }))
      : [];
  };

  useDynamicHeaderTitle(name);

  return (
    <View style={styles.container}>
      <Card cards={dataHandler(cards)} onPressHandler={onPressHandler} />
    </View>
  );
};

export default Category;
