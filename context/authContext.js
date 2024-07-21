import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc ,setDoc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, SetIsAuthenticated] = useState(undefined);
  useEffect(() => {
    //onAuthStateChanged
    const unsub = onAuthStateChanged(auth, (user) => { //this is a hook from firebase
      if(user) {
        SetIsAuthenticated(true)
        setUser(user)
        updateUserData(user.uid)
      } else {
        SetIsAuthenticated(false)
        setUser(user)
      }
    })
    return unsub
  }, []);

  const updateUserData = async(userId) => {
    const docRef = doc(db, 'users', userId);
    try{
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        let data = docSnap.data();
        setUser({...user, username: data.username, profileUrl: data.profileUrl, userId: data.uid})
      }
    } catch(e) {
      console.log(e)
    }
   
  }

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return {success: true}
    } catch (error) {
      if(msg.includes('(auth/invalid-email)')) msg = 'Invalid email'
      if(msg.includes('(auth/invalid-credential)')) msg = 'Wrong credentials'
      return {success: false, msg: msg}
    }
  };

  const logout = async () => {
    try {
      await signOut(auth)
      return {success: true}
    } catch (error) {
      return {success: false, msg: e.message, error: error}
    }
  };

  const register = async (email, password, username, profileUrl) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log('response.user:', response?.user)


      await setDoc(doc(db, 'users', response?.user?.uid), {
        username,
        profileUrl,
        userId: response?.user?.uid
      })

      return {success: true, data: response?.user}
    } catch (error) {
      let msg = error.message
      if(msg.includes('(auth/invalid-email)')) msg = 'Invalid email'
      if(msg.include('(auth/email-already-in-use)')) msg = 'This email is already in use'
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
