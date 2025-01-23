"use strict";
// src/modules/Invoice.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    static open(url, callback) {
        window.Telegram.WebApp.openInvoice(url, callback);
    }
}
exports.Invoice = Invoice;
