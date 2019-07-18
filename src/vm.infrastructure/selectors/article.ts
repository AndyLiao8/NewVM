import { State } from 'src/vm.domain/interfaces/IGlobalState';

export const getSelectedArticleId = (state: State) => state.article.selectedArticleId;
export const getIfLoadingArticle = (state: State) => state.article.ifLoadingArticle;
export const getArticles = (state: State) => state.article.articles;