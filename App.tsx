import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { NotesScreen } from './src/screens/NotesScreen';

export type TNavigationRouterProps = {
	HomeScreen: {};
	NotesScreen: {};
};

const AppNavigator = createNativeStackNavigator<TNavigationRouterProps>();

const Router = () => {
	return (
		<AppNavigator.Navigator>
			<AppNavigator.Screen
				name={'HomeScreen'}
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<AppNavigator.Screen
				name={'NotesScreen'}
				component={NotesScreen}
				options={{
					headerShown: false,
				}}
			/>
		</AppNavigator.Navigator>
	);
};

const App = () => {
	return (
		<NavigationContainer>
			<Router />;
		</NavigationContainer>
	);
};

export default App;
