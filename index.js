// import react native navigation
// index.js adalah induk pertama
// nanti index.js akan memanggil App.js
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
