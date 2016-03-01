# BrowserFS Path 0.1.2
> An emulation of NodeJS's `path` module. Used in [BrowserFS](https://github.com/jvilk/BrowserFS).

## Features

* Compatible with NodeJS's `path` module.
  * Passes all of Node's `path` unit tests! See [BrowserFS](https://github.com/jvilk/BrowserFS)'s repository for tests.
* Supports resolving paths relative to `.`!
  * In conjunction with [bfs-process](https://github.com/jvilk/bfs-process) and [BrowserFS](https://github.com/jvilk/bfs-process).

## Using with Browserify

You can use `bfs-path` in Browserify! Here's the relevant configuration snippet:

```{js}
{
    builtins:
    {
        "path": require.resolve("bfs-path")
    }
}
```
