import { connect } from 'react-redux';
import * as React from 'react';
import * as selectors from 'src/store/selectors';
import Conversations from './Conversations';
import SiteInfo from './share/SiteInfo';

export interface AppProps {
    totalConversations: number;
}
const App = (props: AppProps) => (
    <div>
        <SiteInfo totalConversations={props.totalConversations} />
        <Conversations />
    </div>
);

const mapStateToProps = (state) => ({
    totalConversations: selectors.getConversations(state).size,
});

export default connect(mapStateToProps)(App);