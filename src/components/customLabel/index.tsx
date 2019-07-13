import React from 'react';
import * as styles from './style.css';

export interface Message {
    content?: string;
}
export default ({ content = 'hello' }: Message) => (
    <div className={styles.container}>
        {content}
    </div>
);