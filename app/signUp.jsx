import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const HandleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert("Sign up", "Please fill all the fields!");
      return;
    }

    //login process
  };
  return (
    <CustomKeyboardView>
      <SafeAreaView className="">
        <StatusBar style="dark" />
        <View className="mx-3 mb-8">
          <Image
            source={require("../assets/images/register.png")}
            style={{ height: hp(20) }}
            resizeMode="contain"
          />
        </View>
        <View className=" mt-5 mb-8">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800 "
          >
            Sign Up
          </Text>
        </View>

        <View className="gap-4 px-3">
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl pb-3"
          >
            <Feather name="user" size={hp(2.7)} color="gray" />

            <TextInput
              onChangeText={(value) => (usernameRef.current = value)}
              // style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700 text-lg"
              placeholder="Username"
              placeHolderTextColor={"gray"}
            />
          </View>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl pb-3"
          >
            <Octicons name="mail" size={hp(2.7)} color="gray" />

            <TextInput
              onChangeText={(value) => (emailRef.current = value)}
              // style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700 text-lg"
              placeholder="Email Address"
              placeHolderTextColor={"gray"}
            />
          </View>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl pb-3"
          >
            <Octicons name="lock" size={hp(2.7)} color="gray" />

            <TextInput
              onChangeText={(value) => (passwordRef.current = value)}
              // style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700 text-lg"
              placeholder="Password"
              secureTextEntry
              placeHolderTextColor={"gray"}
            />
          </View>

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl pb-3"
          >
            <Feather name="image" size={hp(2.7)} color="gray" />

            <TextInput
              onChangeText={(value) => (profileRef.current = value)}
              // style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700 text-lg"
              placeholder="Profile picture url"
              placeHolderTextColor={"gray"}
            />
          </View>

          {/* Submit button */}

          <View className="pt-5">
            {loading ? (
              <View className="flex-row justify-center">
                <Loading size={hp(6)} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={HandleRegister}
                style={{ height: hp(6.5) }}
                className="bg-indigo-500 rounded-xl justify-center items-center"
              >
                <Text
                  style={{ fontSize: hp(2.7) }}
                  className="text-white font-bold tracking-wider"
                >
                  Sign Up
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
              Already have an account{" "}
            </Text>

            <Pressable onPress={() => router.push("/signIn")}>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-bold text-indigo-500"
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </CustomKeyboardView>
  );
};

export default SignUp;
