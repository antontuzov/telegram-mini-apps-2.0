"use strict";
// src/modules/SettingsButton.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsButton = void 0;
class SettingsButton {
    static onClick(callback) {
        window.Telegram.WebApp.SettingsButton.onClick(callback);
    }
    static offClick(callback) {
        window.Telegram.WebApp.SettingsButton.offClick(callback);
    }
    static show() {
        window.Telegram.WebApp.SettingsButton.show();
    }
    static hide() {
        window.Telegram.WebApp.SettingsButton.hide();
    }
    static get isVisible() {
        return window.Telegram.WebApp.SettingsButton.isVisible;
    }
}
exports.SettingsButton = SettingsButton;
