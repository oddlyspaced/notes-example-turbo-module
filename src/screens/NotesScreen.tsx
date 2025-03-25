import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StyleSheet,
	ScrollView,
} from 'react-native';
import { ChevronLeft, Edit } from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TNavigationRouterProps } from '../../App';
import { RouteProp } from '@react-navigation/native';

type TNavigationProps = StackNavigationProp<
	TNavigationRouterProps,
	'NotesScreen'
>;
type TRouteProps = RouteProp<TNavigationRouterProps, 'NotesScreen'>;

interface IProps {
	navigation: TNavigationProps;
	route: TRouteProps;
}

export const NotesScreen = ({ navigation }: IProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [noteText, setNoteText] = useState(
		`Who would have thought there could be so many creative ways to tell the temperature? Today’s daily dose of design inspiration is all about the weather. In this collection of UI designs, we’re sharing a handful of beautiful mobile weather app concepts that we wish existed in real life.

Weather apps are quite the popular interface theme for designers to explore. But don’t let these effortlessly clean designs fool you. When it comes to the weather, there’s a lot of data designers have to arrange which can be quite a challenge. Regardless, it’s a great way to practice your UI skills.`,
	);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.header}>
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
						}}
						style={{
							backgroundColor: '#3B3B3B',
							alignItems: 'center',
							justifyContent: 'center',
							width: 48,
							height: 48,
							borderRadius: 12,
						}}
					>
						<ChevronLeft height={18} width={18} color={'white'} />
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: '#3B3B3B',
							alignItems: 'center',
							justifyContent: 'center',
							width: 48,
							height: 48,
							borderRadius: 12,
						}}
						onPress={() => setIsEditing((prev) => !prev)}
					>
						<Edit color={'white'} height={18} width={18} />
					</TouchableOpacity>
				</View>
				<TextInput
					editable={isEditing}
					multiline
					style={styles.title}
					value={'Beautiful weather app UI concepts we wish existed'}
				/>
				<Text style={styles.date}>May 21, 2020</Text>
				<TextInput
					style={styles.textInput}
					editable={isEditing}
					value={noteText}
					onChangeText={setNoteText}
					multiline
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#252525',
		paddingVertical: 16,
		paddingHorizontal: 24,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	backButton: {
		fontSize: 24,
		color: 'white',
	},
	editButton: {
		fontSize: 16,
		color: '#0A84FF',
	},
	title: {
		fontSize: 24,
		lineHeight: 36,
		fontWeight: '800',
		color: 'white',
	},
	date: {
		fontSize: 14,
		color: '#888',
		marginBottom: 16,
		marginTop: 16,
	},
	noteText: {
		fontSize: 16,
		color: 'white',
		lineHeight: 24,
	},
	textInput: {
		fontSize: 16,
		color: 'white',
		lineHeight: 24,
		fontWeight: '400',
		backgroundColor: '#333',
		borderRadius: 8,
		padding: 12,
		textAlignVertical: 'top',
		paddingBottom: 18,
	},
});
