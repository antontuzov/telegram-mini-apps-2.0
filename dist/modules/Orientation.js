"use strict";
// src/modules/Orientation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orientation = void 0;
class Orientation {
    static lockOrientation() {
        window.Telegram.WebApp.lockOrientation();
    }
    static unlockOrientation() {
        window.Telegram.WebApp.unlockOrientation();
    }
    static get isOrientationLocked() {
        return window.Telegram.WebApp.isOrientationLocked;
    }
}
exports.Orientation = Orientation;
