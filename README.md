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

- `cn`: Type utility for making all properties optional recursively
- `debounce`: A shorthand for `twMerge(clsx(...inputs))` which is convenient for merging tailwind classes with other classes.
- `formatDate`: Date formatting utility
- `formatViews`: Formats the number of views into a human-readable string.
- `parseServerActionResponse`: Parses a server action response by converting it to a JSON string and then parsing it back to a JavaScript object.


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
