"use strict";
// src/modules/HomeScreen.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeScreen = void 0;
class HomeScreen {
    static addToHomeScreen() {
        window.Telegram.WebApp.addToHomeScreen();
    }
    static checkHomeScreenStatus(callback) {
        window.Telegram.WebApp.checkHomeScreenStatus(callback);
    }
}
exports.HomeScreen = HomeScreen;
