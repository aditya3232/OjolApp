// ini adalah komponen Button
// karena Button akan digunakan dibanyak pages, sehingga komponen Button dibuat secara Global
// disini menggunakan prinsip atomic design,
// dan Button lvl nya sngt kecil, sehingga akan masuk komponen atoms
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component}>
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
