import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { NotesScreen } from './src/screens/NotesScreen';
import { GlobalNotesProvider } from './src/context/NotesContext';

export type TNavigationRouterProps = {
	HomeScreen: {};
	NotesScreen: {
		id: number;
	};
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
		<GlobalNotesProvider>
			<NavigationContainer>
				<Router />;
			</NavigationContainer>
		</GlobalNotesProvider>
	);
};

export default App;
