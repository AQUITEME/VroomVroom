import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import Bookaseat from '../pages/Bookaseat';
import History from '../pages/History';
import Pricing from '../pages/Pricing';
import Account from '../pages/Account';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Book a seat" component={Bookaseat} />
        <Drawer.Screen name="My History" component={History} />
        <Drawer.Screen name="Pricing" component={Pricing} />
        <Drawer.Screen name="My Account" component={Account} />
      </Drawer.Navigator>
  );
}