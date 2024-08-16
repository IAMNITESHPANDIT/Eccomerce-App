import AsyncStorage from "@react-native-async-storage/async-storage";
import { displayMessage } from "../toaster";

export const getLocalStorage = async (key) => {
  try {
    await AsyncStorage.setItem(key);
  } catch (error) {
    displayMessage(error || "Couldn't get local storage");
  }
};

export const setLocalStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    displayMessage(error || "Couldn't set local storage");
  }
};

export const removeFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    displayMessage(error || "Couldn't remove from local storage");
  }
};
