import { Map } from 'immutable';
import { IArticles } from 'src/vm.domain/interfaces/IGlobalState';
import * as types from 'src/vm.domain/actionTypes/article';
import Action from '../actions/action';
import Article from '../interfaces/IArticle';

const defaultState: IArticles  = {
    ifLoading: false,
    selectedArticleId: null,
    ifLoadingArticle: false,
    articles: Map(),
};

const stateMapping = {
    [types.getArticles](state: IArticles) {
        return Object.assign({}, state, {
            ifLoading: true,
        });
    },
    [types.updateArticles](state: IArticles, action: Action<any, Map<number, Article>>) {
        return Object.assign({}, state, {
            ifLoading: false,
            articles: state.articles.merge(action.payload),
        });
    },
    [types.getSingleArticle](state: IArticles, action: Action<number, any>) {
        return Object.assign({}, state, {
            ifLoadingArticle: true,
            selectedArticleId: action.meta,
        });
    },
    [types.updateSingleArticle](state: IArticles, action: Action<number, Article>) {
        return Object.assign({}, state, {
            ifLoadingArticle: false,
            articles: state.articles.set(action.meta, action.payload),
        });
    },
    [types.deleteSingleArticle](state: IArticles, action: Action<number, any>) {
        return Object.assign({}, state, {
            articles: state.articles.remove(action.meta),
        });
    }
};

export default (state: IArticles = defaultState, action) => {
    const handler = stateMapping[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}