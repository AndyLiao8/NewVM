import { Store } from 'redux';
import { Map } from 'immutable';
import ITag from 'src/vm.infrastructure/interfaces/ITag';
import IArticle from 'src/vm.infrastructure/interfaces/IArticle';
import Action from 'src/vm.domain/actions/action';
import * as articleActions from 'src/vm.domain/actions/articleActions';
import * as articleService from 'src/vm.infrastructure/web/KB/articleService';

export const getArticles = async (store: Store) => {
    const rsp = await articleService.getArticles();
    store.dispatch(articleActions.endUpdateArticles(rsp.data));
};

export const addTagToArticle = async (store: Store, action: Action<number, ITag>) => {
    const rsp = await articleService.addTagToArticle(action.meta, action.payload);
    store.dispatch(articleActions.endAddTagToArticle(action.meta, rsp.data));
}

export const deleteArticle = async (store: Store, action: Action<number, any>) => {
    const rsp = await articleService.deleteArticle(action.meta);
    store.dispatch(articleActions.endDeleteSingleArticle(action.meta));
}

export const removeTagFromArticle = async (store: Store, action: Action<number, number>) => {
    const rsp = await articleService.removeTagFromArticle(action.meta, action.payload);
    store.dispatch(articleActions.endRemoveTageFromArticle(action.meta, action.payload));
}

export const addArticle = async (store: Store, action: Action<null, IArticle>) => {
    const rsp = await articleService.addArticle(action.payload);
    store.dispatch(articleActions.endUpdateSingleArticle(rsp.data));
}