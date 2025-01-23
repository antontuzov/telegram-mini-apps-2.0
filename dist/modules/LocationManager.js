"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationManager = void 0;
class LocationManager {
    static init(callback) {
        window.Telegram.WebApp.LocationManager.init(callback);
    }
    static getLocation(callback) {
        window.Telegram.WebApp.LocationManager.getLocation(callback);
    }
    static openSettings() {
        window.Telegram.WebApp.LocationManager.openSettings();
    }
}
exports.LocationManager = LocationManager;
