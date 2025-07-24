/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    position: 'bottom-right'
  },
  transpilePackages: ['@yaireo/tagify'],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })
    return config
  },
};

export default nextConfig;
