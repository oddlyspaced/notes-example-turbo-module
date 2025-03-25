import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NoteItem } from '../atoms/NoteItem';

const PLACEHOLDERS = [
	'How to make your personal brand stand out online',
	'Beautiful weather app UI concepts we wish existed',
	'10 excellent font pairing tools for designers',
	'Spotify’s Reema Bhagat on product design, music, and the key to a happy career',
	'12 eye-catching mobile wallpaper',
	'Design For Good: Join The Face Mask Challenge',
];

export const HomeScreen = () => {
	const renderItem = ({ index, item }: { item: string; index: number }) => (
		<NoteItem index={index} title={item} date='May 22, 2025' />
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Notes</Text>
				<Image
					style={styles.avatar}
					source={{ uri: 'https://avatar.iran.liara.run/public/30' }}
				/>
			</View>
			<FlatList
				data={PLACEHOLDERS}
				renderItem={renderItem}
				keyExtractor={(_, index) => index.toString()}
				numColumns={2}
				columnWrapperStyle={styles.row}
				style={styles.list}
			/>
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
		alignItems: 'center',
	},
	headerText: {
		fontWeight: '600',
		fontSize: 36,
		color: 'white',
	},
	avatar: {
		height: 32,
		width: 32,
	},
	list: {
		marginHorizontal: -6,
		marginTop: 16,
	},
	row: {
		flex: 1,
		justifyContent: 'space-between',
	},
});
