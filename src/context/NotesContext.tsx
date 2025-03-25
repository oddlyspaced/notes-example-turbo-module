import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';
import { dummyNotesData, INote, TNotesMap } from '../utils/utils';
import NativeSpotlight from '../../specs/NativeSpotlight';

interface INotesContextMethods {
	notes: TNotesMap;
	updateNote: (id: number, note: INote) => void;
	getNote: (id: number) => INote;
}

const GlobalNotesContext = createContext<INotesContextMethods | null>(null);

export const GlobalNotesProvider = ({ children }: { children: ReactNode }) => {
	const [notesMap, setNotesMap] = useState(dummyNotesData);

	// re index items on map change
	useEffect(() => {
		NativeSpotlight?.clearIndex();
		Object.values(notesMap).forEach((item) => {
			NativeSpotlight?.indexItem(
				'id_' + item.id,
				item.title,
				item.content,
			);
		});
	}, [notesMap]);

	const updateNote = (id: number, note: INote) => {
		setNotesMap((prev) => ({
			...prev,
			[id]: note,
		}));
	};

	const getNote = (id: number) => notesMap?.[id] ?? null;

	return (
		<GlobalNotesContext.Provider
			value={{ notes: notesMap, updateNote, getNote }}
		>
			{children}
		</GlobalNotesContext.Provider>
	);
};

export const useGlobalNotes = () => {
	const context = useContext(GlobalNotesContext);
	if (context) {
		return context;
	} else {
		throw new Error('Notes context is not valid!');
	}
};
