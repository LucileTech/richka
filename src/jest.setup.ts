global.importMetaEnv = {
  VITE_PUBLIC_URL: "http://localhost:3000",
};

Object.defineProperty(global, "importMeta", {
  value: {
    env: global.importMetaEnv,
  },
});
