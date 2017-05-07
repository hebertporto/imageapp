import { createRouter } from '@expo/ex-navigation';

import MainScreen from '../modules/main/components/MainScreen';
import PhotoScreen from '../modules/photo/components/PhotoScreen';
import GalleryScreen from '../modules/gallery/components/GalleryScreen';
import ClassesScreen from '../modules/gallery/components/ClassesScreen';
import CreateClassScreen from '../modules/createClass/components/CreateClassScreen';

export const Router = createRouter(() => ({
  main: () => MainScreen,
  photo: () => PhotoScreen,
  gallery: () => GalleryScreen,
  listClasses: () => ClassesScreen,
  createClass: () => CreateClassScreen,
}), { ignoreSerializableWarnings: true });

export default Router;
