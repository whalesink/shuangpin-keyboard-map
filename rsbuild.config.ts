import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  html: {
    template: "public/index.html",
    title: "shuangpin-keyboard-map",
    meta: {
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    },
  },

  plugins: [pluginVue(), pluginSass()],

  resolve: {
    alias: { "@": "./src" },
  },
});
