import React, { useState, useMemo } from "react";

import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import InputField from "../generic/input/InputField";

import Button from "../generic/button/button";

import Loading from "../loading/loading";

import { displayMessage } from "../../utils/toaster";

import { styles } from "./style";

import { signupUser, loginUser } from "./action.auth";

import { INITIAL_FORM_STATE, screenHandler, uiTextHandler, validateForm } from "./index";

import { useAuthForm } from "../../hooks/useAuthForm";

const Auth = () => {
  
  const [isLogin, setIsLogin] = useState(true);

  const { formData, handleInputChange, resetForm } = useAuthForm(INITIAL_FORM_STATE);

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const authIdentifier = useMemo(() => screenHandler(isLogin), [isLogin]);

  const buttonText = isLogin ? "Login" : "Sign Up";

  const redirectText = uiTextHandler(authIdentifier);

  const authHandler = async () => {
    const errorMessage = validateForm(formData, isLogin);

    if (errorMessage) {
      displayMessage(errorMessage);
      return;
    }

    const { Email: email, Password: password, Phone: phoneNumber, Name: name } = formData;
    
    try {
      if (isLogin) {
       const response= await dispatch(loginUser({ email, password }));
       console.log("response: ",response);
      } else {
        await dispatch(signupUser({ email, password, phoneNumber, name }));
      }
    } catch (error) {
      displayMessage("Authentication failed. Please try again.");
    }
  };

  const toggleAuthMode = () => {
    resetForm();
    setIsLogin(!isLogin);
  };

  if (loading) return <Loading />;

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/login.png")}
    >
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {!isLogin && (
            <InputField
              label="Name"
              placeholder="Enter your full name"
              name="Name"
              value={formData.Name}
              onChangeText={(text) => handleInputChange("Name", text)}
              labelStyle={styles.labelStyle}
              style={styles.inputStyle}
            />
          )}

          <InputField
            label="Email"
            placeholder="Enter your email address"
            keyboardType="email-address"
            name="Email"
            value={formData.Email}
            onChangeText={(text) => handleInputChange("Email", text)}
            labelStyle={styles.labelStyle}
            style={styles.inputStyle}
          />

          {!isLogin && (
            <InputField
              label="Phone"
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              name="Phone"
              value={formData.Phone}
              onChangeText={(text) => handleInputChange("Phone", text)}
              labelStyle={styles.labelStyle}
              style={styles.inputStyle}
            />
          )}

          <InputField
            label="Password"
            placeholder="Enter your password"
            name="Password"
            type="password"
            value={formData.Password}
            secureTextEntry={true}
            labelStyle={styles.labelStyle}
            style={styles.inputStyle}
            onChangeText={(text) => handleInputChange("Password", text)}
          />

          <View style={styles.buttonContainer}>
            <Button onPress={()=>authHandler()} style={styles.button}>
              {buttonText}
            </Button>
          </View>

          <View style={styles.accountSection}>
            <Text style={styles.accountText}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Text>
            <TouchableOpacity onPress={toggleAuthMode}>
              <Text style={styles.loginText}>{redirectText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Auth;