// disini adalah komponen page Splash
// disini diberi fungsi useEffect setTimeout
// navigate, ketika klik back kita bisa kembali ke screen sebelumnya
// replace, ketika klik back kita (tidak bisa) kembali ke screen sebelumnya
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
