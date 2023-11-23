# Bluryx

## Description
Bluryx is a Node.js library designed to integrate visual effects into desktop applications. It provides functions to enable blur effects behind windows and to extend the client frame area of windows.

## Installation
To use Bluryx in your project, you need to install it via npm or yarn:
```
npm install bluryx
```
or
```
pnpm install bluryx
```
or
```
yarn add bluryx
```

## Usage

### EnableBluryx
This function enables or disables a blur effect behind a specific window.

```javascript
const { EnableBluryx } = require('bluryx');

EnableBluryx(window, enable);
```
- `window`: A `BufferSource` representing the window handle.
- `enable`: A boolean indicating whether to enable (`true`) or disable (`false`) the blur effect.

### ExtendFrameClientArea
This function extends the client frame area of a window in specified directions.

```javascript
const { ExtendFrameClientArea } = require('bluryx');

ExtendFrameClientArea(window, left, top, right, bottom);
```
- `window`: A `BufferSource` representing the window handle.
- `left`, `top`, `right`, `bottom`: Numbers specifying the margins to extend in each direction.

## Compilation
This module requires the compilation of native code. Ensure you have the appropriate tools for compiling C++ code and Node.js dependencies.

## Contributions
Contributions are welcome. Please send your pull requests to this repository.

## License

Bluryx is licensed under the MIT License.

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**Note**: This README is an example based on your provided code. You may need to adjust it according to the needs and structure of your project.