import * as React from 'react';
import Button from '@material-ui/core/Button';

export interface IHome {
    ifLoadingTags: boolean;
    onGetTags: (Event) => void;
}
const Home = (props: IHome) => (
    <div>
        {props.ifLoadingTags && (<div>Loading...</div>)}
        {!props.ifLoadingTags && (<div>Hello world</div>)}
        <Button
            onClick={props.onGetTags}
            variant="contained"
            color="primary"
        >
            Get Tags
        </Button>
    </div>
);

export default Home;