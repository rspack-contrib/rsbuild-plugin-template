# rsbuild-plugin-example

rsbuild-plugin-example is a Rsbuild plugin to do something.

## Usage

Install:

```bash
npm add rsbuild-plugin-example -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginExample } from 'rsbuild-plugin-example';

export default {
  plugins: [pluginExample()],
};
```

## Options

Here are the available options:

| Name | Type      | Description      | Defaults    |
| ---- | --------- | ---------------- | ----------- |
| foo  | `string`  | Some description | `undefined` |
| bar  | `boolean` | Some description | `false`     |
