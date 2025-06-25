/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import toast from "react-hot-toast";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [balance, setBalance] = useState(10000);
  const [paidBills, setPaidBills] = useState([]);

  useEffect(() => {
    if (user) {
      const storedBalance = localStorage.getItem(`balance_${user.uid}`);
      setBalance(storedBalance ? parseFloat(storedBalance) : 10000);
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      localStorage.setItem(`balance_${user.uid}`, balance);
    }
  }, [balance, user]);

  useEffect(() => {
    if (user) {
      const storedBills = localStorage.getItem(`paidBills_${user.uid}`);
      setPaidBills(storedBills ? JSON.parse(storedBills) : []);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`paidBills_${user.uid}`, JSON.stringify(paidBills));
    }
  }, [paidBills, user]);

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Email/Password Registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with Email/Password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent. Please check your inbox.");
      
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Update user profile (name + photo)
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const payBill = (billId, amount) => {
    if (paidBills.includes(billId)) return;

    if (balance < amount) {
      toast.error("Insufficient balance to pay this bill.");
      return;
    }

    setBalance((prev) => prev - amount);
    const updated = [...paidBills, billId];
    setPaidBills(updated);
    toast.success("Bill payment successful!");
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authentication = {
    googleLogin,
    createUser,
    login,
    logout,
    user,
    loading,
    balance,
    payBill,
    paidBills,
    resetPassword,
    handleUpdateProfile,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
