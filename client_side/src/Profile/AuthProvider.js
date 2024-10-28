import { useContext, createContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = 'http://localhost:5000';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const loginAction = useCallback(async (data) => {
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const res = await response.json();
      if (res.token) {
        setUser({ role: res.role });  // Adjust to store the role
        setToken(res.token);
        localStorage.setItem("site", res.token);
        localStorage.setItem('isLoggedIn', 'true'); // Store login status
        navigate("/");
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
      throw err;  // Re-throw the error so it can be caught in the Login component
    }
  }, [navigate]);

  const logOut = useCallback(() => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    localStorage.setItem('isLoggedIn', 'false'); // Set logged out status
    navigate("/login");
  }, [navigate]);

  const value = {
    token,
    user,
    loginAction,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
