"use strict";
// src/modules/MainButton.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainButton = void 0;
class MainButton {
    static setText(text) {
        window.Telegram.WebApp.MainButton.setText(text);
    }
    static onClick(callback) {
        window.Telegram.WebApp.MainButton.onClick(callback);
    }
    static offClick(callback) {
        window.Telegram.WebApp.MainButton.offClick(callback);
    }
    static show() {
        window.Telegram.WebApp.MainButton.show();
    }
    static hide() {
        window.Telegram.WebApp.MainButton.hide();
    }
    static enable() {
        window.Telegram.WebApp.MainButton.enable();
    }
    static disable() {
        window.Telegram.WebApp.MainButton.disable();
    }
    static showProgress(leaveActive) {
        window.Telegram.WebApp.MainButton.showProgress(leaveActive);
    }
    static hideProgress() {
        window.Telegram.WebApp.MainButton.hideProgress();
    }
    static get isVisible() {
        return window.Telegram.WebApp.MainButton.isVisible;
    }
}
exports.MainButton = MainButton;
