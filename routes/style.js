import { StyleSheet } from "react-native";
import { colors } from "../utils/color/color";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeAreaContainer:{
        flex: 0, 
        backgroundColor: colors.secondary
    },
    childContainer: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        position: "relative",
    }
  });