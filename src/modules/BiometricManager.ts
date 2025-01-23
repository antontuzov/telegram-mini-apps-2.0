// src/modules/BiometricManager.ts

export class BiometricManager {
    static init(callback?: () => void): void {
      window.Telegram.WebApp.BiometricManager.init(callback);
    }
  
    static requestAccess(params: BiometricRequestAccessParams, callback?: (granted: boolean) => void): void {
      window.Telegram.WebApp.BiometricManager.requestAccess(params, callback);
    }
  
    static authenticate(params: BiometricAuthenticateParams, callback?: (authenticated: boolean, token?: string) => void): void {
      window.Telegram.WebApp.BiometricManager.authenticate(params, callback);
    }
  
    static updateBiometricToken(token: string, callback?: (updated: boolean) => void): void {
      window.Telegram.WebApp.BiometricManager.updateBiometricToken(token, callback);
    }
  
    static openSettings(): void {
      window.Telegram.WebApp.BiometricManager.openSettings();
    }
  }