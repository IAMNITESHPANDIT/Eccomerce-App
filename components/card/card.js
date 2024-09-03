import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Ripple from "react-native-material-ripple";
import { styles } from "./style";

const Card = ({ cards , onPressHandler }) => {
  return (
    <>
      <View style={styles.container}>
        {cards.map((card, index) => (
          <Ripple
            key={card.id || index}
            style={styles.cardContainer}
            rippleColor="rgba(0, 0, 0, 0.1)"
            rippleOpacity={0.8}
            rippleDuration={600}
            onPress={() => {
              onPressHandler(card);
            }}
          >
            <ImageBackground
              source={{ uri: card.image }}
              style={styles.card}
              imageStyle={styles.cardImage}
            >
              <Text style={styles.cardText}>{card.name}</Text>
            </ImageBackground>
          </Ripple>
        ))}
      </View>
    </>
  );
};

export default Card;
