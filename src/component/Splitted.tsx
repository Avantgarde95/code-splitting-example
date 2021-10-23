import React, { lazy, Suspense } from 'react';

import styles from 'style/Demo.scss';
import Article from 'article/Article.md';

const ReactMarkdown = lazy(() => import('react-markdown'));

const Splitted = () => (
    <div className={styles.demo}>
        <div className={styles.header}>My article</div>
        <div className={styles.viewer}>
            <Suspense fallback={'Loading react-markdown...'}>
                <ReactMarkdown>{Article}</ReactMarkdown>
            </Suspense>
        </div>
        <div className={styles.footer}>Created by Hunmin Park</div>
    </div>
);

export default Splitted;
