// ini adalah komponen ActionButton yg digunakan didalam WelcomeAuth
// Buttons akan diimport dari folder components
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components';
import {colors} from '../../utils';

// TouchableOpacity adalah sesuatu yg bisa di klik (button) yg ada didalam react native
// paddingvertical, untuk mengatur padding yg atas dan bawahnya sama
// marginBottom disini akan memberikan marginbottom komponen ActionButton,
// jadi ketika actionbutton dipanggi 2x di komponenen welcomeauth, dua komponen tersbut akan terdapat jarak 36px
// paddingHorizontal dipakai karena text tsb tidak benar" w=226px, maka dari itu dibuat lebih pendek 15%,
// paddingHorizontal akan memberikan jarak kiri kanan text kurang lbih 15%
// text ActionButton disini dibuat dinamis, sehingga akan mendefinisikan props ({desc, title})
// setelah didefinisikan, kemudian props dipanggil pada bagian komponen ActionButton
// style akan dibuatkan objek diluar (tapi tetap didalam file ActiobButton.js) agar lebih rapi lagi
// const ActionButton = ({desc, title}) => { (props diisi di index.js WelcomeAuth)
const ActionButton = ({desc, title}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>
        {/* memanggil props */}
        {desc}
      </Text>
      <Button title={title} />
    </View>
  );
};

const styles = {
  // styling untuk jarak antar Button di welcomeauth, dan lebar buttonnya
  wrapper: {
    component: {marginBottom: 36, maxWidth: 226},
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.default,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 4,
    },
  },
};

export default ActionButton;
