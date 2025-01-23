"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramWebApp = void 0;
const BackButton_1 = require("./modules/BackButton");
const MainButton_1 = require("./modules/MainButton");
const HapticFeedback_1 = require("./modules/HapticFeedback");
const CloudStorage_1 = require("./modules/CloudStorage");
const BiometricManager_1 = require("./modules/BiometricManager");
const LocationManager_1 = require("./modules/LocationManager");
const Accelerometer_1 = require("./modules/Accelerometer");
const DeviceOrientation_1 = require("./modules/DeviceOrientation");
const Gyroscope_1 = require("./modules/Gyroscope");
const SettingsButton_1 = require("./modules/SettingsButton");
const Invoice_1 = require("./modules/Invoice");
const QRScanner_1 = require("./modules/QRScanner");
const Clipboard_1 = require("./modules/Clipboard");
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
    static get LocationManager() {
        return LocationManager_1.LocationManager;
    }
    static get Accelerometer() {
        return Accelerometer_1.Accelerometer;
    }
    static get DeviceOrientation() {
        return DeviceOrientation_1.DeviceOrientation;
    }
    static get Gyroscope() {
        return Gyroscope_1.Gyroscope;
    }
    static get SettingsButton() {
        return SettingsButton_1.SettingsButton;
    }
    static get Invoice() {
        return Invoice_1.Invoice;
    }
    static get QRScanner() {
        return QRScanner_1.QRScanner;
    }
    static get Clipboard() {
        return Clipboard_1.Clipboard;
    }
}
exports.TelegramWebApp = TelegramWebApp;
