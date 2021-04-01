// setiap kali membuat folder didalamnya pasti ada index, karena itulah file yg pertama diakses
// navigation stack diletakkan di index.js
// ini adalah komponen router, dimana dia adalah stack navigator yg menyimpan kumpulan pages
// nanti komponen router akan dipanggil di App.js
// option headerShawn: false, agar header tidak muncul di halaman welcomeauth
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Register, WelcomeAuth} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
