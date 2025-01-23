// src/modules/HomeScreen.ts

export class HomeScreen {
    static addToHomeScreen(): void {
      window.Telegram.WebApp.addToHomeScreen();
    }
  
    static checkHomeScreenStatus(callback?: (status: string) => void): void {
      window.Telegram.WebApp.checkHomeScreenStatus(callback);
    }
  }