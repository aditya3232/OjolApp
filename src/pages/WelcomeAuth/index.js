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
const WelcomeAuth = ({navigation}) => {
  // fungsi handleGoTo akan menerima navigation
  // karena di ActionButton sudah ada props onPress, maka data untuk masuk kemananya bisa diberikan seperti ini,
  // onPress={() => handleGoTo('Login')}
  // data string handleGoTo akan diterima sebagai screen (diberi variabel dgn nama screen)
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeAuth} style={styles.wrapper.ilustration} />
      <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
      {/* memanggi komponen ActionButton */}
      <ActionButton
        desc="Silahkan pilih masuk, jika anda sudah memiliki akun"
        title="Masuk"
        onPress={() => handleGoTo('Login')}
      />
      {/* memanggil komponen ActionButton */}
      <ActionButton
        desc="Atau, silahkan daftar jika anda belum memiliki akun"
        title="Daftar"
        onPress={() => handleGoTo('Register')}
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
