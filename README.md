# Telegram Mini Apps-2.0 NPM Package 📦

A powerful and feature-rich TypeScript-based NPM package for interacting with Telegram Mini Apps. This package provides a seamless way to integrate Telegram Mini Apps into your projects, offering a wide range of functionalities to enhance user experience. 🚀

---

## Features ✨

- **Core Methods**: Ready, expand, close, and more. 🛠️
- **UI Controls**: BackButton, MainButton, SettingsButton. 🎛️
- **Haptic Feedback**: Provide tactile feedback to users. 📳
- **Cloud Storage**: Store and retrieve user-specific data. ☁️
- **Biometric Authentication**: Integrate fingerprint and face recognition. 🔒
- **Location Manager**: Access device location. 🌍
- **Sensors**: Accelerometer, Gyroscope, and Device Orientation. 📡
- **QR Scanner**: Scan QR codes directly in the app. 📷
- **Clipboard**: Read text from the clipboard. 📋
- **Sharing**: Share media to stories and messages. 📤
- **Fullscreen Mode**: Enter and exit fullscreen mode. 🖥️
- **Orientation Control**: Lock and unlock screen orientation. 🔄
- **Home Screen Integration**: Add the app to the home screen. 🏠
- **Event Handling**: Listen to and manage app events. 🎧

---
## Usage 🛠️
Importing the Package


import { TelegramWebApp } from 'telegram-mini-apps';

##Basic Usage

// Initialize the app
TelegramWebApp.ready();

// Set header color
TelegramWebApp.setHeaderColor('#ffffff');

// Show the back button
TelegramWebApp.BackButton.show();

// Set main button text
TelegramWebApp.MainButton.setText('Submit');

// Handle main button click
TelegramWebApp.MainButton.onClick(() => {
  console.log('Main button clicked!');
});

// Provide haptic feedback
TelegramWebApp.HapticFeedback.impactOccurred('medium');

// Get device location
TelegramWebApp.LocationManager.getLocation((location) => {
  console.log('Location:', location);
});

// Scan QR code
TelegramWebApp.QRScanner.show({ text: 'Scan QR Code' }, (data) => {
  console.log('QR Code data:', data);
});

// Read text from clipboard
TelegramWebApp.Clipboard.readText((text) => {
  console.log('Clipboard text:', text);
});

// Share media to story
TelegramWebApp.Share.shareToStory('https://example.com/media');

// Enter fullscreen mode
TelegramWebApp.Fullscreen.requestFullscreen();

// Lock screen orientation
TelegramWebApp.Orientation.lockOrientation();

// Add app to home screen
TelegramWebApp.HomeScreen.addToHomeScreen();

// Listen to events
TelegramWebApp.Events.onEvent('viewportChanged', (data) => {
  console.log('Viewport changed:', data);
});


