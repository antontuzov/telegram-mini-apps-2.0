"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramWebApp = void 0;
const BackButton_1 = require("./modules/BackButton");
const MainButton_1 = require("./modules/MainButton");
const HapticFeedback_1 = require("./modules/HapticFeedback");
const CloudStorage_1 = require("./modules/CloudStorage");
const BiometricManager_1 = require("./modules/BiometricManager");
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
    static get BackButton() {
        return BackButton_1.BackButton;
    }
    static get MainButton() {
        return MainButton_1.MainButton;
    }
    static get HapticFeedback() {
        return HapticFeedback_1.HapticFeedback;
    }
    static get CloudStorage() {
        return CloudStorage_1.CloudStorage;
    }
    static get BiometricManager() {
        return BiometricManager_1.BiometricManager;
    }
    static getLocation(callback) {
        window.Telegram.WebApp.LocationManager.getLocation(callback);
    }
}
exports.TelegramWebApp = TelegramWebApp;
