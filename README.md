# toastex 🍞

<div align="center">
  <img src="https://raw.githubusercontent.com/itshivams/toastex/main/assets/toastex_banner.png" alt="Toastex Banner" width="100%" />
</div>

<br/>

A robust, enterprise-standard, and highly customizable vanilla JS/TS toast notification library with zero dependencies.

[![NPM Version](https://img.shields.io/npm/v/toastex.svg)](https://www.npmjs.com/package/toastex)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Website](https://img.shields.io/badge/Website-toastex.itshivam.in-blueviolet)](https://toastex.itshivam.in)

> **🌍 Visit the official website for interactive examples and full documentation:** [https://toastex.itshivam.in](https://toastex.itshivam.in)

## Features

- **Zero Dependencies**: Lightweight and fast, built with vanilla JS/TS.
- **Multiple Variants**: Choose from `default`, `swift`, `chat`, `minimal`, and `outline` styles.
- **Theming**: Built-in support for `light` and `dark` themes.
- **Customizable Positions**: Display toasts in 6 different positions (e.g., top-right, bottom-center).
- **TypeScript Ready**: Fully typed for a great developer experience.
- **Sound Support**: Optional built-in audio alerts for different toast types.
- **Progress Bar**: Visual countdown for toast duration.

## Installation

You can install `toastex` using your favorite package manager:

```bash
# using npm
npm install toastex

# using pnpm
pnpm add toastex

# using yarn
yarn add toastex
```

## Getting Started

To start using `toastex`, import the library and its CSS file into your project.

```typescript
import { Toastex } from 'toastex';
import 'toastex/toastex.css'; // Don't forget the styles!

// Simple success toast
Toastex.success('Your changes have been saved!');

// Simple error toast
Toastex.error('Oops! Something went wrong.');
```

## Advanced Usage

`toastex` can be customized extensively using the `Toastex.show()` method or by setting global configuration.

### Show with Options

```typescript
Toastex.show({
  title: 'New Message',
  message: 'Hey there! How are you doing today?',
  type: 'info',         // 'success' | 'error' | 'warning' | 'info' | 'default'
  theme: 'dark',        // 'light' | 'dark'
  variant: 'chat',      // 'default' | 'swift' | 'chat' | 'minimal' | 'outline'
  position: 'top-right',// 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
  duration: 5,          // Duration in seconds (0 for persistent)
  sound: true,          // Play an alert sound
});
```

### Global Configuration

You can set default options for all your toasts so you don't have to pass them every time:

```typescript
Toastex.config({
  theme: 'light',
  variant: 'swift',
  position: 'bottom-right',
  duration: 4,
  sound: false
});

// This will now use the global configuration above
Toastex.success('Action completed successfully!');
```

### Built-in Shorthands

`toastex` provides convenient shorthand methods for common toast types:

```typescript
Toastex.success('Success message');
Toastex.error('Error message');
Toastex.warning('Warning message');
Toastex.info('Info message');
```

## API Reference

### `ToastexOptions`

| Property | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `undefined` | Optional title for the toast. |
| `message` | `string` | **Required** | The main message text. |
| `type` | `ToastType` | `'default'` | Semantic type of the toast (`success`, `error`, etc.). |
| `theme` | `ToastTheme` | `'light'` | Theme preference (`light` or `dark`). |
| `variant` | `string` | `'default'` | Design variant (`default`, `swift`, `chat`, `minimal`, `outline`). |
| `position` | `ToastPosition`| `'top-right'` | Where the toast should appear on screen. |
| `duration` | `number` | `5` | How long the toast stays visible in seconds. `0` to disable auto-close. |
| `sound` | `boolean` | `false` | Whether to play the notification sound. |
| `logoUrl` | `string` | `undefined` | Custom icon or avatar URL (useful for `chat` variant). |

## License

[ISC](./LICENSE)
