import { View, TextInput, Pressable, Text } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
import useStateValue from "../../hooks/useStateValue";

const Signin = ({ navigation }) => {
  const [, dispatch] = useStateValue();
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const signInHandler = () => {
    if (state.password.length < 6) {
      Toast.show({
        type: "error",
        text1: "Password should have minimum 6 characters",
      });
      return;
    }
    Toast.show({
      type: "success",
      text1: "Signed in successfully",
    });
    dispatch({ type: "CHANGE_USER" });
  };
  return (
    <View className="flex-1 space-y-5 items-center justify-center px-2">
      <TextInput
        value={state.email}
        className="w-3/4 border rounded-md p-2 text-lg placeholder:text-lg"
        placeholder="Email Address"
        keyboardType="email-address"
        onChangeText={(text) => setstate({ ...state, email: text })}
      />
      <TextInput
        value={state.password}
        onChangeText={(text) => setstate({ ...state, password: text })}
        className="w-3/4 border rounded-md p-2 text-lg placeholder:text-lg"
        placeholder="Password"
        secureTextEntry={true}
      />
      <View className="flex flex-row space-x-5">
        <Pressable
          onPress={() =>
            setstate({ email: "testemail@gmail.com", password: "123456" })
          }
        >
          <Text className="px-4 py-2 bg-red-500 text-white rounded-lg text-lg">
            Test User
          </Text>
        </Pressable>
        <Pressable
          disabled={!state.email || !state.password}
          onPress={signInHandler}
        >
          <Text className="px-4 py-2 bg-gray-500 text-white rounded-lg text-lg">
            Sign In
          </Text>
        </Pressable>
      </View>
      <View className="flex flex-row space-x-1">
        <Text className="text-lg">Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("signup")}>
          <Text className="text-lg underline text-blue-500 font-semibold">
            Create an account.
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signin;
