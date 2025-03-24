import adapter from "@sveltejs/adapter-cloudflare";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      $src: 'src',
      $components: 'src/components',
      $assets: 'src/assets'
    },
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
      platformProxy: {
        configPath: undefined,
        environment: undefined,
        persist: undefined,
      },
    }),
  },
};

export default config;
