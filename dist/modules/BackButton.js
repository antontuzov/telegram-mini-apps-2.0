"use strict";
// src/modules/BackButton.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackButton = void 0;
class BackButton {
    static onClick(callback) {
        window.Telegram.WebApp.BackButton.onClick(callback);
    }
    static offClick(callback) {
        window.Telegram.WebApp.BackButton.offClick(callback);
    }
    static show() {
        window.Telegram.WebApp.BackButton.show();
    }
    static hide() {
        window.Telegram.WebApp.BackButton.hide();
    }
    static get isVisible() {
        return window.Telegram.WebApp.BackButton.isVisible;
    }
}
exports.BackButton = BackButton;
