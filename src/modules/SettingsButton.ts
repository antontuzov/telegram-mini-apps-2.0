// src/modules/SettingsButton.ts



export class SettingsButton {
    static onClick(callback: () => void): void {
      window.Telegram.WebApp.SettingsButton.onClick(callback);
    }
  
    static offClick(callback: () => void): void {
      window.Telegram.WebApp.SettingsButton.offClick(callback);
    }
  
    static show(): void {
      window.Telegram.WebApp.SettingsButton.show();
    }
  
    static hide(): void {
      window.Telegram.WebApp.SettingsButton.hide();
    }
  
    static get isVisible(): boolean {
      return window.Telegram.WebApp.SettingsButton.isVisible;
    }
  }