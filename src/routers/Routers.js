import { createRouter } from '@expo/ex-navigation';

import MainScreen from '../modules/main/components/MainScreen';
import PhotoScreen from '../modules/photo/components/PhotoScreen';

export const Router = createRouter(() => ({
  main: () => MainScreen,
  photo: () => PhotoScreen
}), { ignoreSerializableWarnings: true });

export default Router;
