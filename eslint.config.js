// @ts-check

import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const globalsHermes = [
  //hermes@0.72
  'AggregateError',
  'Array',
  'ArrayBuffer',
  'BigInt',
  'BigInt64Array',
  'BigUint64Array',
  'Boolean',
  'DataView',
  'Date',
  'DebuggerInternal',
  'Error',
  'EvalError',
  'Float32Array',
  'Float64Array',
  'Function',
  'HermesInternal',
  'Infinity',
  'Int16Array',
  'Int32Array',
  'Int8Array',
  'JSON',
  'Map',
  'Math',
  'NaN',
  'Number',
  'Object',
  'Promise',
  'Proxy',
  'QuitError',
  'RangeError',
  'ReferenceError',
  'Reflect',
  'RegExp',
  'Set',
  'String',
  'Symbol',
  'SyntaxError',
  'TimeoutError',
  'TypeError',
  'URIError',
  'Uint16Array',
  'Uint32Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'WeakMap',
  'WeakSet',
  '__defineGetter__',
  '__defineSetter__',
  '__lookupGetter__',
  '__lookupSetter__',
  '__proto__',
  'clearTimeout',
  'constructor',
  'createHeapSnapshot',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'escape',
  'gc',
  'globalThis',
  'hasOwnProperty',
  'isFinite',
  'isNaN',
  'isPrototypeOf',
  'loadSegment',
  'parseFloat',
  'parseInt',
  'print',
  'propertyIsEnumerable',
  'setImmediate',
  'setTimeout',
  'toLocaleString',
  'toString',
  'undefined',
  'unescape',
  'valueOf',
  //react-native
  'AbortController',
  'Blob',
  'ErrorUtils',
  'Event',
  'EventTarget',
  'File',
  'FileReader',
  'FormData',
  'Headers',
  'Intl',
  'URL',
  'URLSearchParams',
  'WebSocket',
  'XMLHttpRequest',
  '__DEV__',
  '__dirname',
  '__fbBatchedBridgeConfig',
  'alert',
  'cancelAnimationFrame',
  'cancelIdleCallback',
  'clearImmediate',
  'clearInterval',
  'console',
  'document',
  'exports',
  'fetch',
  'global',
  'module',
  'navigator',
  'process',
  'queueMicrotask',
  'requestAnimationFrame',
  'requestIdleCallback',
  'require',
  'setInterval',
  'window',
].map(key => ({ [key]: 'readonly' }));

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  prettierConfig,
  {
    ignores: ['.js', 'docs', 'proxy_server.js'],
  },
  {
    files: ['./src/plugins/*/*.ts', './scripts/multisrc/*/template.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-case-declarations': 'warn',
      'no-undef': 'error',
    },
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'module',
      globals: Object.assign({}, ...globalsHermes),
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts,js}'],
    ignores: ['./src/plugins/*/*.ts', './scripts/multisrc/*/template.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-undef': 'error',
    },
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
);
