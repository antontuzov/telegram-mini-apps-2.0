// src/modules/MainButton.ts

export class MainButton {
    static setText(text: string): void {
      window.Telegram.WebApp.MainButton.setText(text);
    }
  
    static onClick(callback: () => void): void {
      window.Telegram.WebApp.MainButton.onClick(callback);
    }
  
    static offClick(callback: () => void): void {
      window.Telegram.WebApp.MainButton.offClick(callback);
    }
  
    static show(): void {
      window.Telegram.WebApp.MainButton.show();
    }
  
    static hide(): void {
      window.Telegram.WebApp.MainButton.hide();
    }
  
    static enable(): void {
      window.Telegram.WebApp.MainButton.enable();
    }
  
    static disable(): void {
      window.Telegram.WebApp.MainButton.disable();
    }
  
    static showProgress(leaveActive?: boolean): void {
      window.Telegram.WebApp.MainButton.showProgress(leaveActive);
    }
  
    static hideProgress(): void {
      window.Telegram.WebApp.MainButton.hideProgress();
    }
  
    static get isVisible(): boolean {
      return window.Telegram.WebApp.MainButton.isVisible;
    }
  }