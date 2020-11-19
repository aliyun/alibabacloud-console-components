# react-css-var

Read and consume CSS custom properties (CSS variables) in react.

## Usage

### Step1: wrap your component

Wrap your component with `withCssVarReader`, and declare which variables you want to read:

```tsx
const Wrapped = withCssVarReader(
  ['--my-css-var1', '--my-css-var2', '--my-css-var3', '--unknown-var'],
  App
)
```

This HOC will read these css variables around the wrapped component, and broadcast them with React context.

### Step2: consume css variables

Inside the wrapped component or any descendant components, use `useCssVar` hook to consume css variables:

```tsx
const [var1, var2, var3, varUnknown] = useCssVar([
  '--my-css-var1',
  '--my-css-var2',
  '--my-css-var3',
  '--unknown-var',
])

// or read a single var
const variable = useCssVar('--my-css-var1')
```

## Example

Try it in live demo!

[![Edit react-css-var](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-css-var-yb6c6?file=/src/App.tsx)
