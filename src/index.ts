// src/index.ts

import {
  WebAppInitData,
  WebAppUser,
  WebAppChat,
  ThemeParams,
  PopupParams,
  PopupButton,
  HapticFeedback,
  CloudStorage,
  BiometricManager,
  LocationData,
  LocationManager,
} from './types';
import { BackButton } from './modules/BackButton';
import { MainButton } from './modules/MainButton';
import { HapticFeedback as Haptic } from './modules/HapticFeedback';
import { CloudStorage as Storage } from './modules/CloudStorage';
import { BiometricManager as Biometric } from './modules/BiometricManager';

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: WebAppInitData;
        version: string;
        platform: string;
        colorScheme: string;
        themeParams: ThemeParams;
        isExpanded: boolean;
        viewportHeight: number;
        viewportStableHeight: number;
        headerColor: string;
        backgroundColor: string;
        isClosingConfirmationEnabled: boolean;
        isVerticalSwipesEnabled: boolean;
        isFullscreen: boolean;
        isOrientationLocked: boolean;
        safeAreaInset: {
          top: number;
          bottom: number;
          left: number;
          right: number;
        };
        contentSafeAreaInset: {
          top: number;
          bottom: number;
          left: number;
          right: number;
        };
        BackButton: {
          isVisible: boolean;
          onClick(callback: () => void): void;
          offClick(callback: () => void): void;
          show(): void;
          hide(): void;
        };
        MainButton: {
          isVisible: boolean;
          setText(text: string): void;
          onClick(callback: () => void): void;
          offClick(callback: () => void): void;
          show(): void;
          hide(): void;
          enable(): void;
          disable(): void;
          showProgress(leaveActive?: boolean): void;
          hideProgress(): void;
        };
        HapticFeedback: HapticFeedback;
        CloudStorage: CloudStorage;
        BiometricManager: BiometricManager;
        LocationManager: LocationManager;
        ready(): void;
        expand(): void;
        close(): void;
      };
    };
  }
}

export class TelegramWebApp {
  static initData(): WebAppInitData {
    return window.Telegram.WebApp.initDataUnsafe;
  }

  static themeParams(): ThemeParams {
    return window.Telegram.WebApp.themeParams;
  }

  static setHeaderColor(color: string): void {
    window.Telegram.WebApp.setHeaderColor(color);
  }

  static setBackgroundColor(color: string): void {
    window.Telegram.WebApp.setBackgroundColor(color);
  }

  static ready(): void {
    window.Telegram.WebApp.ready();
  }

  static expand(): void {
    window.Telegram.WebApp.expand();
  }

  static close(): void {
    window.Telegram.WebApp.close();
  }

  static showPopup(params: PopupParams): void {
    window.Telegram.WebApp.showPopup(params);
  }

  static showAlert(message: string): void {
    window.Telegram.WebApp.showAlert(message);
  }

  static showConfirm(message: string, callback: (confirmed: boolean) => void): void {
    window.Telegram.WebApp.showConfirm(message, callback);
  }

  static get BackButton() {
    return BackButton;
  }

  static get MainButton() {
    return MainButton;
  }

  static get HapticFeedback() {
    return Haptic;
  }

  static get CloudStorage() {
    return Storage;
  }

  static get BiometricManager() {
    return Biometric;
  }

  static getLocation(callback: (location: LocationData | null) => void): void {
    window.Telegram.WebApp.LocationManager.getLocation(callback);
  }
}

  