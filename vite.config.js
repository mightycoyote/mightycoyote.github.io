// this line was added by the postcss-preset-env install
import { postcss } from "postcss-preset-env";

// this was added by me trying to get this to work
const postcssPresetEnv = require('postcss-preset-env');

// this "export default {build: {}}" section worked previously, so that format is correct for Vite
export default {
    build: {
        outDir: './docs/'
    },
    css: {
        postcss: {
            // options would go in parens and are described by plugin docs
            plugins: [postcssPresetEnv()],
        }
    },
    // it might be easier to get it to look for a separate postcss config file than create inline here
    // css: { postcss: './postcss.config.js' },
  }