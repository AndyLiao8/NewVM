import { Map } from 'immutable';
import { IArticles } from 'src/vm.domain/interfaces/IGlobalState';
import Action from 'src/vm.domain/actions/action';
import IArticle from 'src/vm.domain/interfaces/IArticle';
import ITag from 'src/vm.domain/interfaces/ITag';

export const beginUpdateArticles = (state: IArticles): IArticles => {
    return Object.assign({}, state, {
        ifLoading: true,
    });
};
export const endUpdateArticles = (state: IArticles, action: Action<any, Map<number, IArticle>>): IArticles => {
    return Object.assign({}, state, {
        ifLoading: false,
        articles: state.articles.merge(action.payload),
    });
};
export const beginOperateArticle = (state: IArticles, action: Action<number, any>): IArticles => {
    const article = state.articles.get(action.meta);
    return Object.assign({}, state, {
        articles: state.articles.set(action.meta, {...article, ifOperating: true}),
    });
};
export const endUpdateSingleArticle = (state: IArticles, action: Action<number, IArticle>): IArticles => {
    const article = state.articles.get(action.meta);
    return Object.assign({}, state, {
        articles: state.articles.set(action.meta, {...article, ...action.payload, ifOperating: false}),
    });
};
export const endDeleteSingleArticle = (state: IArticles, action: Action<number, any>): IArticles => {
    return Object.assign({}, state, {
        articles: state.articles.remove(action.meta),
    });
};
export const endAddTagToArticle = (state: IArticles, action: Action<number, ITag>): IArticles => {
    const article = state.articles.get(action.meta);
    return Object.assign({}, state, {
        articles: state.articles.set(action.meta, Object.assign({}, article, {
            ifOperating: false,
            tags: [action.payload].concat(article.tags)
        })),
    });
};
export const endRemoveTagFromArticle = (state: IArticles, action: Action<number, number>): IArticles => {
    const article = state.articles.get(action.meta);
    return Object.assign({}, state, {
        articles: state.articles.set(action.meta, Object.assign({}, article, {
            ifOperating: false,
            tags: article.tags.filter((t) => t.id !== action.payload),
        })),
    });
};