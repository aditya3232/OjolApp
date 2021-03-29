// ini adalah tempat export kumpulan semua pages secara global, agar pemanggilannya simpel (pendek)
// contoh pemanggilannya seperti ini => import { Splash } from '../pages';
// nanti komponen ini dipanggil didalam indexnya router
// karena didalam folder Splash yg diimport adalah index, maka pemanggilannya nama foldernya
import Splash from './Splash';
import Login from './Login';
import Register from './Register';
import WelcomeAuth from './WelcomeAuth';

export {Splash, Login, Register, WelcomeAuth};
