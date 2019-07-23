import { Store } from 'redux';
import { Map } from 'immutable';
import Client from 'src/vm.infrastructure/restfulAPIClient';
import ITag from 'src/vm.domain/interfaces/ITag';
import IArticle from 'src/vm.domain/interfaces/IArticle';
import Action from 'src/vm.domain/actions/action';
import * as articleActions from 'src/vm.domain/actions/articleActions';
import { getToken } from 'src/vm.domain/selectors';
import { retrieveToken } from './session';

export const getArticles = (store: Store) => {
    const client = new Client(getToken(store.getState()));
    client.get('articles')
    .then((rsp) => {
        if (rsp.isSuccess) {
            let rlt = Map<number, IArticle>();
            rsp.data.forEach((article: IArticle) => {
                rlt = rlt.set(article.id, {...article});
            });
            store.dispatch(articleActions.endUpdateArticles(rlt));
        }
    });
};

export const addTagToArticle = (store: Store, action: Action<number, ITag>) => {
    const client = new Client(getToken(store.getState()));
    client.post(`articles/${action.meta}/tags`, action.payload)
    .then((rsp) => {
        if (rsp.isSuccess) {
            store.dispatch(articleActions.endAddTagToArticle(action.meta, rsp.data));
        }
    });
}

export const deleteArticle = (store: Store, action: Action<number, any>) => {
    const client = new Client(getToken(store.getState()));
    client.delete(`articles/${action.meta}`)
    .then((rsp) => {
        if (rsp.isSuccess) {
            store.dispatch(articleActions.endDeleteSingleArticle(action.meta));
        }
    });
}

export const removeTagFromArticle = (store: Store, action: Action<number, number>) => {
    const client = new Client(getToken(store.getState()));
    client.delete(`articles/${action.meta}/tags/${action.payload}`)
    .then((rsp) => {
        if (rsp.isSuccess) {
            store.dispatch(articleActions.endRemoveTageFromArticle(action.meta, action.payload));
        }
    });
}

export const addArticle = (store: Store, action: Action<null, IArticle>) => {
    const client = new Client(getToken(store.getState()));
    client.post('articles', {
        title: action.payload.title,
        description: action.payload.description,
    })
    .then((rsp) => {
        if (rsp.isSuccess) {
            store.dispatch(articleActions.endUpdateSingleArticle(rsp.data));
        }
    });
}