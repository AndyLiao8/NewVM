import { State } from 'src/vm.domain/interfaces/IGlobalState';

export const getTags = (state: State) => state.tag.tags;
export const getIfLoading = (state: State) => state.tag.ifLoading;