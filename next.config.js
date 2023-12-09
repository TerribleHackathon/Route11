const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
})

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    swcMinify: true
};

module.exports = withPWA(config);