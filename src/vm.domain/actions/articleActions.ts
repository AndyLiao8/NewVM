import { Map } from 'immutable';
import * as types from 'src/vm.domain/actionTypes/article';
import Action from './action';
import IArticle from '../interfaces/IArticle';
import ITag from '../interfaces/ITag';

export const beginUpdateArticles = (): Action<any, any> => ({
    type: types.beginUpdateArticles,
});

export const endUpdateArticles = (articles: Map<number, IArticle>): Action<any, Map<number, IArticle>> => ({
    type: types.endUpdateArticles,
    payload: articles,
});

export const beginUpdateSingleArticle = (id: number): Action<number, any> => ({
    type: types.beginUpdateSingleArticle,
    meta: id,
});

export const endUpdateSingleArticle = (article: IArticle): Action<number, IArticle> => ({
    type: types.endUpdateSingleArticle,
    meta: article.id,
    payload: article,
});

export const beginDeleteSingleArticle = (id: number): Action<number, any> => ({
    type: types.beginDeleteSingleArticle,
    meta: id,
});

export const endDeleteSingleArticle = (id: number): Action<number, any> => ({
    type: types.endDeleteSingleArticle,
    meta: id,
});

export const getArticles = (): Action<null, null> => ({
    type: types.getArticles,
});

export const addTagToArticle = (articleId: number, tag: ITag): Action<number, ITag> => ({
    type: types.addTagToArticle,
    meta: articleId,
    payload: tag,
});

export const deleteArticle = (id: number): Action<number, null> => ({
    type: types.deleteArticle,
    meta: id,
});

export const removeTagFromArticle = (articleId: number, tagId: number): Action<number, number> => ({
    type: types.addTagToArticle,
    meta: articleId,
    payload: tagId,
});

export const addArticle = (article: IArticle): Action<null, IArticle> => ({
    type: types.addTagToArticle,
    payload: article,
});


export const endAddTagToArticle = (articleId: number, tag: ITag): Action<number, ITag> => ({
    type: types.endAddTagToArticle,
    meta: articleId,
    payload: tag,
});


export const endRemoveTageFromArticle = (articleId: number, tagId: number): Action<number, number> => ({
    type: types.endRemoveTageFromArticle,
    meta: articleId,
    payload: tagId,
});