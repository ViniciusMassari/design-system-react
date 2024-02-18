import { Preview } from '@storybook/react';

import { themes, ensure } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },

    },
    docs: {
      theme: themes.dark, // The replacement theme to use
    },
  },

};

export default preview;