import buildStore from './vm.domain/store/buildStore';
import renderUI from './render';

// build store
const store = window.store = buildStore();
// initial UI
renderUI(store);

console.log('renderUI', store);