"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gyroscope = void 0;
class Gyroscope {
    static start(params, callback) {
        window.Telegram.WebApp.Gyroscope.start(params, callback);
    }
    static stop(callback) {
        window.Telegram.WebApp.Gyroscope.stop(callback);
    }
    static get isStarted() {
        return window.Telegram.WebApp.Gyroscope.isStarted;
    }
    static get x() {
        return window.Telegram.WebApp.Gyroscope.x;
    }
    static get y() {
        return window.Telegram.WebApp.Gyroscope.y;
    }
    static get z() {
        return window.Telegram.WebApp.Gyroscope.z;
    }
}
exports.Gyroscope = Gyroscope;
