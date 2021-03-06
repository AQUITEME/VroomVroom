import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import HomeDrawer from './HomeDrawer';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';
import app from '../../config';

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }
  useEffect(() => {
    const subscriber = app.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {user ? <HomeDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}