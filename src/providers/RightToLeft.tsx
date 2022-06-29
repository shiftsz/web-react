import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin as any],
});

const RightToLeft: React.FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <CacheProvider value={cacheRtl}>
            {children}
        </CacheProvider>
    )
}

export default RightToLeft