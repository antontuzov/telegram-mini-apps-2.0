"use strict";
// src/modules/BiometricManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiometricManager = void 0;
class BiometricManager {
    static init(callback) {
        window.Telegram.WebApp.BiometricManager.init(callback);
    }
    static requestAccess(params, callback) {
        window.Telegram.WebApp.BiometricManager.requestAccess(params, callback);
    }
    static authenticate(params, callback) {
        window.Telegram.WebApp.BiometricManager.authenticate(params, callback);
    }
    static updateBiometricToken(token, callback) {
        window.Telegram.WebApp.BiometricManager.updateBiometricToken(token, callback);
    }
    static openSettings() {
        window.Telegram.WebApp.BiometricManager.openSettings();
    }
}
exports.BiometricManager = BiometricManager;
