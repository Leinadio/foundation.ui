import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    hero: "src/components/ui/hero.tsx",
    forWho: "src/components/ui/for-who.tsx",
    howItWork: "src/components/ui/how-it-work.tsx",
    pricing: "src/components/ui/pricing.tsx",
    showcaseBlog: "src/components/ui/showcase-blog.tsx",
    successPath: "src/components/ui/success-path.tsx",
    featureBentoGrid: "src/components/ui/feature-bento-grid.tsx",
    startupStruggles: "src/components/ui/startup-struggles.tsx",
    footer: "src/components/ui/footer.tsx",
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
