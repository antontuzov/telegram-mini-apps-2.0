"use strict";
// src/modules/QRScanner.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRScanner = void 0;
class QRScanner {
    static show(params, callback) {
        window.Telegram.WebApp.showScanQrPopup(params, callback);
    }
    static close() {
        window.Telegram.WebApp.closeScanQrPopup();
    }
}
exports.QRScanner = QRScanner;
