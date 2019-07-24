import { State } from 'src/vm.infrastructure/interfaces/IGlobalState';

export const getArticles = (state: State) => state.article.articles;
export const getArticleById = (state: State, id: number) => state.article.articles.get(id);