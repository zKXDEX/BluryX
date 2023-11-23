const native: any = require(`./build/Release/bluryx.node`);

export function EnableBluryx(window: BufferSource, enable: boolean){
    return native.blurbehind(window, enable)
}

export function ExtendFrameClientArea(window: BufferSource, left: number, top: number, right: number, bottom: number){
    return native.extendframe(window, left, top, right, bottom)
}