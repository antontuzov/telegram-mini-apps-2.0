"use strict";
// src/modules/Share.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Share = void 0;
class Share {
    static shareToStory(media_url, params) {
        window.Telegram.WebApp.shareToStory(media_url, params);
    }
    static shareMessage(msg_id, callback) {
        window.Telegram.WebApp.shareMessage(msg_id, callback);
    }
}
exports.Share = Share;
