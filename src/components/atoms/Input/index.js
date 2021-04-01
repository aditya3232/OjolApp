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
const Input = ({placeholder}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.default}
    />
  );
};

// ini adalah penulisan objek styles yg baru, secara fungsi sama saja seperti yg sebelumnya (objek javascript biasa)
// padding vertical, horizontal agar placeholder agak nengah (didalam TexInput)
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
