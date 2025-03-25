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
import { useGlobalNotes } from '../context/NotesContext';

type TNavigationProps = StackNavigationProp<
	TNavigationRouterProps,
	'NotesScreen'
>;
type TRouteProps = RouteProp<TNavigationRouterProps, 'NotesScreen'>;

interface IProps {
	navigation: TNavigationProps;
	route: TRouteProps;
}

export const NotesScreen = ({ navigation, route }: IProps) => {
	const { id: noteId } = route?.params;
	const { getNote, updateNote } = useGlobalNotes();

	const [isEditing, setIsEditing] = useState(false);
	const [note, setNote] = useState(getNote(noteId));

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.header}>
					<TouchableOpacity
						onPress={() => {
							updateNote(note.id, note);
							navigation.goBack();
						}}
						style={styles.iconButton}
					>
						<ChevronLeft height={18} width={18} color={'white'} />
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.iconButton}
						onPress={() => setIsEditing((prev) => !prev)}
					>
						<Edit color={'white'} height={18} width={18} />
					</TouchableOpacity>
				</View>
				<TextInput
					editable={isEditing}
					multiline
					style={styles.title}
					value={note?.title}
					onChangeText={(newText) => {
						setNote((prev) => ({
							...prev,
							title: newText,
						}));
					}}
				/>
				<Text style={styles.date}>May 21, 2020</Text>
				<TextInput
					style={styles.textInput}
					editable={isEditing}
					value={note?.content}
					onChangeText={(newText) => {
						setNote((prev) => ({
							...prev,
							content: newText,
						}));
					}}
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
	iconButton: {
		backgroundColor: '#3B3B3B',
		alignItems: 'center',
		justifyContent: 'center',
		width: 48,
		height: 48,
		borderRadius: 12,
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
