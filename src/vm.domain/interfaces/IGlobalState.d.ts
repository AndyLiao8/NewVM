import { Map } from 'immutable';
import ITag from './ITag';
import IArticle from './IArticle';

export interface ITags {
    ifLoading: boolean;
    tags: Map<number, ITag>
}

export interface IArticles {
    ifLoading: boolean;
    articles: Map<number, IArticle>;
}

export interface State {
    tag: ITags;
    article: IArticles;
}