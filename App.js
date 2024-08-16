import { StyleSheet, SafeAreaView } from "react-native";

import { Provider } from "react-redux";

import store from "./utils/store/store";

import Route from "./routes/Route";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};



export default AppWrapper;


