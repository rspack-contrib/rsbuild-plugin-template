import type { RsbuildPlugin } from '@rsbuild/core';

export type FooPugOptions = {};

export const pluginFoo = (options: FooPugOptions = {}): RsbuildPlugin => ({
  name: 'plugin-foo',

  setup(api) {
    console.log('options', options);
  },
});
