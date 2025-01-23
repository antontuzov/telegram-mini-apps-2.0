// src/modules/Invoice.ts



export class Invoice {
    static open(url: string, callback?: (status: string) => void): void {
      window.Telegram.WebApp.openInvoice(url, callback);
    }
  }