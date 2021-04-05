// rnfs shorcut untuk membuat react native functional component dgn stylesheet
// tapi jgn lupa ketika pakai rnfs function nya diganti dengan model arrow function
// jgn lupa jg check export default komponennya
// import juga warna yg ada di utlis
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

// Fungsi Input (const input) ditambah props placeholder, agar placeholdernya dinamis
// kemudian di TextInputnya diberi fungsi placeholder, dimana data dari placeholder disimpan
// sedangkan data placeholder diisi di halaman register
// ...rest artinya, kita akan mengumpulkan semua props yg belum didefinisikan sama sekali
// sehingga props di <Input /> pada halaman register yaitu Value & onChangeText dapat terdefinisi
// ...rest adalah metode membuat props secara dinamis, sehingga tidak perlu mendefinisikan satu satu
const Input = ({placeholder, ...rest}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.default}
      {...rest}
    />
  );
};

// ini adalah penulisan objek styles yg baru, secara fungsi sama saja seperti yg sebelumnya (objek javascript biasa)
// padding vertical, horizontal agar placeholder agak nengah (didalam TexInput)
// styling disini hanya untuk styling textinput saja
// untuk styling textinput pada halaman Register, lebih baik di styling disana (Halaman Register)
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: colors.default,
  },
});

export default Input;
