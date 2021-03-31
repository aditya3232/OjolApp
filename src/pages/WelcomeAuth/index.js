// ini adalah komponen halaman WelcomeAuth
// style disesuaikan dengan yang ada di figma
import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {colors} from '../../utils';
import {welcomeAuth} from '../../assets';

// alignItems, digunakan untuk menengahkan item yg ada di welcomeAuth
// flex 1 supaya item di welcomeauth masuk kedalam seluruh layar
// di view logo welcomeauth diberi margin 6 px sesuai dengan yg ada di figma (antara marginbottom logo dgn text logo)
// di text logo diberi marginbottom 96, yaitu ajrak antara marginbottom text logo dengan text "silahkan pilih masuk"
// dipemanggilan ActionButton diberikan props {desc, title}
// style akan dibuatkan objek diluar (tapi tetap didalam file index.js WelcomeAuth) agar lebih rapi lagi
// semua style view biasanya didalam wrapper
const WelcomeAuth = () => {
  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeAuth} style={styles.wrapper.ilustration} />
      <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
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

const styles = {
  // styling untuk merapikan keseluruhan komponen di welcomeauth
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
    },
    ilustration: {
      width: 226,
      height: 157,
      marginBottom: 6,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 96,
    },
  },
};

export default WelcomeAuth;
