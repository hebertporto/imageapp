import { createRouter } from '@expo/ex-navigation';

import MainScreen from '../modules/main/components/MainScreen';

export const Router = createRouter(() => ({
  main: () => MainScreen
}), { ignoreSerializableWarnings: true });

export default Router;
