import { View, StyleSheet } from "react-native";
import Auth from "../components/auth/Auth";

const AuthLayout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Auth />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
export default AuthLayout;
