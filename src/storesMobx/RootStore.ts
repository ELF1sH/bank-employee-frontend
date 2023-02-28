import { themeStore, ThemeStore } from './stores/ThemeStore';
import { tariffsPageStore, TariffsPageStore } from '../pages/tariffsPage/store/TariffsPageStore';

export interface RootStore {
  themeStore: ThemeStore,
  tariffsPageStore: TariffsPageStore,
}

export const initializeStore = (): RootStore => ({
  themeStore,
  tariffsPageStore,
});
