import { Store } from 'redux';
import { Map } from 'immutable';
import ITag from 'src/vm.infrastructure/interfaces/ITag';
import IArticle from 'src/vm.infrastructure/interfaces/IArticle';
import Action from 'src/vm.domain/actions/action';
import * as articleActions from 'src/vm.domain/actions/articleActions';
import * as uiActions from 'src/vm.domain/actions/uiActions';
import * as articleWebService from 'src/vm.infrastructure/web/KB/articleService';

export const getArticles = (store: Store) => {
    articleWebService.getArticles()
    .then((rsp) => {
        store.dispatch(articleActions.endUpdateArticles(rsp.data));
    },
    (err) => {
        store.dispatch(uiActions.updateGlobalError(err));
    });
};

export const addTagToArticle = (store: Store, action: Action<number, ITag>) => {
    articleWebService.addTagToArticle(action.meta, action.payload)
    .then((rsp) => {
        store.dispatch(articleActions.endAddTagToArticle(action.meta, rsp.data));
    },
    (err) => {
        store.dispatch(uiActions.updateGlobalError(err));
    });
}

export const deleteArticle = (store: Store, action: Action<number, any>) => {
    articleWebService.deleteArticle(action.meta)
    .then((rsp) => {
        store.dispatch(articleActions.endDeleteSingleArticle(action.meta));
    },
    (err) => {
        store.dispatch(uiActions.updateGlobalError(err));
    });
}

export const removeTagFromArticle = (store: Store, action: Action<number, number>) => {
    articleWebService.removeTagFromArticle(action.meta, action.payload)
    .then((rsp) => {
        store.dispatch(articleActions.endRemoveTageFromArticle(action.meta, action.payload));
    },
    (err) => {
        store.dispatch(uiActions.updateGlobalError(err));
    });
}

export const addArticle = (store: Store, action: Action<null, IArticle>) => {
    articleWebService.addArticle(action.payload)
    .then((rsp) => {
        store.dispatch(articleActions.endUpdateSingleArticle(rsp.data));
    },
    (err) => {
        store.dispatch(uiActions.updateGlobalError(err));
    });
}