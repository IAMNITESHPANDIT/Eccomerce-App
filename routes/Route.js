import { SafeAreaView ,StyleSheet } from "react-native";

import AuthLayout from "../screen/AuthLayout";


import { NAMES } from "../utils/constant/names";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../utils/color/color";


const Route = () => {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={styles.safeAreaContainer}
      />
      <SafeAreaView
        edges={["left", "right", "bottom"]}
        style={styles.childContainer}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName={NAMES.AUTH}>
            <Stack.Screen
              name={NAMES.AUTH}
              component={AuthLayout}
              options={{
                // title: NAMES.LOGIN,
                headerStyle: {
                  colors: colors.whiteColor,
                  backgroundColor: colors.secondary,
                },
                headerTintColor: colors.whiteColor,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
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

export default Route;
