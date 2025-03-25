import React, { useState } from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StyleSheet,
	ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const NoteScreen = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [noteText, setNoteText] = useState(
		`Who would have thought there could be so many creative ways to tell the temperature? Today’s daily dose of design inspiration is all about the weather. In this collection of UI designs, we’re sharing a handful of beautiful mobile weather app concepts that we wish existed in real life.

Weather apps are quite the popular interface theme for designers to explore. But don’t let these effortlessly clean designs fool you. When it comes to the weather, there’s a lot of data designers have to arrange which can be quite a challenge. Regardless, it’s a great way to practice your UI skills.`,
	);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.header}>
					<TouchableOpacity>
						<Text style={styles.backButton}>←</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setIsEditing((prev) => !prev)}
					>
						<Text style={styles.editButton}>
							{isEditing ? 'Done' : 'Edit'}
						</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>
					Beautiful weather app UI concepts we wish existed
				</Text>
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
		padding: 16,
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
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 8,
	},
	date: {
		fontSize: 14,
		color: '#888',
		marginBottom: 16,
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
		backgroundColor: '#333',
		borderRadius: 8,
		padding: 12,
		textAlignVertical: 'top',
	},
});
