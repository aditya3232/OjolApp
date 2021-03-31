// ini adalah komponen Button
// karena Button akan digunakan dibanyak pages, sehingga komponen Button dibuat secara Global
// disini menggunakan prinsip atomic design,
// dan Button lvl nya sngt kecil, sehingga akan masuk komponen atoms
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

// agar Button bisa diklik maka diberikan action onPress
// kemudian action onPress diberikan fungsi
// fungsinya dituliskan didalam props onPress
// props onPress berisi data berupa fungsi ini, onPress={() => handleGoTo(screen)
// fungsi yg dibuat adalah fungsi HandleGoTo yang berada di WelcomeAuth
// setelah diberi onPress, di komponen ActionButton.js dapat diberikan onPress
const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      backgroundColor: colors.default,
      borderRadius: 25,
      paddingVertical: 13,
    },
  },
  text: {
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
};

export default Button;
