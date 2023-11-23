"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendFrameClientArea = exports.EnableBluryx = void 0;
const native = require(`./build/Release/bluryx.node`);
function EnableBluryx(window, enable) {
    return native.blurbehind(window, enable);
}
exports.EnableBluryx = EnableBluryx;
function ExtendFrameClientArea(window, left, top, right, bottom) {
    return native.extendframe(window, left, top, right, bottom);
}
exports.ExtendFrameClientArea = ExtendFrameClientArea;
