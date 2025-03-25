import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import {
	SafeAreaView,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NoteItem } from '../atoms/NoteItem';
import { useNavigation } from '@react-navigation/native';
import { Plus } from 'react-native-feather';
import { getRandomDate, INote } from '../utils/utils';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TNavigationRouterProps } from '../../App';
import { useGlobalNotes } from '../context/NotesContext';
import { useMemo } from 'react';

type TNavigationProps = StackNavigationProp<
	TNavigationRouterProps,
	'HomeScreen'
>;
type TRouteProps = RouteProp<TNavigationRouterProps, 'HomeScreen'>;

interface IProps {
	navigation: TNavigationProps;
	route: TRouteProps;
}

export const HomeScreen = ({ navigation }: IProps) => {
	const renderItem = ({ index, item }: { item: INote; index: number }) => {
		return (
			<NoteItem
				index={index}
				title={item?.title}
				date={getRandomDate()}
				onPress={() => {
					navigation.push('NotesScreen', {
						id: item?.id,
					});
					// NativeSpotlight?.indexItem("hl", 'wow item test', 'this is an item')
					// NativeSpotlight?.clearIndex();
				}}
			/>
		);
	};

	const { bottom } = useSafeAreaInsets();

	const { notes } = useGlobalNotes();
	const notesItems = useMemo(() => Object.values(notes), [notes]);

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={[
					{
						bottom: bottom + 24,
					},
					styles.fab,
				]}
			>
				<Plus color={'white'} />
			</View>
			<View style={styles.header}>
				<Text style={styles.headerText}>Notes</Text>
				<Image
					style={styles.avatar}
					source={{ uri: 'https://avatar.iran.liara.run/public/30' }}
				/>
			</View>
			<FlatList
				data={notesItems}
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
	fab: {
		position: 'absolute',
		backgroundColor: '#181818',
		height: 56,
		width: 56,
		borderRadius: 28,
		right: 24,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowRadius: 8,
		shadowOffset: {
			height: 8,
			width: 4,
		},
	},
});
