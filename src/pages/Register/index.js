// ini adalah komponen halaman register
// import Input, didalam komponen Input isinya adalah TextInput
import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, RegisterIllustration} from '../../assets';

// disini isinya arrow untuk back, gambar, text, dan textinput
// komponenen {IconBack, RegisterIllustration} (yang berisi assets gambar) dipanggil disini
const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack style={styles.iconBack} />
      <RegisterIllustration style={styles.illustration} />
      <Text style={styles.text.desc}>
        Mohon mengisi beberapa data untuk proses daftar anda
      </Text>
      {/* memberikan jarak antara TexInput dgn text di register */}
      {/* style={styles.space(50)}, ini akan memanggil fungsi style,space yang berisi height(value)*/}
      <View style={styles.space(50)} />
      <Input placeholder="nama lengkap" />
      <View style={styles.space(50)} />
      <Input placeholder="email" />
      <View style={styles.space(50)} />
      <Input placeholder="password" />
    </View>
  );
};

// membuat objek stylesheet
const styles = {
  wrapper: {
    page: {padding: 20},
  },
  iconBack: {width: 25, height: 25},
  illustration: {
    width: 100,
    height: 91,
    marginTop: 17,
  },
  text: {
    desc: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 199,
      maxHeight: 32,
    },
  },
  // ini adalah stylesheet dinamis untuk space Input (TextInput), menggunakan function
  // nanti variabel value akan menampung seberapa besar space yg diinginkan
  space: value => {
    return {
      height: value,
    };
  },
};
export default Register;
