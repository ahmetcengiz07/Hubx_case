/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

AppRegistry.registerComponent(appName, () => App);