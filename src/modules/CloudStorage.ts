// src/modules/CloudStorage.ts

export class CloudStorage {
    static setItem(key: string, value: string, callback?: (error: Error | null, success: boolean) => void): void {
      window.Telegram.WebApp.CloudStorage.setItem(key, value, callback);
    }
  
    static getItem(key: string, callback: (error: Error | null, value: string | null) => void): void {
      window.Telegram.WebApp.CloudStorage.getItem(key, callback);
    }
  
    static removeItem(key: string, callback?: (error: Error | null, success: boolean) => void): void {
      window.Telegram.WebApp.CloudStorage.removeItem(key, callback);
    }
  }