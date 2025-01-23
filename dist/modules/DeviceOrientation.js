"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceOrientation = void 0;
class DeviceOrientation {
    static start(params, callback) {
        window.Telegram.WebApp.DeviceOrientation.start(params, callback);
    }
    static stop(callback) {
        window.Telegram.WebApp.DeviceOrientation.stop(callback);
    }
    static get isStarted() {
        return window.Telegram.WebApp.DeviceOrientation.isStarted;
    }
    static get absolute() {
        return window.Telegram.WebApp.DeviceOrientation.absolute;
    }
    static get alpha() {
        return window.Telegram.WebApp.DeviceOrientation.alpha;
    }
    static get beta() {
        return window.Telegram.WebApp.DeviceOrientation.beta;
    }
    static get gamma() {
        return window.Telegram.WebApp.DeviceOrientation.gamma;
    }
}
exports.DeviceOrientation = DeviceOrientation;
