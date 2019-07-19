import { Map } from 'immutable';
import * as types from 'src/vm.domain/actionTypes/tag';
import Action from './action';
import Tag from '../interfaces/ITag';

export const getTags = (): Action<any, any> => ({
    type: types.getTags,
});

export const addTag = (tag: Map<number, Tag>): Action<number, Map<number, Tag>> => ({
    type: types.addTag,
    payload: tag,
});

export const updateTages = (tags: Map<number, Tag>): Action<number, Map<number, Tag>> => ({
    type: types.updateTags,
    payload: tags,
});
