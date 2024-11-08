# useFetch Hook with Cache and Auto-Refresh

This repository provides a custom React hook called `useFetch` that fetches data from an API endpoint with local caching. It reduces API calls by caching responses in `localStorage` for a specified amount of time and automatically refreshes data after a set interval.

## Features

- **Local Caching**: Data is stored in `localStorage` to avoid repeated API calls within a defined cache time.
- **Auto-Refresh**: The hook periodically re-fetches data from the API if the cache duration has expired.
- **Error Handling**: Logs errors to the console if the fetch request fails.

## Installation

To use this hook in your project:

1. Clone this repository or copy the `useFetch` function.
2. Import it into your React component.

```bash
git clone https://github.com/your-username/useFetch-hook.git
```
