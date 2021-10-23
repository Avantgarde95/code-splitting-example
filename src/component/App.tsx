import React, { lazy, ReactNode, Suspense } from 'react';

import About from 'component/About';
import styles from 'style/App.scss';

const NotSplitted = lazy(() => import('component/NotSplitted'));
const Splitted = lazy(() => import('component/Splitted'));
const SplittedMore = lazy(() => import('component/SplittedMore'));

const demoNameMap = {
    nothing: 'Nothing',
    notSplitted: 'Not splitted',
    splitted: 'Splitted',
    splittedMore: 'Splitted more',
};

const App = () => {
    const url = new URL(window.location.href);
    const demoName = url.searchParams.get('demo');
    let demo: ReactNode;

    switch (demoName) {
        case demoNameMap.notSplitted:
            demo = (
                <Suspense fallback={<></>}>
                    <NotSplitted />
                </Suspense>
            );

            break;
        case demoNameMap.splitted:
            demo = (
                <Suspense fallback={<></>}>
                    <Splitted />
                </Suspense>
            );

            break;
        case demoNameMap.splittedMore:
            demo = (
                <Suspense fallback={<></>}>
                    <SplittedMore />
                </Suspense>
            );

            break;
        default:
            demo = <About />;
            break;
    }

    return (
        <div className={styles.app}>
            <div className={styles.header}>
                {Object.values(demoNameMap).map(name => (
                    <button
                        key={name}
                        type={'button'}
                        className={`${styles.demo} ${name === demoName ? styles.isSelected : ''}`}
                        onClick={() => {
                            url.searchParams.set('demo', name);
                            window.location.href = url.toString();
                        }}
                    >
                        {name}
                    </button>
                ))}
            </div>
            {demo}
        </div>
    );
};

export default App;
