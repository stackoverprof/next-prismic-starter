import { useState } from 'react';
import { EnumType } from '@components/_shared/AlertHandler';

const LayoutStore = (): LayoutStoreType => {
	const [mainAlert, setMainAlert] = useState<Alert | null>(null);

	const resetMainAlert = () => setMainAlert(null);

	return {
		mainAlert,
		setMainAlert,
		resetMainAlert,
	};
};

export interface LayoutStoreType {
	mainAlert: Alert | null
	setMainAlert(arg0: Alert | null): void
	resetMainAlert(): void
}

export interface Alert {
	type?: EnumType,
	message: string
}

export default LayoutStore;