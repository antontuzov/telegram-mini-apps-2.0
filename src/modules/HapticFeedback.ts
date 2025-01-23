// src/modules/HapticFeedback.ts

export class HapticFeedback {
    static impactOccurred(style: string): void {
      window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
    }
  
    static notificationOccurred(type: string): void {
      window.Telegram.WebApp.HapticFeedback.notificationOccurred(type);
    }
  
    static selectionChanged(): void {
      window.Telegram.WebApp.HapticFeedback.selectionChanged();
    }
  }