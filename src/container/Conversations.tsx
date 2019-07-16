import { connect } from 'react-redux';
import Conversations from 'src/UI/Conversations';
import * as selectors from 'src/store/selectors';
import { getConversations } from 'src/actions/creator';


const mapStateToProps = (state) => ({
    isLoading: selectors.getConversationIsLoading(state),
    isInitialized: selectors.GetConversationisInitialized(state),
    data: selectors.getConversations(state),
});

const mapDispatchToProps = dispatch => ({
    initializeData() {
        dispatch(getConversations());
    },
    onReloadData() {
        dispatch(getConversations());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);