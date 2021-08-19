import { useState } from 'react';
import { EnumType } from '@components/_shared/AlertHandler';

const LayoutStore = (): LayoutStoreType => {
	const [alert_value, Alert] = useState<AlertType | null>(null);

	const resetAlert = () => Alert(null);

	return {
		alert_value,
		Alert,
		resetAlert,
	};
};

export interface LayoutStoreType {
	alert_value: AlertType | null
	Alert(arg0: AlertType | null): void
	resetAlert(): void
}

export interface AlertType {
	type?: EnumType,
	message: string
}

export default LayoutStore;