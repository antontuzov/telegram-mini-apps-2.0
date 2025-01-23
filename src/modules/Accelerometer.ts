// src/modules/Accelerometer.ts
import { AccelerometerStartParams } from "../types";



export class Accelerometer{
    static start(params: AccelerometerStartParams, callback?: (success: boolean) => void): void {
      window.Telegram.WebApp.Accelerometer.start(params, callback);
    }
  
    static stop(callback?: (success: boolean) => void): void {
      window.Telegram.WebApp.Accelerometer.stop(callback);
    }
  
    static get isStarted(): boolean {
      return window.Telegram.WebApp.Accelerometer.isStarted;
    }
  
    static get x(): number {
      return window.Telegram.WebApp.Accelerometer.x;
    }
  
    static get y(): number {
      return window.Telegram.WebApp.Accelerometer.y;
    }
  
    static get z(): number {
      return window.Telegram.WebApp.Accelerometer.z;
    }
  }