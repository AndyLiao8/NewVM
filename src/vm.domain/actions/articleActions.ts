import { Map } from 'immutable';
import * as types from 'src/vm.domain/actionTypes/article';
import Action from './action';
import Article from '../interfaces/IArticle';

export const getArticles = (): Action<any, any> => ({
    type: types.getArticles,
});

export const updateArticles = (articles: Map<number, Article>): Action<any, Map<number, Article>> => ({
    type: types.updateArticles,
    payload: articles,
});

export const openArticles = (id: number): Action<number, any> => ({
    type: types.getSingleArticle,
    meta: id,
});

export const updateSingleArticle = (article: Article): Action<number, Article> => ({
    type: types.updateSingleArticle,
    meta: article.id,
    payload: article,
});

export const deleteSingleArticle = (id: number): Action<number, any> => ({
    type: types.deleteSingleArticle,
    meta: id,
});