import { Block, Typography } from "dal-ui";

import type { Meta, StoryObj } from "@storybook/react";
import type { ITypographyVariants } from "dal-ui";

import { ComponentsName, TypographyVariants } from "../../constants";
import { typographyDescriptions } from "./descriptions";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Typography",
  excludeStories: /.*Data$/,
  args: {
    className: "",
    variant: "caption1-regular",
  },
  argTypes: {
    variant: {
      control: "select",
      options: TypographyVariants,
      table: {
        defaultValue: {
          summary: "caption1-regular",
        },
      },
    },
    component: {
      description: typographyDescriptions.argDescription.component,
      control: "select",
      options: ComponentsName,
      table: {
        defaultValue: {
          summary: "span",
        },
        type: {
          summary: "union",
          detail: ComponentsName.join(" | "),
        },
      },
    },
    children: {
      description: typographyDescriptions.argDescription.children,
      control: "text",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: typographyDescriptions.mainDescription,
      },
    },
  },
};

export default meta;

// stories
type TStory = StoryObj<typeof meta>;

export const Variants: TStory = {
  parameters: {
    docs: {
      source: {
        // for creating custom code for show
        code: `
import { Block, Typography } from "dal-ui";

function DifferentVariants(){
    const variants: (keyof ITypographyVariants)[] = [
    "caption3-regular",
    "caption1-regular",
    "body3-medium",
    "body2-bold",
    "text-h6",
    "text-h3",
    ];

    return (
      <Block className="flex flex-wrap items-center gap-6">
        {variants.map((variant) => (
          <Typography key={variant} variant={variant}>
           {variant}
          </Typography>
        ))}
      </Block>
    )
 }`,
      },
      description: {
        story: typographyDescriptions.variantsDescription,
      },
    },
  },
  render: () => {
    const variants: (keyof ITypographyVariants)[] = [
      "caption3-regular",
      "caption1-regular",
      "body3-medium",
      "body2-bold",
      "text-h6",
      "text-h3",
    ];

    return (
      <Block className="flex flex-wrap items-center gap-6">
        {variants.map((variant) => (
          <Typography component="h1" key={variant} variant={variant}>
            {variant}
          </Typography>
        ))}
      </Block>
    );
  },
};

export const SemanticElements: TStory = {
  args: {
    component: "h3",
    variant: "text-h3",
    children: "h3. heading",
  },
  parameters: {
    docs: {
      source: {
        code: `
<Typography
  component="h3"
  variant="text-h3"
>
  h3. heading
</Typography>
        `,
      },
      description: {
        story: typographyDescriptions.semanticElementsDescription,
      },
    },
  },
};

export const Customization: TStory = {
  parameters: {
    docs: {
      description: {
        story: typographyDescriptions.customizationDescription,
      },
    },
  },
};
