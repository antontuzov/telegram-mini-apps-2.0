"use strict";
// src/modules/CloudStorage.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudStorage = void 0;
class CloudStorage {
    static setItem(key, value, callback) {
        window.Telegram.WebApp.CloudStorage.setItem(key, value, callback);
    }
    static getItem(key, callback) {
        window.Telegram.WebApp.CloudStorage.getItem(key, callback);
    }
    static removeItem(key, callback) {
        window.Telegram.WebApp.CloudStorage.removeItem(key, callback);
    }
}
exports.CloudStorage = CloudStorage;
