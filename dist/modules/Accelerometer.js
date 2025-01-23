"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accelerometer = void 0;
class Accelerometer {
    static start(params, callback) {
        window.Telegram.WebApp.Accelerometer.start(params, callback);
    }
    static stop(callback) {
        window.Telegram.WebApp.Accelerometer.stop(callback);
    }
    static get isStarted() {
        return window.Telegram.WebApp.Accelerometer.isStarted;
    }
    static get x() {
        return window.Telegram.WebApp.Accelerometer.x;
    }
    static get y() {
        return window.Telegram.WebApp.Accelerometer.y;
    }
    static get z() {
        return window.Telegram.WebApp.Accelerometer.z;
    }
}
exports.Accelerometer = Accelerometer;
