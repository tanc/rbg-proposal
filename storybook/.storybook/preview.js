/** @type { import('@storybook/server').Preview } */

import '../src/css/storybook.css';

const preview = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        iframeHeight: 140,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
    removeComments: true,
    // root: "#___storybook_wrapper",
    transform: code => {
      // Create a temporary DOM element
      const tempElement = document.createElement('div');
      tempElement.innerHTML = code;

      // Find the storybook wrapper element
      const storybookWrapper = tempElement.querySelector('#___storybook_wrapper');
      // Find an element with the class 'storybook-html' within the wrapper
      const storybookHtmlElement = storybookWrapper?.querySelector('.storybook-html');
      // Return the inner HTML of the storybook-html element if found, otherwise
      // fall back to the storybook wrapper if it exists, otherwise an empty
      // string.
      return storybookHtmlElement ? storybookHtmlElement.innerHTML : storybookWrapper ? storybookWrapper.innerHTML : '';
    }
  },
  tags: ['autodocs']
};

export default preview;
