import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from 'style/Demo.scss';

import Article from 'article/Article.md';

const NotSplitted = () => (
    <div className={styles.demo}>
        <div className={styles.header}>My article</div>
        <div className={styles.viewer}>
            <ReactMarkdown>{Article}</ReactMarkdown>
        </div>
        <div className={styles.footer}>Created by Hunmin Park</div>
    </div>
);

export default NotSplitted;
