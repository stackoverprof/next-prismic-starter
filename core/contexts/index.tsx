import React, { useContext } from 'react';
import LayoutStore, { LayoutStoreType } from './LayoutStore';

const AppContext = React.createContext(null);

interface ExportType {
	layout: LayoutStoreType
}

interface Props {
	children: React.ReactNode
}

const AppProvider = ({children}: Props): JSX.Element => {

	const Exporter: ExportType = {
		layout: LayoutStore()
	};

	return (
		<AppContext.Provider value={Exporter}>
			{ children }
		</AppContext.Provider>
	);
};

export default AppProvider;
export const useApp = (): ExportType => useContext(AppContext);
export const useLayout = (): LayoutStoreType => useContext(AppContext).layout;