// src/modules/DeviceOrientation.ts
import { DeviceOrientationStartParams } from "../types";




export class DeviceOrientation {
    static start(params: DeviceOrientationStartParams, callback?: (success: boolean) => void): void {
      window.Telegram.WebApp.DeviceOrientation.start(params, callback);
    }
  
    static stop(callback?: (success: boolean) => void): void {
      window.Telegram.WebApp.DeviceOrientation.stop(callback);
    }
  
    static get isStarted(): boolean {
      return window.Telegram.WebApp.DeviceOrientation.isStarted;
    }
  
    static get absolute(): boolean {
      return window.Telegram.WebApp.DeviceOrientation.absolute;
    }
  
    static get alpha(): number {
      return window.Telegram.WebApp.DeviceOrientation.alpha;
    }
  
    static get beta(): number {
      return window.Telegram.WebApp.DeviceOrientation.beta;
    }
  
    static get gamma(): number {
      return window.Telegram.WebApp.DeviceOrientation.gamma;
    }
  }