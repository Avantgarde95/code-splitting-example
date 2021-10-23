import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from 'style/App.scss';

import Article from 'article/Article.md';

export const App = () => (
    <div className={styles.app}>
        <div className={styles.header}>My article</div>
        <div className={styles.viewer}>
            <ReactMarkdown>{Article}</ReactMarkdown>
        </div>
    </div>
);
