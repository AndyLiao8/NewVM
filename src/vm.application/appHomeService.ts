import * as tagActions from 'src/vm.domain/actions/tagActions';

export const getAllTag = (dispatch) => {
    dispatch(tagActions.getTags());
};