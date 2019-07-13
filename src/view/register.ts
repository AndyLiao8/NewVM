import customReducer from './customModule/reducer';
import customWeb from './customModule/web';
import * as modules from '../constants/modules';
import { generateModule } from '../utils/storeHelper';

export default [
    generateModule(modules.customModule, customReducer, customWeb),
];