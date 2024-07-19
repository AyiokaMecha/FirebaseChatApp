import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign in", "Please fill all the fields!");
      return;
    }

    //login process
  };
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{
          paddingTop: hp(8),
          paddingHorizontal: wp(5),
        }}
        className="flex-1 gap-12"
      >
        {/* Sign In image */}
        <Image
          style={{ height: hp(25) }}
          // resizeMode="contain"
          source={require("../assets/images/login.png")}
        />
      </View>
      <View className="gap-10">
        <Text
          style={{ fontSize: hp(4) }}
          className="font-bold tracking-wider text-center text-neutral-800"
        >
          Sign In
        </Text>

        <View className="gap-4">
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
          >
            <Octicons name="mail" size={hp(2.7)} color="gray" />

            <TextInput
              onChangeText={(value) => (emailRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Email Address"
              placeHolderTextColor={"gray"}
            />
          </View>
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <Octicons name="lock" size={hp(2.7)} color="gray" />

              <TextInput
                onChangeText={(value) => (passwordRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Password"
                secureTextEntry
                placeHolderTextColor={"gray"}
              />
            </View>
            <Text
              style={{ fontSize: hp(1.8) }}
              className="font-semibold text-right text-neutral-500"
            >
              Forgot Password
            </Text>

            {/* Submit button */}

            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6)} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleLogin}
                  style={{ height: hp(6.5) }}
                  className="bg-indigo-500 rounded-xl justify-center items-center"
                >
                  <Text
                    style={{ fontSize: hp(2.7) }}
                    className="text-white font-bold tracking-wider"
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Sign up text */}
            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-neutral-500"
              >
                Don't have an account?{" "}
              </Text>

              <Pressable onPress={() => router.push("/signUp")}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-indigo-500"
                >
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;