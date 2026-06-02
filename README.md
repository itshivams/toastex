# toastly 🍞

<div align="center">
  <img src="https://raw.githubusercontent.com/itshivams/toastly/main/assets/toastly_banner.png" alt="Toastly Banner" width="100%" />
</div>

<br/>

A robust, enterprise-standard, and highly customizable vanilla JS/TS toast notification library with zero dependencies.

[![NPM Version](https://img.shields.io/npm/v/toastly.svg)](https://www.npmjs.com/package/toastly)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Features

- **Zero Dependencies**: Lightweight and fast, built with vanilla JS/TS.
- **Multiple Variants**: Choose from `default`, `swift`, `chat`, `minimal`, and `outline` styles.
- **Theming**: Built-in support for `light` and `dark` themes.
- **Customizable Positions**: Display toasts in 6 different positions (e.g., top-right, bottom-center).
- **TypeScript Ready**: Fully typed for a great developer experience.
- **Sound Support**: Optional built-in audio alerts for different toast types.
- **Progress Bar**: Visual countdown for toast duration.

## Installation

You can install `toastly` using your favorite package manager:

```bash
# using npm
npm install toastly

# using pnpm
pnpm add toastly

# using yarn
yarn add toastly
```

## Getting Started

To start using `toastly`, import the library and its CSS file into your project.

```typescript
import { Toastly } from 'toastly';
import 'toastly/toastly.css'; // Don't forget the styles!

// Simple success toast
Toastly.success('Your changes have been saved!');

// Simple error toast
Toastly.error('Oops! Something went wrong.');
```

## Advanced Usage

`toastly` can be customized extensively using the `Toastly.show()` method or by setting global configuration.

### Show with Options

```typescript
Toastly.show({
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
Toastly.config({
  theme: 'light',
  variant: 'swift',
  position: 'bottom-right',
  duration: 4,
  sound: false
});

// This will now use the global configuration above
Toastly.success('Action completed successfully!');
```

### Built-in Shorthands

`toastly` provides convenient shorthand methods for common toast types:

```typescript
Toastly.success('Success message');
Toastly.error('Error message');
Toastly.warning('Warning message');
Toastly.info('Info message');
```

## API Reference

### `ToastlyOptions`

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
