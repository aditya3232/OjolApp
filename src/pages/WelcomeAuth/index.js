// ini adalah komponen halaman WelcomeAuth
// style disesuaikan dengan yang ada di figma

import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// TouchableOpacity adalah sesuatu yg bisa di klik (button) yg ada didalam react native
// paddingvertical, untuk mengatur padding yg atas dan bawahnya sama
// marginBottom disini akan memberikan marginbottom komponen ActionButton,
// jadi ketika actionbutton dipanggi 2x di komponenen welcomeauth, dua komponen tersbut akan terdapat jarak 36px
// paddingHorizontal dipakai karena text tsb tidak benar" w=226px, maka dari itu dibuat lebih pendek 15%,
// paddingHorizontal akan memberikan jarak kiri kanan text kurang lbih 15%
// text ActionButton disini dibuat dinamis, sehingga akan mendefinisikan props ({desc, title})
// setelah didefinisikan, kemudian props dipanggil pada bagian komponen ActionButton
const ActionButton = ({desc, title}) => {
  return (
    <View style={{marginBottom: 36, maxWidth: 226}}>
      <Text
        style={{
          fontSize: 10,
          color: '#7A7A7A',
          textAlign: 'center',
          paddingHorizontal: '15%',
          marginBottom: 4,
        }}>
        {/* memanggil props */}
        {desc}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#A55EEA',
          borderRadius: 25,
          paddingVertical: 13,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// alignItems, digunakan untuk menengahkan item yg ada di welcomeAuth
// flex 1 supaya item di welcomeauth masuk kedalam seluruh layar
// di view logo welcomeauth diberi margin 6 px sesuai dengan yg ada di figma (antara marginbottom logo dgn text logo)
// di text logo diberi marginbottom 96, yaitu ajrak antara marginbottom text logo dengan text "silahkan pilih masuk"
// dipemanggilan ActionButton diberikan props {desc, title}
const WelcomeAuth = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: 226,
          height: 157,
          backgroundColor: '#A55EEA',
          marginBottom: 6,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#A55EEA',
          marginBottom: 96,
        }}>
        Selamat Datang di O-JOL
      </Text>
      <ActionButton
        desc="Silahkan pilih masuk, jika anda sudah memiliki akun"
        title="Masuk"
      />
      <ActionButton
        desc="Atau, silahkan daftar jika anda belum memiliki akun"
        title="Daftar"
      />
    </View>
  );
};

export default WelcomeAuth;
