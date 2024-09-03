import { StyleSheet } from "react-native";
import { colors } from "../../utils/color/color";

export const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    formContainer: {
      color: colors.whiteColor,
    },
    labelStyle: {
      fontSize: 16,
      color: colors.whiteColor,
    },
    inputStyle: {
      height: 40,
      borderColor: colors.grayColor,
      color: colors.whiteColor,
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      placeholderTextColor: "white"
    },
    buttonContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      width: 100,
      // backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    accountSection: {
      marginTop: 20,
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    accountText: {
      fontSize: 16,
      color: colors.whiteColor,
    },
    createText: {
      color: colors.primary,
      fontWeight: "bold",
      marginLeft: 5,
      fontSize: 16,
    },
    loginText: {
      color: colors.primary,
      fontWeight: 'bold',
      marginLeft: 5,
      fontSize: 16,
    },
  });