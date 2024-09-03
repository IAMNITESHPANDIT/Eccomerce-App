import { SafeAreaView } from "react-native";

import AuthLayout from "../screen/AuthLayout";

import { NAMES } from "../utils/constant/names";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../utils/color/color";

import DashboardLayout from "../screen/DashboardLayout";

import CategoryLayout from "../screen/CategoryLayout";

import { styles } from "./style";

import ItemLayout from "../screen/ItemLayout";

const Route = () => {

  const Stack = createNativeStackNavigator();

  const commonHeaderOptions = {
    headerStyle: {
      colors: colors.whiteColor,
      backgroundColor: colors.secondary,
    },
    headerTintColor: colors.whiteColor,
  };

  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.safeAreaContainer} />
      <SafeAreaView
        edges={["left", "right", "bottom"]}
        style={styles.childContainer}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName={NAMES.DASHBOARD}>

          <Stack.Screen
              name={NAMES.AUTH}
              component={AuthLayout}
              options={{
               ...commonHeaderOptions
              }}
            />
            <Stack.Screen
              name={NAMES.DASHBOARD}
              component={DashboardLayout}
              options={{
                ...commonHeaderOptions
              }}
            />

            <Stack.Screen
              name={NAMES.CATEGORY}
              component={CategoryLayout}
              options={{
                ...commonHeaderOptions
              }}
            />

            <Stack.Screen
              name={NAMES.ITEM_DETAILS}
              component={ItemLayout}
              options={{
                ...commonHeaderOptions
              }}
            />
          </Stack.Navigator>
          
        </NavigationContainer>
        {/* <Drawer /> */}
      </SafeAreaView>
    </>
  );
};

export default Route;
