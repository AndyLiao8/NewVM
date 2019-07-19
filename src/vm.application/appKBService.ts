import * as articleActions from 'src/vm.domain/actions/articleActions';
import { State } from 'src/vm.domain/interfaces/IGlobalState';
import * as selectors from 'src/vm.domain/selectors';

export const mapStateToProps = (state: State) => ({
    articles: selectors.getArticles(state),
});

export const mapDispatchToProps = dispatch => ({
    onGetArticles() {
        getAllArticles(dispatch);
    },
    onAddNewArticle(title: string, description: string) {
        addArticle(dispatch, title, description);
    },
    onDeleteArticle(id: number) {
        deleteArticle(dispatch, id);
    },
    onAddTag(articleId: number, name: string) {
        addTagToArticle(dispatch, articleId, name);
    },
    onRemoveTag(articleId: number, tagId: number) {
        removeTagFromArticle(dispatch, articleId, tagId);
    },
});

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