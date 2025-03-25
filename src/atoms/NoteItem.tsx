import { Pressable, StyleSheet, Text } from 'react-native';

interface INoteItemProps {
	index: number;
	title: string;
	date: string;
	onPress?: () => void;
}

const NOTE_COLORS = [
	'#FFC1B6',
	'#FFDCB6',
	'#D4F4B6',
	'#B6E5FF',
	'#D7B6FF',
	'#B6FFD4',
];

export const NoteItem = ({ index, title, date, onPress }: INoteItemProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.item,
				{ backgroundColor: NOTE_COLORS[index % NOTE_COLORS.length] },
			]}
		>
			<Text style={styles.noteTitle} numberOfLines={4}>
				{title}
			</Text>
			<Text style={styles.noteDate}>{date}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	item: {
		flex: 1,
		margin: 6,
		borderRadius: 8,
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	noteTitle: {
		flex: 1,
		fontSize: 16,
		fontWeight: '600',
		color: 'black',
		textAlign: 'left',
		width: '100%',
	},
	noteDate: {
		marginTop: 8,
		fontSize: 12,
		fontWeight: '400',
		color: '#666',
		width: '100%',
	},
});
