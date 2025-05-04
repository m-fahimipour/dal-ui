import React from "react";

import type { GlobalTypes } from "storybook/internal/types";
import type { Preview } from "@storybook/react";

import "../src/stories/styles/global.css";

export const globalTypes: GlobalTypes = {
  direction: {
    name: "Direction",
    description: "Text Direction",
    defaultValue: "ltr",
    toolbar: {
      icon: "transfer",
      items: [
        {
          value: "ltr",
          title: "Left to Right",
        },
        {
          value: "rtl",
          title: "Right to Left",
        },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const dir = context.globals.direction;
    return (
      <div dir={dir} style={{ direction: dir }}>
        <Story />
      </div>
    );
  },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
