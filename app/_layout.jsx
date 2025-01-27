import React, { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { AuthContextProvider, useAuth } from "../context/authContext";
import {
  MenuProvider,
} from "react-native-popup-menu";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    //check is user is Authenticated or not
    if (typeof isAuthenticated === "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      //redirect user to home
      router.replace("/home");
    } else if (isAuthenticated == false) {
      //redirect user to signIn page
      router.replace("/signIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <MenuProvider>
      <AuthContextProvider>
        <MainLayout />
      </AuthContextProvider>
    </MenuProvider>
  );
};

export default RootLayout;
