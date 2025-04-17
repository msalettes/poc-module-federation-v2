import { loadRemote } from '@module-federation/enhanced/runtime';
import React from 'react';
import { lazy } from 'react';

const Remote1 = lazy(() =>
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/
    /* @ts-ignore - Webpack magic comment */
    loadRemote('remote1/button')
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
            <Remote1 />
        </React.Suspense>
    );
}

export default Remote1Wrapper;
