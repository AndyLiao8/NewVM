import { connect } from 'react-redux';
import * as tagSelector from 'src/vm.infrastructure/selectors/tag';
import { State } from 'src/vm.domain/interfaces/IGlobalState';
import Home, { IHome } from './Home';
import { getAllTag } from 'src/vm.application/appHomeService';


const mapStateToProps = (state: State) => ({
    ifLoadingTags: tagSelector.getIfLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
    onGetTags() {
        getAllTag(dispatch);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);