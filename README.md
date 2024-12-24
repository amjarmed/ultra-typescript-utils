# ultra-typescript-utils

Collection of TypeScript utilities for React and Next.js projects.

## Installation

```bash
npx ultra-typescript-utils
# or
pnpm dlx ultra-typescript-utils
```

This will create a `/lib/ultraUtils.ts` file in your project.

## Available Utilities

- `DeepPartial<T>`: Type utility for making all properties optional recursively
- `debounce`: Function debouncing utility
- `isServer`: Check if code is running on server
- `formatDate`: Date formatting utility
- `generateId`: Random ID generator
- `storage`: Type-safe localStorage wrapper
- `copyToClipboard`: Clipboard utility

## Usage

```typescript
import { debounce, storage } from '../lib/ultraUtils';

// Example usage
const debouncedSearch = debounce((query: string) => {
  // Search logic
}, 300);

// Store data
storage.set('user', { name: 'John' });
```
