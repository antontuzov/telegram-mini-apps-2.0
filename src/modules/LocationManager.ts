// src/modules/LocationManager.ts
import { LocationData } from "../types";

export class LocationManager {
    static init(callback?: () => void): void {
      window.Telegram.WebApp.LocationManager.init(callback);
    }
  
    static getLocation(callback: (location: LocationData | null) => void): void {
      window.Telegram.WebApp.LocationManager.getLocation(callback);
    }
  
    static openSettings(): void {
      window.Telegram.WebApp.LocationManager.openSettings();
    }
  }