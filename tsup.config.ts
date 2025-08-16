import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    hero: "src/components/landing/Hero/index.tsx",
    forWho: "src/components/landing/ForWho/index.tsx",
    howItWork: "src/components/landing/HowItWork/index.tsx",
    pricing: "src/components/landing/Pricing/index.tsx",
    showcaseBlog: "src/components/landing/ShowcaseBlog/index.tsx",
    successPath: "src/components/landing/SuccessPath/index.tsx",
    featureBentoGrid: "src/components/landing/FeatureBentoGrid/index.tsx",
    startupStruggles: "src/components/landing/StartupStruggles/index.tsx",
    footer: "src/components/landing/Footer/index.tsx",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ["react", "react-dom", "react/jsx-runtime", /^next($|\/)/],
  treeshake: false,
  minify: true,
  tsconfig: "tsconfig.build.json",
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "react";
    options.alias = {
      "@": "./src",
    };
  },
});
