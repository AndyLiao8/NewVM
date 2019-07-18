import buildStore from './vm.infrastructure/store/buildStore';
import renderUI from './render';

// build store
const store = buildStore();
// initial UI
renderUI(store);

console.log('renderUI', store);