"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramWebApp = void 0;
class TelegramWebApp {
    static initData() {
        return window.Telegram.WebApp.initDataUnsafe;
    }
    static themeParams() {
        return window.Telegram.WebApp.themeParams;
    }
    static setHeaderColor(color) {
        window.Telegram.WebApp.setHeaderColor(color);
    }
    static setBackgroundColor(color) {
        window.Telegram.WebApp.setBackgroundColor(color);
    }
    static ready() {
        window.Telegram.WebApp.ready();
    }
    static expand() {
        window.Telegram.WebApp.expand();
    }
    static close() {
        window.Telegram.WebApp.close();
    }
    static showPopup(params) {
        window.Telegram.WebApp.showPopup(params);
    }
    static showAlert(message) {
        window.Telegram.WebApp.showAlert(message);
    }
    static showConfirm(message, callback) {
        window.Telegram.WebApp.showConfirm(message, callback);
    }
    static hapticFeedback() {
        return window.Telegram.WebApp.HapticFeedback;
    }
    static cloudStorage() {
        return window.Telegram.WebApp.CloudStorage;
    }
}
exports.TelegramWebApp = TelegramWebApp;
