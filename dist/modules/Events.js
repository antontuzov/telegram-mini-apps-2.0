"use strict";
// src/modules/Events.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
class Events {
    static onEvent(eventType, eventHandler) {
        window.Telegram.WebApp.onEvent(eventType, eventHandler);
    }
    static offEvent(eventType, eventHandler) {
        window.Telegram.WebApp.offEvent(eventType, eventHandler);
    }
}
exports.Events = Events;
