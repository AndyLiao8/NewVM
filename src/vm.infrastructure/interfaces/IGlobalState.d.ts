import { Map } from 'immutable';
import IArticle from './IArticle';
import ISession from './ISession';
import IUI from './IUI';


export interface IArticles {
    ifLoading: boolean;
    articles: Map<number, IArticle>;
}

export interface State {
    session: ISession;
    article: IArticles;
    ui: IUI;
}