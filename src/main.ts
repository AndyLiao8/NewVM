import buildStore from './vm.domain/store/buildStore';
import renderUI from './render';
import heartBeatManager from 'src/vm.application/heartBeats';

// build store
const store = window.store = buildStore();
// initial UI
renderUI(store);
// registe heart beat
heartBeatManager(store);

console.log('renderUI', store);