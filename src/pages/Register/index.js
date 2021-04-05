// ini adalah komponen halaman register
// import Input, didalam komponen Input isinya adalah TextInput
// disini yang diimpor dari komponen adalah Button & Input (tinggal pakai)
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, RegisterIllustration} from '../../assets';
import {useState} from 'react';

const Register = () => {
  // untuk mendapatkan data, kita membuat fungsi useState untuk form" yg ada
  // karena kita mengumpulkan fullName, email, password, maka kita mengisi value basic nya dengan objek
  // value basic dimasukkan didalam kurung useState "()"
  // [form, setForm] ini adalah state
  // selanjutnya value basic akan disimpan didalam [form]
  // kemudian untuk merubah form menggunakan setForm
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  // fungsi untuk melihat value yg kita kirim, dapat dilihat ketika di debug
  // menggunakan reactnative debuger
  // nanti fungsi sendData akan dijalankan ketika ada onPress di Button
  // data akan tersimpan di state form
  const sendData = () => {
    console.log('data yang dikirim: ', form);
  };
  // fungsi yg berjalan kalau inputnya lagi berubah, apa yang dilakukan
  // yg dilakukan adalah merubah form (setForm) dengan value
  // yang didalam kurung pada arrow function disebut "parameter"
  const onInputChange = (value, input) => {
    setForm({
      // ...form, akan mengcopy nilai form lama, kemudian kita rubah value barunya,
      // jadi ketika yg dimasukkan value fullName saja, maka diconsole value yg lain tetap ditampilan dgn value,
      // yang belum diisi
      ...form,
      // input yg mana yg dirubah kemudian menunjukkan valuenya
      // disini parameter input dimasukkan ke array, karena array akan menangkap input berupa string yg ada pada action,
      // onChangeText di <Input />
      [input]: value,
    });
  };
  // disini isinya arrow untuk back, gambar, text, dan textinput
  // komponenen {IconBack, RegisterIllustration} (yang berisi assets gambar) dipanggil disini
  // <ScrollView showsVerticalScrollIndicator={false}>, agar bisa discroll ketika halamn tidak tampil semua,
  // dan ketika indicator nya = {false}, maka tampilan scroll-nya akan hilang namun tetap bisa discroll
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack style={styles.iconBack} />
        <RegisterIllustration style={styles.illustration} />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk proses daftar anda
        </Text>
        {/* memberikan jarak antara TexInput dgn text di register */}
        {/* style={styles.space(50)}, ini akan memanggil fungsi style,space yang berisi height(value)*/}
        <View style={styles.space(50)} />
        <Input
          placeholder="nama lengkap"
          // (action value) akan memasukkan value basic fullName, ke dalam state form
          value={form.fullName}
          // (action onChangeText) kalau text sedang berubah yg dilakukan adalah mengirim value pada onChangeText ke,
          // value onInputChane
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(50)} />
        <Input
          placeholder="email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(50)} />
        <Input
          placeholder="password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          // untuk meneymbunyikan text yg dimasukkan (password)
          secureTextEntry={true}
        />
        <View style={styles.space(77)} />
        <Button title="daftar" onPress={sendData} />
      </ScrollView>
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
