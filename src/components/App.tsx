import * as React from 'react';
import { connect } from 'react-redux';
import { getAllArticles } from 'src/vm.application/appKBService';

const App = (props) => (
    <React.Fragment>
        Hello world
        <button onClick={props.onClick}>test</button>
    </React.Fragment>
);

const mapDispatchToProps = (dispatch) => ({
    onClick() {
        dispatch(getAllArticles(dispatch));
    }
});

export default connect(null, mapDispatchToProps)(App);