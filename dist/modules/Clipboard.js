"use strict";
// src/modules/Clipboard.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clipboard = void 0;
class Clipboard {
    static readText(callback) {
        window.Telegram.WebApp.readTextFromClipboard(callback);
    }
}
exports.Clipboard = Clipboard;
