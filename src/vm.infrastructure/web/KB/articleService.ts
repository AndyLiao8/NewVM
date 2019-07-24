import * as restfulClinet from 'src/vm.infrastructure/restfulAPIClient';
import ITag from 'src/vm.infrastructure/interfaces/ITag';
import IArticle from 'src/vm.infrastructure/interfaces/IArticle';

export const getArticles = () => {
    return restfulClinet.httpGet('articles');
};

export const addTagToArticle = (articleId: number, tag: ITag) => {
    return restfulClinet.httpPost(`articles/${articleId}/tags`, tag);
}

export const deleteArticle = (id: number) => {
   return restfulClinet.httpDelete(`articles/${id}`);
}

export const removeTagFromArticle = (articleId: number, tagId: number) => restfulClinet.httpDelete(`articles/${articleId}/tags/${tagId}`)

export const addArticle = (article: IArticle) => restfulClinet.httpPost('articles', {
    title: article.title,
    description: article.description,
});