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
    // tambahi di <Stack.Navigator>, props initialRouteName="Register", agar yg kebuka halaman register langsung ketika,
    // di reload, untuk ngecek perubahan biar g reload dari awal
    <Stack.Navigator initialRouteName="Register">
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
