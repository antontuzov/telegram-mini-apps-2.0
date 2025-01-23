// src/modules/Orientation.ts

export class Orientation {
    static lockOrientation(): void {
      window.Telegram.WebApp.lockOrientation();
    }
  
    static unlockOrientation(): void {
      window.Telegram.WebApp.unlockOrientation();
    }
  
    static get isOrientationLocked(): boolean {
      return window.Telegram.WebApp.isOrientationLocked;
    }
  }