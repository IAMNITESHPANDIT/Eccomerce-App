import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import DashboardLayout from '../../screen/DashboardLayout';
import CategoryLayout from '../../screen/CategoryLayout';
import CategoriesSection from '../dashboard/Category/Category.dash';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Home Screen</Text>
  </View>
);

const CategoriesScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Categories Screen</Text>
  </View>
);

const CartScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Cart Screen</Text>
  </View>
);

const AccountScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Account Screen</Text>
  </View>
);

const AnimatedIcon = ({ name, color, size, focused }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  React.useEffect(() => {
    if (focused) {
      scale.value = withSpring(1.2, { damping: 3 });
    } else {
      scale.value = withSpring(1);
    }
  }, [focused]);

  return (
    <Animated.View style={animatedStyle}>
      <Ionicons name={name} color={color} size={size} />
    </Animated.View>
  );
};

export default function Drawer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Categories') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return (
              <AnimatedIcon
                name={iconName}
                color={color}
                size={size}
                focused={focused}
              />
            );
          },
          tabBarActiveTintColor: '#2874F0',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
          },
        })}
      >
        <Tab.Screen name="Home" component={DashboardLayout} />
        <Tab.Screen name="Categories" component={CategoriesSection} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
});
