import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [isAuthenticated, SetIsAuthenticated] = useState(undefined);
  useEffect(() => {
    //onAuthStateChanged
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user) {
        SetIsAuthenticated(true)
        SetUser(user)
      } else {
        SetIsAuthenticated(false)
        SetUser(user)
      }
    })
    return unsub
  }, []);

  const login = async (email, password) => {
    try {
    } catch (error) {}
  };

  const logout = async () => {
    try {
    } catch (error) {}
  };

  const register = async (email, password, username, profileUrl) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log('response.user:', response?.user)


      await setDoc(db, 'users', response?.user?.id), {
        username,
        profileUrl,
        userId: response?.user?.id
      }

      return {success: true, data: response?.user}
    } catch (error) {
      let msg = error.message
      if(msg.includes('(auth/invalid-email)')) msg = 'Invalid email'
      return {success: false, msg: msg}
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be wrapped inside and AuthContextProvider");
  }

  return value;
};
