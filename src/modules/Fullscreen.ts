// src/modules/Fullscreen.ts



export class Fullscreen {
    static requestFullscreen(): void {
      window.Telegram.WebApp.requestFullscreen();
    }
  
    static exitFullscreen(): void {
      window.Telegram.WebApp.exitFullscreen();
    }
  
    static get isFullscreen(): boolean {
      return window.Telegram.WebApp.isFullscreen;
    }
  }