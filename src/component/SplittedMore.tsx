import React, { lazy, Suspense, useEffect, useState } from 'react';

import styles from 'style/Demo.scss';

const ReactMarkdown = lazy(() => import('react-markdown'));
const Article = import('article/Article.md');

const SplittedMore = () => {
    const [currentArticle, setCurrentArticle] = useState('Loading the article...');

    useEffect(() => {
        (async () => {
            setCurrentArticle((await Article).default);
        })();
    }, []);

    return (
        <div className={styles.demo}>
            <div className={styles.header}>My article</div>
            <div className={styles.viewer}>
                <Suspense fallback={'Loading react-markdown...'}>
                    <ReactMarkdown>{currentArticle}</ReactMarkdown>
                </Suspense>
            </div>
            <div className={styles.footer}>Created by Hunmin Park</div>
        </div>
    );
};

export default SplittedMore;
