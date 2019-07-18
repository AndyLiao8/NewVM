import * as articleActions from 'src/vm.domain/actions/articleActions';

export const getAllArticles = (dispatch) => {
    dispatch(articleActions.getArticles());
};

export const addTagToArticle = (dispatch, articleId: number, name: string) => {
    dispatch(articleActions.addTagToArticle(articleId, {
        name,
    }));
};

export const deleteArticle = (dispatch, id: number) => {
    dispatch(articleActions.deleteArticle(id));
};

export const removeTagFromArticle = (dispatch, articleId: number, tagId: number) => {
    dispatch(articleActions.removeTagFromArticle(articleId, tagId));
};

export const addArticle = (dispatch, title: string, description: string) => {
    dispatch(articleActions.addArticle({
        title,
        description,
    }));
};