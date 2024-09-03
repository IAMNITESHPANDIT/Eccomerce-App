import AsyncStorage from "@react-native-async-storage/async-storage";

import { displayMessage } from "../toaster";

export const getLocalStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    displayMessage(error.message || "Couldn't get local storage");
    return null;
  }
};

export const setLocalStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    displayMessage(error.message || "Couldn't set local storage");
  }
};

export const removeFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    displayMessage(error.message || "Couldn't remove from local storage");
  }
};