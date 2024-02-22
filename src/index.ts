import type { RsbuildPlugin } from '@rsbuild/core';

export type FooExampleOptions = {
  foo?: string;
  bar?: boolean;
};

export const pluginExample = (
  options: FooExampleOptions = {},
): RsbuildPlugin => ({
  name: 'plugin-example',

  setup(api) {
    console.log('options', options);
  },
});
