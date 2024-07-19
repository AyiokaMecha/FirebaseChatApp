import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [isAuthenticated, SetIsAuthenticated] = useState(undefined);
  useEffect(() => {
    //onAuthStateChanged

    SetIsAuthenticated(false);
  }, []);

  const login = async (email, password) => {
    try {
    } catch (error) {}
  };

  const logout = async () => {
    try {
    } catch (error) {}
  };

  const register = async (email, password, username, profile) => {
    try {
    } catch (error) {}
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
