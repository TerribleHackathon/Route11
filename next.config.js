const withPWA = require('next-pwa')({
    // disable: process.env.NODE_ENV === 'development',
    dest: 'public'
})

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true
};

module.exports = withPWA(config);