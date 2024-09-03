import React, { useEffect, useState } from "react";

import { View, Text, Image, ScrollView } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";

import { useDispatch, useSelector } from "react-redux";

import Loading from "../loading/loading";

import Ripple from "react-native-material-ripple";

import { fetchItemDetails } from "./action.item";

import { useRoute } from "@react-navigation/native";

import useDynamicHeaderTitle from "../../hooks/useDynamicHeaderTitle";

const ItemDetailPage = () => {
  const {
    items: item,
    loading,
    error,
  } = useSelector((state) => state.itemSlide);

  const dispatch = useDispatch();

  const {
    params: { name, id },
  } = useRoute();

  useEffect(() => {
    dispatch(
      fetchItemDetails({
        itemId: id,
      })
    );
  }, [dispatch]);

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useDynamicHeaderTitle(name);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.itemName}>{item.itemName}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <AntDesign
              key={index}
              name={index < item.reviewStars ? "star" : "staro"}
              size={20}
              color="#FFD700"
            />
          ))}
        </View>
        <Text style={styles.price}>₹{item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Size:</Text>
          <Text style={styles.infoValue}>{item.size}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Color:</Text>
          <Text style={styles.infoValue}>{item.color}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>In Stock:</Text>
          <Text style={styles.infoValue}>{item.stock}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Ripple
            onPress={decrementQuantity}
            style={styles.quantityButton}
            rippleColor="rgba(0, 0, 0, 0.2)"
            rippleOpacity={1}
            rippleDuration={300}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </Ripple>
          <Text style={styles.quantity}>{quantity}</Text>
          <Ripple
            onPress={incrementQuantity}
            style={styles.quantityButton}
            rippleColor="rgba(0, 0, 0, 0.2)"
            rippleOpacity={1}
            rippleDuration={300}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </Ripple>
        </View>
        <View style={styles.actionContainer}>
          <Ripple
            style={[styles.button, styles.addToCartButton]}
            rippleColor="rgba(0, 0, 0, 0.2)"
            rippleOpacity={1}
            rippleDuration={400}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Ripple>
          <Ripple
            style={[styles.button, styles.buyNowButton]}
            rippleColor="rgba(255, 255, 255, 0.3)"
            rippleOpacity={1}
            rippleDuration={400}
          >
            <Text style={styles.buttonText}>Buy Now</Text>
          </Ripple>
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemDetailPage;
