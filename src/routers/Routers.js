import { createRouter } from '@expo/ex-navigation';

import MainScreen from '../modules/main/components/MainScreen';
import PhotoScreen from '../modules/photo/components/PhotoScreen';
import GalleryScreen from '../modules/gallery/components/GalleryScreen';

export const Router = createRouter(() => ({
  main: () => MainScreen,
  photo: () => PhotoScreen,
  gallery: () => GalleryScreen,
}), { ignoreSerializableWarnings: true });

export default Router;
