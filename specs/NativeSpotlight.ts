import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
	indexItem(id: string, title: string, subTitle: string): void;
	clearIndex(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeSpotlight');
