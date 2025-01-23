// src/modules/Clipboard.ts

export class Clipboard {
    static readText(callback: (text: string | null) => void): void {
      window.Telegram.WebApp.readTextFromClipboard(callback);
    }
  }