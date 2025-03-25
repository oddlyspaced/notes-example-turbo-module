import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/Home';
import {createStaticNavigation} from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
  },
});

const Navigation = createStaticNavigation(RootStack);

const App = () => {
  return <Navigation />;
};

export default App;
