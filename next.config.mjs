/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.postimg.cc' },
      { protocol: 'https', hostname: 'getphytomemone.com' },
      { protocol: 'https', hostname: 'getvisiflora.com' },
      { protocol: 'https', hostname: 'leanbodytonic.com' },
    ],
  },
};

export default nextConfig;