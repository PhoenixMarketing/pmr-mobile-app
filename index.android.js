import { AppRegistry, UIManager } from 'react-native';
import App from './src/App';

UIManager.setLayoutAnimationEnabledExperimental(true);
AppRegistry.registerComponent('pmr', () => App);
