// src/modules/Events.ts

export class Events {
    static onEvent(eventType: string, eventHandler: (data: any) => void): void {
      window.Telegram.WebApp.onEvent(eventType, eventHandler);
    }
  
    static offEvent(eventType: string, eventHandler: (data: any) => void): void {
      window.Telegram.WebApp.offEvent(eventType, eventHandler);
    }
  }