// src/modules/Gyroscope.ts
import { GyroscopeStartParams } from "../types";



export class Gyroscope {
    static start(params: GyroscopeStartParams, callback?: (success: boolean) => void): void {
      window.Telegram.WebApp.Gyroscope.start(params, callback);
    }
  
    static stop(callback?: (success: boolean) => void): void {
      window.Telegram.WebApp.Gyroscope.stop(callback);
    }
  
    static get isStarted(): boolean {
      return window.Telegram.WebApp.Gyroscope.isStarted;
    }
  
    static get x(): number {
      return window.Telegram.WebApp.Gyroscope.x;
    }
  
    static get y(): number {
      return window.Telegram.WebApp.Gyroscope.y;
    }
  
    static get z(): number {
      return window.Telegram.WebApp.Gyroscope.z;
    }
  }