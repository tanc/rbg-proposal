/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  stories: ["../../web/themes/custom/**/*.stories.@(json|yaml|yml)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@whitespace/storybook-addon-html"
  ],
  framework: {
    name: "@storybook/server-webpack5",
    options: {},
  },
};
export default config;
