import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa'; // Import icon from react-icons library
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../app/firebase';

const Auth = ({ isOpen, toggleModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleLoginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.loginnWithPopup(provider);
    } catch (error) {
      console.error('Error loging in with Google:', error);
    }
  };

  // Saat modal dibuka
  const openModal = () => {
    // Simpan nilai overflow sebelumnya
    document.body.dataset.overflow = document.body.style.overflow;
    // Atur overflow menjadi hidden untuk mencegah scroll
    document.body.style.overflow = 'hidden';
  };

  // Saat modal ditutup
  const closeModal = () => {
    // Kembalikan overflow ke nilai sebelumnya
    document.body.style.overflow = document.body.dataset.overflow || '';
  };

  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm" onClick={toggleModal}></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg z-10 ">
        <h2 className="text-xl font-bold mb-4">{isLogin ? 'Login' : 'Sign In'}</h2>
        <form>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            className="border p-2 mb-4 w-full"/>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            className="border p-2 mb-4 w-full"/>
          {isLogin ? ( 
            <button onClick={handleLogin} type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
          ) : (
            <button onClick={handleSignUp} type="submit" className="bg-green-500 text-white p-2 rounded w-full">Sign In</button>
          )}
        </form>
        <div className="flex flex-col justify-center">
        <p className="flex justify-center text-slate-500 p-2">or</p>
        {isLogin ? (
          <button onClick={handleSignInWithGoogle} className="flex justify-center items-center bg-red-600 text-white p-2 rounded w-full ">
            <FaGoogle className="mr-2" /> 
             Login With Google
          </button>
        ) : (
          <button onClick={handleLoginWithGoogle} className="flex justify-center items-center bg-red-600 text-white p-2 rounded w-full ">
          <FaGoogle className="mr-2" /> 
           Sign Up With Google
        </button>
        )}
        </div>
        <div className="flex flex-col justify-center pt-4">
          <p className="flex justify-center text-slate-500 ">Don't have an account yet?</p>
          <button onClick={handleToggle} className=" text-blue-500 text-center">{isLogin ? 'Sign In instead' : 'Login instead'}</button>
        </div>
        <div className="flex justify-items-end">
          <button onClick={toggleModal} className="mt-4 text-gray-500">Close</button>
        </div>
      </div>
    </div>

  );
};

export default Auth;
