"use strict";
// src/modules/HapticFeedback.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.HapticFeedback = void 0;
class HapticFeedback {
    static impactOccurred(style) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
    }
    static notificationOccurred(type) {
        window.Telegram.WebApp.HapticFeedback.notificationOccurred(type);
    }
    static selectionChanged() {
        window.Telegram.WebApp.HapticFeedback.selectionChanged();
    }
}
exports.HapticFeedback = HapticFeedback;
