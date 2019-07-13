import { connect } from 'react-redux';
import Home from './home';
import { getSiteConfig } from './action';
import * as selector from './selector';

const mapStateToProps = state => ({
    content: selector.getSelectedMenu(state),
});

const mapDispatchToProps = dispatch => ({
    onClick() {
        dispatch(getSiteConfig(499504));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);