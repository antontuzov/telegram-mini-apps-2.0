// src/modules/QRScanner.ts
import { QRScannerParams } from "../types";

export class QRScanner {
    static show(params: QRScannerParams, callback?: (data: string) => void): void {
      window.Telegram.WebApp.showScanQrPopup(params, callback);
    }
  
    static close(): void {
      window.Telegram.WebApp.closeScanQrPopup();
    }
  }