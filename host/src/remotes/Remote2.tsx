import { loadRemote } from '@module-federation/enhanced/runtime';
import React from 'react';
import { lazy } from 'react';

const Remote2 = lazy(() =>
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/
    /* @ts-ignore - Webpack magic comment */
    loadRemote('remote2/button')
        .then((module) => {
            return {
                default: module.default,
            };
        })
        .catch(() => {
            return { default: () => null };
        })
);

const Remote1Wrapper = () => {
    return (
        <React.Suspense fallback="Loading...">
            <Remote2 />
        </React.Suspense>
    );
}

export default Remote1Wrapper;
