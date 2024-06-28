declare namespace NodeJS {
  interface Global {
    importMetaEnv: {
      VITE_PUBLIC_URL: string;
    };
    importMeta: {
      env: {
        VITE_PUBLIC_URL: string;
      };
    };
  }
}

declare let global: NodeJS.Global;
