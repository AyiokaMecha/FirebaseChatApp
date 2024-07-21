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
import { SafeAreaView } from "react-native-safe-area-context";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { useAuth } from "../context/authContext";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {login} = useAuth()

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign in", "Please fill all the fields!");
      return;
    }

    //login process
    setLoading(true)
    const response = await login('Sign In', "Please fill all the fields")
    setLoading(false)
    if(!response.success) {
      Alert.alert('Sign In', response.msg)
    }

  };
  return (
    <CustomKeyboardView>
      <SafeAreaView className="">
        <StatusBar style="dark" />
        <View className="border-2 mb-8">
          <Image
            source={require("../assets/images/login.png")}
            className="h-[30vh]"
            resizeMode="contain"
          />
        </View>
        <View className=" mb-8">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800 "
          >
            Sign In
          </Text>
        </View>

        <View className="gap-4 px-4">
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
          >
            <Octicons name="mail" size={hp(2.7)} color="gray" />

            <TextInput
              onChangeText={(value) => (emailRef.current = value)}
              // style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700 text-lg "
              placeholder="Email Address"
              placeHolderTextColor={"gray"}
            />
          </View>
          <View
            // style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl h-[7vh]"
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
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-right text-neutral-500 "
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
      </SafeAreaView>
    </CustomKeyboardView>
  );
};

export default SignIn;

// <View className="flex-1">
//       <StatusBar style="dark" />
//       <View
//         style={{
//           paddingTop: hp(8),
//           paddingHorizontal: wp(5),
//         }}
//         className="flex-1 gap-12"
//       >
//         {/* Sign In image */}
//         <Image
//           style={{ height: hp(2.5) }}
//           resizeMode="contain"
//           source={require("../assets/images/login.png")}
//         />
//       </View>
//       <View>
//         <Text
//           style={{ fontSize: hp(4) }}
//           className="font-bold tracking-wider text-center text-neutral-800"
//         >
//           Sign In
//         </Text>

//     <View className="gap-4 ">
//       <View
//         style={{ height: hp(7) }}
//         className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
//       >
//         <Octicons name="mail" size={hp(2.7)} color="gray" />

//         <TextInput
//           onChangeText={(value) => (emailRef.current = value)}
//           style={{ fontSize: hp(2) }}
//           className="flex-1 font-semibold text-neutral-700 "
//           placeholder="Email Address"
//           placeHolderTextColor={"gray"}
//         />
//       </View>
//       <View className="gap-4">
//         <View
//           style={{ height: hp(7) }}
//           className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
//         >
//           <Octicons name="lock" size={hp(2.7)} color="gray" />

//           <TextInput
//             onChangeText={(value) => (passwordRef.current = value)}
//             style={{ fontSize: hp(2) }}
//             className="flex-1 font-semibold text-neutral-700"
//             placeholder="Password"
//             secureTextEntry
//             placeHolderTextColor={"gray"}
//           />
//         </View>
//         <Text
//           style={{ fontSize: hp(1.8) }}
//           className="font-semibold text-right text-neutral-500 "
//         >
//           Forgot Password
//         </Text>

//         {/* Submit button */}

//         <View>
//           {loading ? (
//             <View className="flex-row justify-center">
//               <Loading size={hp(6)} />
//             </View>
//           ) : (
//             <TouchableOpacity
//               onPress={handleLogin}
//               style={{ height: hp(6.5) }}
//               className="bg-indigo-500 rounded-xl justify-center items-center"
//             >
//               <Text
//                 style={{ fontSize: hp(2.7) }}
//                 className="text-white font-bold tracking-wider"
//               >
//                 Sign In
//               </Text>
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* Sign up text */}
//         <View className="flex-row justify-center">
//           <Text
//             style={{ fontSize: hp(1.8) }}
//             className="font-semibold text-neutral-500"
//           >
//             Don't have an account?{" "}
//           </Text>

//           <Pressable onPress={() => router.push("/signUp")}>
//             <Text
//               style={{ fontSize: hp(1.8) }}
//               className="font-bold text-indigo-500"
//             >
//               Sign Up
//             </Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   </View>
// </View>
