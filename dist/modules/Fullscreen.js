"use strict";
// src/modules/Fullscreen.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fullscreen = void 0;
class Fullscreen {
    static requestFullscreen() {
        window.Telegram.WebApp.requestFullscreen();
    }
    static exitFullscreen() {
        window.Telegram.WebApp.exitFullscreen();
    }
    static get isFullscreen() {
        return window.Telegram.WebApp.isFullscreen;
    }
}
exports.Fullscreen = Fullscreen;
