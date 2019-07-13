import React from 'react';
import { Button } from 'antd';
import CustomLabel from '../../components/customLabel';

export interface Home {
    content: string;
    onClick: (event) => void;
}

export default (props: Home) => (
    <div>
        <CustomLabel
            content={props.content}
        />
        <Button
            block={false}
            onClick={props.onClick}
            type="primary"
        >
            Net Work
        </Button>
    </div>
);
