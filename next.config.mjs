/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com", "cdn.pixabay.com"],
  },
  reactStrictMode: true,
};

// const moduleFederationConfig = {
//   name: "remoteApp",
//   filename: "static/chunks/remoteEntry.js",
//   remotes: {
//     // Example: remoteApp: ''
//   },
//   exposes: {
//     "./Login": "./components/Login",
//     "./Forgot": "./components/Forgot",
//   },
//   shared: {
//     react: { singleton: true },
//     "react-dom": { singleton: true },
//   },
// };

// const nextConfig = withModuleFederation(moduleFederationConfig)(baseConfig);

export default nextConfig;
