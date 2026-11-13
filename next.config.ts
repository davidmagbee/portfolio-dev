import type { NextConfig } from 'next';

/** No runtime service is needed: content renders at build time for portable hosting. */
const config: NextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true } };
export default config;
