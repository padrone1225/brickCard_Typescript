import { ComponentMeta, ComponentStory } from "@storybook/react";
import DefaultLayout from "./Default.layout";

export default {
  title: "Layouts/Default",
  component: DefaultLayout,
} as ComponentMeta<typeof DefaultLayout>;

const Template: ComponentStory<typeof DefaultLayout> = (args) => (
  <DefaultLayout></DefaultLayout>
);

export const Default = Template.bind({});
