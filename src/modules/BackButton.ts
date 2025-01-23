// src/modules/BackButton.ts

export class BackButton {
    static onClick(callback: () => void): void {
      window.Telegram.WebApp.BackButton.onClick(callback);
    }
  
    static offClick(callback: () => void): void {
      window.Telegram.WebApp.BackButton.offClick(callback);
    }
  
    static show(): void {
      window.Telegram.WebApp.BackButton.show();
    }
  
    static hide(): void {
      window.Telegram.WebApp.BackButton.hide();
    }
  
    static get isVisible(): boolean {
      return window.Telegram.WebApp.BackButton.isVisible;
    }
  }