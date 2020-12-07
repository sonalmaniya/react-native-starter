import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Ionicons.loadFont();
MaterialIcons.loadFont();
FontAwesome.loadFont();
Entypo.loadFont();
Octicons.loadFont();
Feather.loadFont();
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();

AppRegistry.registerComponent(appName, () => App);
