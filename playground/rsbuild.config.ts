import { defineConfig } from '@rsbuild/core';
import { pluginFoo } from '../src';

export default defineConfig({
  plugins: [pluginFoo()],
});
