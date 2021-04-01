// ini adalah komponen halaman register
// import Input, didalam komponen Input isinya adalah TextInput
import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components';

// disini isinya arrow untuk back, gambar, text, dan textinput
const Register = () => {
  return (
    <View style={{padding: 20}}>
      <View style={{width: 25, height: 25, backgroundColor: 'blue'}} />
      <View
        style={{
          width: 100,
          height: 91,
          backgroundColor: 'yellow',
          marginTop: 17,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: 'purple',
          marginTop: 16,
          maxWidth: 199,
          maxHeight: 32,
        }}>
        Mohon mengisi beberapa data untuk proses daftar anda
      </Text>
      <Input placeholder="nama lengkap" />
      <Input placeholder="email" />
      <Input placeholder="password" />
    </View>
  );
};

export default Register;
